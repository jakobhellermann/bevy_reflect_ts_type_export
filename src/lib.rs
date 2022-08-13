use bevy_reflect::{TypeInfo, TypeRegistration};
use std::fmt::Display;

pub struct Type {
    pub short_name: String,
    pub type_name: &'static str,
    pub type_info: &'static TypeInfo,
}
impl Type {
    pub fn from_registration(registration: &TypeRegistration) -> Type {
        Type {
            short_name: ts_type_name(registration.short_name()),
            type_name: registration.type_name(),
            type_info: registration.type_info(),
        }
    }
}

fn strip_infix<'a>(a: &'a str, prefix: &str, suffix: &str) -> Option<&'a str> {
    a.strip_prefix(prefix).and_then(|a| a.strip_suffix(suffix))
}

impl Display for Type {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self.type_info {
            TypeInfo::Struct(strukt) => {
                writeln!(f, "type {} = {{", self.short_name)?;
                for field in (0..strukt.field_len()).map(|i| strukt.field_at(i).unwrap()) {
                    let ts_name = |a| ts_type_name(&pretty_type_name::pretty_type_name_str(a));
                    let type_name = field.type_name();

                    let ts_name = if let Some(option) =
                        strip_infix(type_name, "core::option::Option<", ">")
                    {
                        format!("{} | null", ts_name(option))
                    } else if let Some(vec) = strip_infix(type_name, "alloc::vec::Vec<", ">") {
                        format!("{}[]", ts_name(vec))
                    } else {
                        ts_name(type_name)
                    };

                    writeln!(f, "    {}: {},", field.name(), ts_name)?;
                }
                writeln!(f, "}};")?;
            }
            _ => writeln!(f, "type {} = unknown;", self.short_name)?,
        }
        writeln!(
            f,
            "const {name}: BevyType<{name}> = {{ typeName: \"{type_name}\" }};",
            name = self.short_name,
            type_name = self.type_name
        )?;

        Ok(())
    }
}

fn ts_type_name(type_name: &str) -> String {
    let name = type_name.replace(|c: char| !c.is_alphanumeric(), "");

    if name == "String" {
        return "string".to_owned();
    };

    name
}

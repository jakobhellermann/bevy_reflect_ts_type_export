use bevy_reflect::{TypeInfo, TypeRegistry, VariantInfo};
use std::any::TypeId;
use std::collections::HashMap;
use std::fmt::Write;

pub struct TsTypenameContext<'a> {
    pub type_registry: &'a TypeRegistry,
    pub replacements: &'a HashMap<TypeId, &'static str>,
}
impl TsTypenameContext<'_> {
    fn ts_type_name(&self, type_id: TypeId) -> String {
        let registration = self.type_registry.get(type_id).unwrap();
        if let Some(replacement) = self.replacements.get(&type_id) {
            return replacement.to_string();
        }

        match registration.type_info() {
            TypeInfo::List(info) => return format!("{}[]", self.ts_type_name(info.item_type_id())),
            TypeInfo::Enum(info) if info.type_name().starts_with("core::option::Option") => {
                let some = info.variant("Some").unwrap();
                let inner_type_id = match some {
                    VariantInfo::Tuple(variant) => variant.field_at(0).unwrap().type_id(),
                    _ => unreachable!(),
                };
                return format!("{} | null", self.ts_type_name(inner_type_id));
            }
            _ => {}
        }

        registration
            .short_name()
            .replace(|c: char| !c.is_alphanumeric(), "")
    }
}

impl TsTypenameContext<'_> {
    pub fn type_definition(&self, type_id: TypeId) -> String {
        let registration = self.type_registry.get(type_id).unwrap();
        let type_name = self.ts_type_name(type_id);

        let mut string = String::new();
        match registration.type_info() {
            TypeInfo::Struct(strukt) => {
                writeln!(&mut string, "type {} = {{", type_name).unwrap();
                for field in (0..strukt.field_len()).map(|i| strukt.field_at(i).unwrap()) {
                    writeln!(
                        &mut string,
                        "    {}: {},",
                        field.name(),
                        self.ts_type_name(field.type_id())
                    )
                    .unwrap();
                }
                writeln!(&mut string, "}};").unwrap();
            }
            _ => {
                writeln!(&mut string, "type {} = unknown;", type_name).unwrap();
            }
        }
        string
    }

    pub fn bevy_type_declaration(&self, type_id: TypeId) -> String {
        let registration = self.type_registry.get(type_id).unwrap();
        let type_name = self.ts_type_name(type_id);

        format!(
            "const {name}: BevyType<{name}> = {{ typeName: \"{type_name}\" }};\n",
            name = type_name,
            type_name = registration.type_name(),
        )
    }
}

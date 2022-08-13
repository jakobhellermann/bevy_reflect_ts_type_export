use bevy::{
    core_pipeline::{clear_color::ClearColorConfig, core_3d::Camera3dDepthLoadOp},
    log::LogPlugin,
    prelude::*,
    render::camera::Viewport,
    sprite::Anchor,
    time::Stopwatch,
    winit::WinitPlugin,
};
use bevy_reflect::TypeRegistryArc;
use bevy_ts_type_export::Type;
use std::time::{Duration, Instant};

fn main() {
    let mut app = App::new();
    app.add_plugins_with(DefaultPlugins, |g| {
        g.disable::<LogPlugin>().disable::<WinitPlugin>()
    });
    app.register_type::<ClearColorConfig>()
        .register_type::<Camera3dDepthLoadOp>()
        .register_type::<Anchor>()
        .register_type::<Time>()
        .register_type::<Stopwatch>()
        .register_type::<Duration>()
        .register_type::<Instant>()
        .register_type::<TextSection>()
        .register_type::<Viewport>()
        .register_type::<TextAlignment>()
        .register_type::<TextStyle>();

    let type_registry = app.world.resource::<TypeRegistryArc>();
    let type_registry = type_registry.read();
    let types = type_registry
        .iter()
        .map(Type::from_registration)
        .filter(|ty| {
            ty.type_name.contains("::") && !["alloc::string::String"].contains(&ty.type_name)
        });
    let mut types: Vec<_> = types.collect();
    types.sort_by_key(|ty| ty.type_name);

    println!("{HEADER}");
    for ty in types {
        println!("{ty}");
    }
}

const HEADER: &'static str = r#"type BevyType<T> = { typeName: string };
type bool = boolean;
type f32 = number;
type f64 = number;
type i8 = number;
type i16 = number;
type i32 = number;
type i64 = number;
type isize = number;
type u8 = number;
type u16 = number;
type u32 = number;
type u64 = number;
type usize = number;
type Cowstr = String;
type Vec3A = Vec3;"#;

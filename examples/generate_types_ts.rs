use bevy::{
    core_pipeline::{clear_color::ClearColorConfig, core_3d::Camera3dDepthLoadOp},
    log::LogPlugin,
    math::Vec3A,
    prelude::*,
    render::camera::Viewport,
    sprite::Anchor,
    time::Stopwatch,
    winit::WinitPlugin,
};
use bevy_ts_type_export::TsTypenameContext;
use std::{
    borrow::Cow,
    collections::HashMap,
    time::{Duration, Instant},
};

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
        .register_type::<Vec<TextSection>>()
        .register_type::<Viewport>()
        .register_type::<TextAlignment>()
        .register_type::<TextStyle>()
        .register_type::<Cow<'static, str>>()
        .register_type::<Option<Viewport>>()
        .register_type::<Vec<Entity>>()
        .register_type::<Option<Vec2>>()
        .register_type::<Option<Instant>>()
        .register_type::<Option<Rect>>()
        .register_type::<Rect>()
        .register_type::<Vec3A>();

    let replacements: HashMap<_, _> = HashMap::from_iter([
        (std::any::TypeId::of::<f32>(), "number"),
        (std::any::TypeId::of::<f64>(), "number"),
        (std::any::TypeId::of::<u8>(), "number"),
        (std::any::TypeId::of::<u16>(), "number"),
        (std::any::TypeId::of::<u32>(), "number"),
        (std::any::TypeId::of::<u64>(), "number"),
        (std::any::TypeId::of::<u128>(), "number"),
        (std::any::TypeId::of::<usize>(), "number"),
        (std::any::TypeId::of::<i8>(), "number"),
        (std::any::TypeId::of::<i16>(), "number"),
        (std::any::TypeId::of::<i32>(), "number"),
        (std::any::TypeId::of::<i64>(), "number"),
        (std::any::TypeId::of::<i128>(), "number"),
        (std::any::TypeId::of::<isize>(), "number"),
        (std::any::TypeId::of::<bool>(), "boolean"),
        (std::any::TypeId::of::<String>(), "string"),
        (std::any::TypeId::of::<Cow<'static, str>>(), "string"),
    ]);

    let type_registry = app.world.resource::<AppTypeRegistry>();
    let type_registry = type_registry.read();
    let mut types: Vec<_> = type_registry
        .iter()
        .filter(|ty| {
            !replacements.contains_key(&ty.type_id())
                && !["alloc::vec::Vec", "core::option::Option"]
                    .iter()
                    .any(|name| ty.type_name().contains(name))
        })
        .collect();
    types.sort_by_key(|ty| ty.type_name());

    let context = TsTypenameContext {
        type_registry: &type_registry,
        replacements: &replacements,
    };

    let types: String = types
        .into_iter()
        .map(|ty| {
            format!(
                "{}{}",
                context.type_definition(ty.type_id()),
                context.bevy_type_declaration(ty.type_id())
            )
        })
        .collect();

    std::fs::write("generated/types.ts", types).unwrap();
}

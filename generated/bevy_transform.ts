type GlobalTransform = unknown;
type Transform = {
    translation: Vec3,
    rotation: Quat,
    scale: Vec3,
};

const GlobalTransform: BevyType<GlobalTransform> = { typeName: "bevy_transform::components::global_transform::GlobalTransform" };
const Transform: BevyType<Transform> = { typeName: "bevy_transform::components::transform::Transform" };

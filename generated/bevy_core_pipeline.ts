type ClearColor = unknown;
type ClearColorConfig = unknown;
type Camera2d = {
    clear_color: ClearColorConfig,
};
type Camera3d = {
    clear_color: ClearColorConfig,
    depth_load_op: Camera3dDepthLoadOp,
};
type Camera3dDepthLoadOp = unknown;

const ClearColor: BevyType<ClearColor> = { typeName: "bevy_core_pipeline::clear_color::ClearColor" };
const ClearColorConfig: BevyType<ClearColorConfig> = { typeName: "bevy_core_pipeline::clear_color::ClearColorConfig" };
const Camera2d: BevyType<Camera2d> = { typeName: "bevy_core_pipeline::core_2d::camera_2d::Camera2d" };
const Camera3d: BevyType<Camera3d> = { typeName: "bevy_core_pipeline::core_3d::camera_3d::Camera3d" };
const Camera3dDepthLoadOp: BevyType<Camera3dDepthLoadOp> = { typeName: "bevy_core_pipeline::core_3d::camera_3d::Camera3dDepthLoadOp" };

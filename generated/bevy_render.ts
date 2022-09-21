type Camera = {
    viewport: Viewport | null,
    priority: number,
    is_active: boolean,
};
type CameraRenderGraph = unknown;
type Viewport = {
    physical_position: UVec2,
    physical_size: UVec2,
    depth: Rangef32,
};
type OrthographicProjection = {
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number,
    window_origin: WindowOrigin,
    scaling_mode: ScalingMode,
    scale: number,
};
type PerspectiveProjection = {
    fov: number,
    aspect_ratio: number,
    near: number,
    far: number,
};
type Projection = unknown;
type ScalingMode = unknown;
type WindowOrigin = unknown;
type Color = unknown;
type SkinnedMesh = {
    inverse_bindposes: HandleSkinnedMeshInverseBindposes,
    joints: Entity[],
};
type Aabb = {
    center: Vec3A,
    half_extents: Vec3A,
};
type CubemapFrusta = {
};
type Frustum = {
};
type Msaa = {
    samples: number,
};
type ComputedVisibility = {
    is_visible_in_hierarchy: boolean,
    is_visible_in_view: boolean,
};
type Visibility = {
    is_visible: boolean,
};
type VisibleEntities = {
};

const Camera: BevyType<Camera> = { typeName: "bevy_render::camera::camera::Camera" };
const CameraRenderGraph: BevyType<CameraRenderGraph> = { typeName: "bevy_render::camera::camera::CameraRenderGraph" };
const Viewport: BevyType<Viewport> = { typeName: "bevy_render::camera::camera::Viewport" };
const OrthographicProjection: BevyType<OrthographicProjection> = { typeName: "bevy_render::camera::projection::OrthographicProjection" };
const PerspectiveProjection: BevyType<PerspectiveProjection> = { typeName: "bevy_render::camera::projection::PerspectiveProjection" };
const Projection: BevyType<Projection> = { typeName: "bevy_render::camera::projection::Projection" };
const ScalingMode: BevyType<ScalingMode> = { typeName: "bevy_render::camera::projection::ScalingMode" };
const WindowOrigin: BevyType<WindowOrigin> = { typeName: "bevy_render::camera::projection::WindowOrigin" };
const Color: BevyType<Color> = { typeName: "bevy_render::color::Color" };
const SkinnedMesh: BevyType<SkinnedMesh> = { typeName: "bevy_render::mesh::mesh::skinning::SkinnedMesh" };
const Aabb: BevyType<Aabb> = { typeName: "bevy_render::primitives::Aabb" };
const CubemapFrusta: BevyType<CubemapFrusta> = { typeName: "bevy_render::primitives::CubemapFrusta" };
const Frustum: BevyType<Frustum> = { typeName: "bevy_render::primitives::Frustum" };
const Msaa: BevyType<Msaa> = { typeName: "bevy_render::view::Msaa" };
const ComputedVisibility: BevyType<ComputedVisibility> = { typeName: "bevy_render::view::visibility::ComputedVisibility" };
const Visibility: BevyType<Visibility> = { typeName: "bevy_render::view::visibility::Visibility" };
const VisibleEntities: BevyType<VisibleEntities> = { typeName: "bevy_render::view::visibility::VisibleEntities" };

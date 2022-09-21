type AnimationPlayer = {
    paused: boolean,
    repeat: boolean,
    speed: number,
    elapsed: number,
    animation_clip: HandleAnimationClip,
};
const AnimationPlayer: BevyType<AnimationPlayer> = { typeName: "bevy_animation::AnimationPlayer" };
type HandleAnimationClip = {
    id: HandleId,
};
const HandleAnimationClip: BevyType<HandleAnimationClip> = { typeName: "bevy_asset::handle::Handle<bevy_animation::AnimationClip>" };
type HandleAudioSink = {
    id: HandleId,
};
const HandleAudioSink: BevyType<HandleAudioSink> = { typeName: "bevy_asset::handle::Handle<bevy_audio::audio_output::AudioSink>" };
type HandleAudioSource = {
    id: HandleId,
};
const HandleAudioSource: BevyType<HandleAudioSource> = { typeName: "bevy_asset::handle::Handle<bevy_audio::audio_source::AudioSource>" };
type HandleGltf = {
    id: HandleId,
};
const HandleGltf: BevyType<HandleGltf> = { typeName: "bevy_asset::handle::Handle<bevy_gltf::Gltf>" };
type HandleGltfMesh = {
    id: HandleId,
};
const HandleGltfMesh: BevyType<HandleGltfMesh> = { typeName: "bevy_asset::handle::Handle<bevy_gltf::GltfMesh>" };
type HandleGltfNode = {
    id: HandleId,
};
const HandleGltfNode: BevyType<HandleGltfNode> = { typeName: "bevy_asset::handle::Handle<bevy_gltf::GltfNode>" };
type HandleGltfPrimitive = {
    id: HandleId,
};
const HandleGltfPrimitive: BevyType<HandleGltfPrimitive> = { typeName: "bevy_asset::handle::Handle<bevy_gltf::GltfPrimitive>" };
type HandleStandardMaterial = {
    id: HandleId,
};
const HandleStandardMaterial: BevyType<HandleStandardMaterial> = { typeName: "bevy_asset::handle::Handle<bevy_pbr::pbr_material::StandardMaterial>" };
type HandleMesh = {
    id: HandleId,
};
const HandleMesh: BevyType<HandleMesh> = { typeName: "bevy_asset::handle::Handle<bevy_render::mesh::mesh::Mesh>" };
type HandleSkinnedMeshInverseBindposes = {
    id: HandleId,
};
const HandleSkinnedMeshInverseBindposes: BevyType<HandleSkinnedMeshInverseBindposes> = { typeName: "bevy_asset::handle::Handle<bevy_render::mesh::mesh::skinning::SkinnedMeshInverseBindposes>" };
type HandleShader = {
    id: HandleId,
};
const HandleShader: BevyType<HandleShader> = { typeName: "bevy_asset::handle::Handle<bevy_render::render_resource::shader::Shader>" };
type HandleImage = {
    id: HandleId,
};
const HandleImage: BevyType<HandleImage> = { typeName: "bevy_asset::handle::Handle<bevy_render::texture::image::Image>" };
type HandleDynamicScene = {
    id: HandleId,
};
const HandleDynamicScene: BevyType<HandleDynamicScene> = { typeName: "bevy_asset::handle::Handle<bevy_scene::dynamic_scene::DynamicScene>" };
type HandleScene = {
    id: HandleId,
};
const HandleScene: BevyType<HandleScene> = { typeName: "bevy_asset::handle::Handle<bevy_scene::scene::Scene>" };
type HandleColorMaterial = {
    id: HandleId,
};
const HandleColorMaterial: BevyType<HandleColorMaterial> = { typeName: "bevy_asset::handle::Handle<bevy_sprite::mesh2d::color_material::ColorMaterial>" };
type HandleTextureAtlas = {
    id: HandleId,
};
const HandleTextureAtlas: BevyType<HandleTextureAtlas> = { typeName: "bevy_asset::handle::Handle<bevy_sprite::texture_atlas::TextureAtlas>" };
type HandleFont = {
    id: HandleId,
};
const HandleFont: BevyType<HandleFont> = { typeName: "bevy_asset::handle::Handle<bevy_text::font::Font>" };
type HandleFontAtlasSet = {
    id: HandleId,
};
const HandleFontAtlasSet: BevyType<HandleFontAtlasSet> = { typeName: "bevy_asset::handle::Handle<bevy_text::font_atlas_set::FontAtlasSet>" };
type HandleId = unknown;
const HandleId: BevyType<HandleId> = { typeName: "bevy_asset::handle::HandleId" };
type Name = {
    hash: number,
    name: string,
};
const Name: BevyType<Name> = { typeName: "bevy_core::name::Name" };
type ClearColor = unknown;
const ClearColor: BevyType<ClearColor> = { typeName: "bevy_core_pipeline::clear_color::ClearColor" };
type ClearColorConfig = unknown;
const ClearColorConfig: BevyType<ClearColorConfig> = { typeName: "bevy_core_pipeline::clear_color::ClearColorConfig" };
type Camera2d = {
    clear_color: ClearColorConfig,
};
const Camera2d: BevyType<Camera2d> = { typeName: "bevy_core_pipeline::core_2d::camera_2d::Camera2d" };
type Camera3d = {
    clear_color: ClearColorConfig,
    depth_load_op: Camera3dDepthLoadOp,
};
const Camera3d: BevyType<Camera3d> = { typeName: "bevy_core_pipeline::core_3d::camera_3d::Camera3d" };
type Camera3dDepthLoadOp = unknown;
const Camera3dDepthLoadOp: BevyType<Camera3dDepthLoadOp> = { typeName: "bevy_core_pipeline::core_3d::camera_3d::Camera3dDepthLoadOp" };
type Entity = unknown;
const Entity: BevyType<Entity> = { typeName: "bevy_ecs::entity::Entity" };
type GltfExtras = {
    value: string,
};
const GltfExtras: BevyType<GltfExtras> = { typeName: "bevy_gltf::GltfExtras" };
type Children = unknown;
const Children: BevyType<Children> = { typeName: "bevy_hierarchy::components::children::Children" };
type Parent = unknown;
const Parent: BevyType<Parent> = { typeName: "bevy_hierarchy::components::parent::Parent" };
type Rect = {
    min: Vec2,
    max: Vec2,
};
const Rect: BevyType<Rect> = { typeName: "bevy_math::rect::Rect" };
type CubemapVisibleEntities = {
};
const CubemapVisibleEntities: BevyType<CubemapVisibleEntities> = { typeName: "bevy_pbr::bundle::CubemapVisibleEntities" };
type AmbientLight = {
    color: Color,
    brightness: number,
};
const AmbientLight: BevyType<AmbientLight> = { typeName: "bevy_pbr::light::AmbientLight" };
type DirectionalLight = {
    color: Color,
    illuminance: number,
    shadows_enabled: boolean,
    shadow_projection: OrthographicProjection,
    shadow_depth_bias: number,
    shadow_normal_bias: number,
};
const DirectionalLight: BevyType<DirectionalLight> = { typeName: "bevy_pbr::light::DirectionalLight" };
type DirectionalLightShadowMap = {
    size: number,
};
const DirectionalLightShadowMap: BevyType<DirectionalLightShadowMap> = { typeName: "bevy_pbr::light::DirectionalLightShadowMap" };
type PointLight = {
    color: Color,
    intensity: number,
    range: number,
    radius: number,
    shadows_enabled: boolean,
    shadow_depth_bias: number,
    shadow_normal_bias: number,
};
const PointLight: BevyType<PointLight> = { typeName: "bevy_pbr::light::PointLight" };
type PointLightShadowMap = {
    size: number,
};
const PointLightShadowMap: BevyType<PointLightShadowMap> = { typeName: "bevy_pbr::light::PointLightShadowMap" };
type SpotLight = {
    color: Color,
    intensity: number,
    range: number,
    radius: number,
    shadows_enabled: boolean,
    shadow_depth_bias: number,
    shadow_normal_bias: number,
    outer_angle: number,
    inner_angle: number,
};
const SpotLight: BevyType<SpotLight> = { typeName: "bevy_pbr::light::SpotLight" };
type Camera = {
    viewport: Viewport | null,
    priority: number,
    is_active: boolean,
};
const Camera: BevyType<Camera> = { typeName: "bevy_render::camera::camera::Camera" };
type CameraRenderGraph = unknown;
const CameraRenderGraph: BevyType<CameraRenderGraph> = { typeName: "bevy_render::camera::camera::CameraRenderGraph" };
type Viewport = {
    physical_position: UVec2,
    physical_size: UVec2,
    depth: Rangef32,
};
const Viewport: BevyType<Viewport> = { typeName: "bevy_render::camera::camera::Viewport" };
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
const OrthographicProjection: BevyType<OrthographicProjection> = { typeName: "bevy_render::camera::projection::OrthographicProjection" };
type PerspectiveProjection = {
    fov: number,
    aspect_ratio: number,
    near: number,
    far: number,
};
const PerspectiveProjection: BevyType<PerspectiveProjection> = { typeName: "bevy_render::camera::projection::PerspectiveProjection" };
type Projection = unknown;
const Projection: BevyType<Projection> = { typeName: "bevy_render::camera::projection::Projection" };
type ScalingMode = unknown;
const ScalingMode: BevyType<ScalingMode> = { typeName: "bevy_render::camera::projection::ScalingMode" };
type WindowOrigin = unknown;
const WindowOrigin: BevyType<WindowOrigin> = { typeName: "bevy_render::camera::projection::WindowOrigin" };
type Color = unknown;
const Color: BevyType<Color> = { typeName: "bevy_render::color::Color" };
type SkinnedMesh = {
    inverse_bindposes: HandleSkinnedMeshInverseBindposes,
    joints: Entity[],
};
const SkinnedMesh: BevyType<SkinnedMesh> = { typeName: "bevy_render::mesh::mesh::skinning::SkinnedMesh" };
type Aabb = {
    center: Vec3A,
    half_extents: Vec3A,
};
const Aabb: BevyType<Aabb> = { typeName: "bevy_render::primitives::Aabb" };
type CubemapFrusta = {
};
const CubemapFrusta: BevyType<CubemapFrusta> = { typeName: "bevy_render::primitives::CubemapFrusta" };
type Frustum = {
};
const Frustum: BevyType<Frustum> = { typeName: "bevy_render::primitives::Frustum" };
type Msaa = {
    samples: number,
};
const Msaa: BevyType<Msaa> = { typeName: "bevy_render::view::Msaa" };
type ComputedVisibility = {
    is_visible_in_hierarchy: boolean,
    is_visible_in_view: boolean,
};
const ComputedVisibility: BevyType<ComputedVisibility> = { typeName: "bevy_render::view::visibility::ComputedVisibility" };
type Visibility = {
    is_visible: boolean,
};
const Visibility: BevyType<Visibility> = { typeName: "bevy_render::view::visibility::Visibility" };
type VisibleEntities = {
};
const VisibleEntities: BevyType<VisibleEntities> = { typeName: "bevy_render::view::visibility::VisibleEntities" };
type Mesh2dHandle = unknown;
const Mesh2dHandle: BevyType<Mesh2dHandle> = { typeName: "bevy_sprite::mesh2d::mesh::Mesh2dHandle" };
type Anchor = unknown;
const Anchor: BevyType<Anchor> = { typeName: "bevy_sprite::sprite::Anchor" };
type Sprite = {
    color: Color,
    flip_x: boolean,
    flip_y: boolean,
    custom_size: Vec2 | null,
    rect: Rect | null,
    anchor: Anchor,
};
const Sprite: BevyType<Sprite> = { typeName: "bevy_sprite::sprite::Sprite" };
type HorizontalAlign = unknown;
const HorizontalAlign: BevyType<HorizontalAlign> = { typeName: "bevy_text::text::HorizontalAlign" };
type Text = {
    sections: TextSection[],
    alignment: TextAlignment,
};
const Text: BevyType<Text> = { typeName: "bevy_text::text::Text" };
type TextAlignment = {
    vertical: VerticalAlign,
    horizontal: HorizontalAlign,
};
const TextAlignment: BevyType<TextAlignment> = { typeName: "bevy_text::text::TextAlignment" };
type TextSection = {
    value: string,
    style: TextStyle,
};
const TextSection: BevyType<TextSection> = { typeName: "bevy_text::text::TextSection" };
type TextStyle = {
    font: HandleFont,
    font_size: number,
    color: Color,
};
const TextStyle: BevyType<TextStyle> = { typeName: "bevy_text::text::TextStyle" };
type VerticalAlign = unknown;
const VerticalAlign: BevyType<VerticalAlign> = { typeName: "bevy_text::text::VerticalAlign" };
type Stopwatch = {
    elapsed: Duration,
    paused: boolean,
};
const Stopwatch: BevyType<Stopwatch> = { typeName: "bevy_time::stopwatch::Stopwatch" };
type Time = {
    delta: Duration,
    last_update: Instant | null,
    delta_seconds_f64: number,
    delta_seconds: number,
    seconds_since_startup: number,
    time_since_startup: Duration,
    startup: Instant,
};
const Time: BevyType<Time> = { typeName: "bevy_time::time::Time" };
type Timer = {
    stopwatch: Stopwatch,
    duration: Duration,
    repeating: boolean,
    finished: boolean,
    times_finished_this_tick: number,
};
const Timer: BevyType<Timer> = { typeName: "bevy_time::timer::Timer" };
type GlobalTransform = unknown;
const GlobalTransform: BevyType<GlobalTransform> = { typeName: "bevy_transform::components::global_transform::GlobalTransform" };
type Transform = {
    translation: Vec3,
    rotation: Quat,
    scale: Vec3,
};
const Transform: BevyType<Transform> = { typeName: "bevy_transform::components::transform::Transform" };
type FocusPolicy = unknown;
const FocusPolicy: BevyType<FocusPolicy> = { typeName: "bevy_ui::focus::FocusPolicy" };
type Interaction = unknown;
const Interaction: BevyType<Interaction> = { typeName: "bevy_ui::focus::Interaction" };
type Size = {
    width: Val,
    height: Val,
};
const Size: BevyType<Size> = { typeName: "bevy_ui::geometry::Size" };
type UiRect = {
    left: Val,
    right: Val,
    top: Val,
    bottom: Val,
};
const UiRect: BevyType<UiRect> = { typeName: "bevy_ui::geometry::UiRect" };
type AlignContent = unknown;
const AlignContent: BevyType<AlignContent> = { typeName: "bevy_ui::ui_node::AlignContent" };
type AlignItems = unknown;
const AlignItems: BevyType<AlignItems> = { typeName: "bevy_ui::ui_node::AlignItems" };
type AlignSelf = unknown;
const AlignSelf: BevyType<AlignSelf> = { typeName: "bevy_ui::ui_node::AlignSelf" };
type CalculatedSize = {
    size: Size,
};
const CalculatedSize: BevyType<CalculatedSize> = { typeName: "bevy_ui::ui_node::CalculatedSize" };
type Direction = unknown;
const Direction: BevyType<Direction> = { typeName: "bevy_ui::ui_node::Direction" };
type Display = unknown;
const Display: BevyType<Display> = { typeName: "bevy_ui::ui_node::Display" };
type FlexDirection = unknown;
const FlexDirection: BevyType<FlexDirection> = { typeName: "bevy_ui::ui_node::FlexDirection" };
type FlexWrap = unknown;
const FlexWrap: BevyType<FlexWrap> = { typeName: "bevy_ui::ui_node::FlexWrap" };
type JustifyContent = unknown;
const JustifyContent: BevyType<JustifyContent> = { typeName: "bevy_ui::ui_node::JustifyContent" };
type Node = {
    size: Vec2,
};
const Node: BevyType<Node> = { typeName: "bevy_ui::ui_node::Node" };
type Overflow = unknown;
const Overflow: BevyType<Overflow> = { typeName: "bevy_ui::ui_node::Overflow" };
type PositionType = unknown;
const PositionType: BevyType<PositionType> = { typeName: "bevy_ui::ui_node::PositionType" };
type Style = {
    display: Display,
    position_type: PositionType,
    direction: Direction,
    flex_direction: FlexDirection,
    flex_wrap: FlexWrap,
    align_items: AlignItems,
    align_self: AlignSelf,
    align_content: AlignContent,
    justify_content: JustifyContent,
    position: UiRect,
    margin: UiRect,
    padding: UiRect,
    border: UiRect,
    flex_grow: number,
    flex_shrink: number,
    flex_basis: Val,
    size: Size,
    min_size: Size,
    max_size: Size,
    aspect_ratio: number | null,
    overflow: Overflow,
};
const Style: BevyType<Style> = { typeName: "bevy_ui::ui_node::Style" };
type UiColor = unknown;
const UiColor: BevyType<UiColor> = { typeName: "bevy_ui::ui_node::UiColor" };
type UiImage = unknown;
const UiImage: BevyType<UiImage> = { typeName: "bevy_ui::ui_node::UiImage" };
type Val = unknown;
const Val: BevyType<Val> = { typeName: "bevy_ui::ui_node::Val" };
type Button = {
};
const Button: BevyType<Button> = { typeName: "bevy_ui::widget::button::Button" };
type ImageMode = unknown;
const ImageMode: BevyType<ImageMode> = { typeName: "bevy_ui::widget::image::ImageMode" };
type Rangef32 = unknown;
const Rangef32: BevyType<Rangef32> = { typeName: "core::ops::range::Range<f32>" };
type Duration = unknown;
const Duration: BevyType<Duration> = { typeName: "core::time::Duration" };
type BVec2 = {
    x: boolean,
    y: boolean,
};
const BVec2: BevyType<BVec2> = { typeName: "glam::bool::bvec2::BVec2" };
type BVec3 = {
    x: boolean,
    y: boolean,
    z: boolean,
};
const BVec3: BevyType<BVec3> = { typeName: "glam::bool::bvec3::BVec3" };
type BVec4 = {
    x: boolean,
    y: boolean,
    z: boolean,
    w: boolean,
};
const BVec4: BevyType<BVec4> = { typeName: "glam::bool::bvec4::BVec4" };
type BVec3A = unknown;
const BVec3A: BevyType<BVec3A> = { typeName: "glam::bool::sse2::bvec3a::BVec3A" };
type BVec4A = unknown;
const BVec4A: BevyType<BVec4A> = { typeName: "glam::bool::sse2::bvec4a::BVec4A" };
type Affine2 = {
    matrix2: Mat2,
    translation: Vec2,
};
const Affine2: BevyType<Affine2> = { typeName: "glam::f32::affine2::Affine2" };
type Affine3A = {
    matrix3: Mat3A,
    translation: Vec3A,
};
const Affine3A: BevyType<Affine3A> = { typeName: "glam::f32::affine3a::Affine3A" };
type Mat3 = {
    x_axis: Vec3,
    y_axis: Vec3,
    z_axis: Vec3,
};
const Mat3: BevyType<Mat3> = { typeName: "glam::f32::mat3::Mat3" };
type Mat2 = {
    x_axis: Vec2,
    y_axis: Vec2,
};
const Mat2: BevyType<Mat2> = { typeName: "glam::f32::sse2::mat2::Mat2" };
type Mat3A = {
    x_axis: Vec3A,
    y_axis: Vec3A,
    z_axis: Vec3A,
};
const Mat3A: BevyType<Mat3A> = { typeName: "glam::f32::sse2::mat3a::Mat3A" };
type Mat4 = {
    x_axis: Vec4,
    y_axis: Vec4,
    z_axis: Vec4,
    w_axis: Vec4,
};
const Mat4: BevyType<Mat4> = { typeName: "glam::f32::sse2::mat4::Mat4" };
type Quat = unknown;
const Quat: BevyType<Quat> = { typeName: "glam::f32::sse2::quat::Quat" };
type Vec3A = {
    x: number,
    y: number,
    z: number,
};
const Vec3A: BevyType<Vec3A> = { typeName: "glam::f32::sse2::vec3a::Vec3A" };
type Vec4 = {
    x: number,
    y: number,
    z: number,
    w: number,
};
const Vec4: BevyType<Vec4> = { typeName: "glam::f32::sse2::vec4::Vec4" };
type Vec2 = {
    x: number,
    y: number,
};
const Vec2: BevyType<Vec2> = { typeName: "glam::f32::vec2::Vec2" };
type Vec3 = {
    x: number,
    y: number,
    z: number,
};
const Vec3: BevyType<Vec3> = { typeName: "glam::f32::vec3::Vec3" };
type DAffine2 = {
    matrix2: DMat2,
    translation: DVec2,
};
const DAffine2: BevyType<DAffine2> = { typeName: "glam::f64::daffine2::DAffine2" };
type DAffine3 = {
    matrix3: DMat3,
    translation: DVec3,
};
const DAffine3: BevyType<DAffine3> = { typeName: "glam::f64::daffine3::DAffine3" };
type DMat2 = {
    x_axis: DVec2,
    y_axis: DVec2,
};
const DMat2: BevyType<DMat2> = { typeName: "glam::f64::dmat2::DMat2" };
type DMat3 = {
    x_axis: DVec3,
    y_axis: DVec3,
    z_axis: DVec3,
};
const DMat3: BevyType<DMat3> = { typeName: "glam::f64::dmat3::DMat3" };
type DMat4 = {
    x_axis: DVec4,
    y_axis: DVec4,
    z_axis: DVec4,
    w_axis: DVec4,
};
const DMat4: BevyType<DMat4> = { typeName: "glam::f64::dmat4::DMat4" };
type DQuat = unknown;
const DQuat: BevyType<DQuat> = { typeName: "glam::f64::dquat::DQuat" };
type DVec2 = {
    x: number,
    y: number,
};
const DVec2: BevyType<DVec2> = { typeName: "glam::f64::dvec2::DVec2" };
type DVec3 = {
    x: number,
    y: number,
    z: number,
};
const DVec3: BevyType<DVec3> = { typeName: "glam::f64::dvec3::DVec3" };
type DVec4 = {
    x: number,
    y: number,
    z: number,
    w: number,
};
const DVec4: BevyType<DVec4> = { typeName: "glam::f64::dvec4::DVec4" };
type IVec2 = {
    x: number,
    y: number,
};
const IVec2: BevyType<IVec2> = { typeName: "glam::i32::ivec2::IVec2" };
type IVec3 = {
    x: number,
    y: number,
    z: number,
};
const IVec3: BevyType<IVec3> = { typeName: "glam::i32::ivec3::IVec3" };
type IVec4 = {
    x: number,
    y: number,
    z: number,
    w: number,
};
const IVec4: BevyType<IVec4> = { typeName: "glam::i32::ivec4::IVec4" };
type UVec2 = {
    x: number,
    y: number,
};
const UVec2: BevyType<UVec2> = { typeName: "glam::u32::uvec2::UVec2" };
type UVec3 = {
    x: number,
    y: number,
    z: number,
};
const UVec3: BevyType<UVec3> = { typeName: "glam::u32::uvec3::UVec3" };
type UVec4 = {
    x: number,
    y: number,
    z: number,
    w: number,
};
const UVec4: BevyType<UVec4> = { typeName: "glam::u32::uvec4::UVec4" };
type HashSetString = unknown;
const HashSetString: BevyType<HashSetString> = { typeName: "hashbrown::set::HashSet<alloc::string::String>" };
type Instant = unknown;
const Instant: BevyType<Instant> = { typeName: "std::time::Instant" };

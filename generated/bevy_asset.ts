type HandleAnimationClip = {
    id: HandleId,
};
type HandleAudioSink = {
    id: HandleId,
};
type HandleAudioSource = {
    id: HandleId,
};
type HandleGltf = {
    id: HandleId,
};
type HandleGltfMesh = {
    id: HandleId,
};
type HandleGltfNode = {
    id: HandleId,
};
type HandleGltfPrimitive = {
    id: HandleId,
};
type HandleStandardMaterial = {
    id: HandleId,
};
type HandleMesh = {
    id: HandleId,
};
type HandleSkinnedMeshInverseBindposes = {
    id: HandleId,
};
type HandleShader = {
    id: HandleId,
};
type HandleImage = {
    id: HandleId,
};
type HandleDynamicScene = {
    id: HandleId,
};
type HandleScene = {
    id: HandleId,
};
type HandleColorMaterial = {
    id: HandleId,
};
type HandleTextureAtlas = {
    id: HandleId,
};
type HandleFont = {
    id: HandleId,
};
type HandleFontAtlasSet = {
    id: HandleId,
};
type HandleId = unknown;

const HandleAnimationClip: BevyType<HandleAnimationClip> = { typeName: "bevy_asset::handle::Handle<bevy_animation::AnimationClip>" };
const HandleAudioSink: BevyType<HandleAudioSink> = { typeName: "bevy_asset::handle::Handle<bevy_audio::audio_output::AudioSink>" };
const HandleAudioSource: BevyType<HandleAudioSource> = { typeName: "bevy_asset::handle::Handle<bevy_audio::audio_source::AudioSource>" };
const HandleGltf: BevyType<HandleGltf> = { typeName: "bevy_asset::handle::Handle<bevy_gltf::Gltf>" };
const HandleGltfMesh: BevyType<HandleGltfMesh> = { typeName: "bevy_asset::handle::Handle<bevy_gltf::GltfMesh>" };
const HandleGltfNode: BevyType<HandleGltfNode> = { typeName: "bevy_asset::handle::Handle<bevy_gltf::GltfNode>" };
const HandleGltfPrimitive: BevyType<HandleGltfPrimitive> = { typeName: "bevy_asset::handle::Handle<bevy_gltf::GltfPrimitive>" };
const HandleStandardMaterial: BevyType<HandleStandardMaterial> = { typeName: "bevy_asset::handle::Handle<bevy_pbr::pbr_material::StandardMaterial>" };
const HandleMesh: BevyType<HandleMesh> = { typeName: "bevy_asset::handle::Handle<bevy_render::mesh::mesh::Mesh>" };
const HandleSkinnedMeshInverseBindposes: BevyType<HandleSkinnedMeshInverseBindposes> = { typeName: "bevy_asset::handle::Handle<bevy_render::mesh::mesh::skinning::SkinnedMeshInverseBindposes>" };
const HandleShader: BevyType<HandleShader> = { typeName: "bevy_asset::handle::Handle<bevy_render::render_resource::shader::Shader>" };
const HandleImage: BevyType<HandleImage> = { typeName: "bevy_asset::handle::Handle<bevy_render::texture::image::Image>" };
const HandleDynamicScene: BevyType<HandleDynamicScene> = { typeName: "bevy_asset::handle::Handle<bevy_scene::dynamic_scene::DynamicScene>" };
const HandleScene: BevyType<HandleScene> = { typeName: "bevy_asset::handle::Handle<bevy_scene::scene::Scene>" };
const HandleColorMaterial: BevyType<HandleColorMaterial> = { typeName: "bevy_asset::handle::Handle<bevy_sprite::mesh2d::color_material::ColorMaterial>" };
const HandleTextureAtlas: BevyType<HandleTextureAtlas> = { typeName: "bevy_asset::handle::Handle<bevy_sprite::texture_atlas::TextureAtlas>" };
const HandleFont: BevyType<HandleFont> = { typeName: "bevy_asset::handle::Handle<bevy_text::font::Font>" };
const HandleFontAtlasSet: BevyType<HandleFontAtlasSet> = { typeName: "bevy_asset::handle::Handle<bevy_text::font_atlas_set::FontAtlasSet>" };
const HandleId: BevyType<HandleId> = { typeName: "bevy_asset::handle::HandleId" };

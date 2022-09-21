type CubemapVisibleEntities = {
};
type AmbientLight = {
    color: Color,
    brightness: number,
};
type DirectionalLight = {
    color: Color,
    illuminance: number,
    shadows_enabled: boolean,
    shadow_projection: OrthographicProjection,
    shadow_depth_bias: number,
    shadow_normal_bias: number,
};
type DirectionalLightShadowMap = {
    size: number,
};
type PointLight = {
    color: Color,
    intensity: number,
    range: number,
    radius: number,
    shadows_enabled: boolean,
    shadow_depth_bias: number,
    shadow_normal_bias: number,
};
type PointLightShadowMap = {
    size: number,
};
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

const CubemapVisibleEntities: BevyType<CubemapVisibleEntities> = { typeName: "bevy_pbr::bundle::CubemapVisibleEntities" };
const AmbientLight: BevyType<AmbientLight> = { typeName: "bevy_pbr::light::AmbientLight" };
const DirectionalLight: BevyType<DirectionalLight> = { typeName: "bevy_pbr::light::DirectionalLight" };
const DirectionalLightShadowMap: BevyType<DirectionalLightShadowMap> = { typeName: "bevy_pbr::light::DirectionalLightShadowMap" };
const PointLight: BevyType<PointLight> = { typeName: "bevy_pbr::light::PointLight" };
const PointLightShadowMap: BevyType<PointLightShadowMap> = { typeName: "bevy_pbr::light::PointLightShadowMap" };
const SpotLight: BevyType<SpotLight> = { typeName: "bevy_pbr::light::SpotLight" };

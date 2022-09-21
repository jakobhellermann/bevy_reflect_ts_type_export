type BVec2 = {
    x: boolean,
    y: boolean,
};
type BVec3 = {
    x: boolean,
    y: boolean,
    z: boolean,
};
type BVec4 = {
    x: boolean,
    y: boolean,
    z: boolean,
    w: boolean,
};
type BVec3A = unknown;
type BVec4A = unknown;
type Affine2 = {
    matrix2: Mat2,
    translation: Vec2,
};
type Affine3A = {
    matrix3: Mat3A,
    translation: Vec3A,
};
type Mat3 = {
    x_axis: Vec3,
    y_axis: Vec3,
    z_axis: Vec3,
};
type Mat2 = {
    x_axis: Vec2,
    y_axis: Vec2,
};
type Mat3A = {
    x_axis: Vec3A,
    y_axis: Vec3A,
    z_axis: Vec3A,
};
type Mat4 = {
    x_axis: Vec4,
    y_axis: Vec4,
    z_axis: Vec4,
    w_axis: Vec4,
};
type Quat = unknown;
type Vec3A = {
    x: number,
    y: number,
    z: number,
};
type Vec4 = {
    x: number,
    y: number,
    z: number,
    w: number,
};
type Vec2 = {
    x: number,
    y: number,
};
type Vec3 = {
    x: number,
    y: number,
    z: number,
};
type DAffine2 = {
    matrix2: DMat2,
    translation: DVec2,
};
type DAffine3 = {
    matrix3: DMat3,
    translation: DVec3,
};
type DMat2 = {
    x_axis: DVec2,
    y_axis: DVec2,
};
type DMat3 = {
    x_axis: DVec3,
    y_axis: DVec3,
    z_axis: DVec3,
};
type DMat4 = {
    x_axis: DVec4,
    y_axis: DVec4,
    z_axis: DVec4,
    w_axis: DVec4,
};
type DQuat = unknown;
type DVec2 = {
    x: number,
    y: number,
};
type DVec3 = {
    x: number,
    y: number,
    z: number,
};
type DVec4 = {
    x: number,
    y: number,
    z: number,
    w: number,
};
type IVec2 = {
    x: number,
    y: number,
};
type IVec3 = {
    x: number,
    y: number,
    z: number,
};
type IVec4 = {
    x: number,
    y: number,
    z: number,
    w: number,
};
type UVec2 = {
    x: number,
    y: number,
};
type UVec3 = {
    x: number,
    y: number,
    z: number,
};
type UVec4 = {
    x: number,
    y: number,
    z: number,
    w: number,
};

const BVec2: BevyType<BVec2> = { typeName: "glam::bool::bvec2::BVec2" };
const BVec3: BevyType<BVec3> = { typeName: "glam::bool::bvec3::BVec3" };
const BVec4: BevyType<BVec4> = { typeName: "glam::bool::bvec4::BVec4" };
const BVec3A: BevyType<BVec3A> = { typeName: "glam::bool::sse2::bvec3a::BVec3A" };
const BVec4A: BevyType<BVec4A> = { typeName: "glam::bool::sse2::bvec4a::BVec4A" };
const Affine2: BevyType<Affine2> = { typeName: "glam::f32::affine2::Affine2" };
const Affine3A: BevyType<Affine3A> = { typeName: "glam::f32::affine3a::Affine3A" };
const Mat3: BevyType<Mat3> = { typeName: "glam::f32::mat3::Mat3" };
const Mat2: BevyType<Mat2> = { typeName: "glam::f32::sse2::mat2::Mat2" };
const Mat3A: BevyType<Mat3A> = { typeName: "glam::f32::sse2::mat3a::Mat3A" };
const Mat4: BevyType<Mat4> = { typeName: "glam::f32::sse2::mat4::Mat4" };
const Quat: BevyType<Quat> = { typeName: "glam::f32::sse2::quat::Quat" };
const Vec3A: BevyType<Vec3A> = { typeName: "glam::f32::sse2::vec3a::Vec3A" };
const Vec4: BevyType<Vec4> = { typeName: "glam::f32::sse2::vec4::Vec4" };
const Vec2: BevyType<Vec2> = { typeName: "glam::f32::vec2::Vec2" };
const Vec3: BevyType<Vec3> = { typeName: "glam::f32::vec3::Vec3" };
const DAffine2: BevyType<DAffine2> = { typeName: "glam::f64::daffine2::DAffine2" };
const DAffine3: BevyType<DAffine3> = { typeName: "glam::f64::daffine3::DAffine3" };
const DMat2: BevyType<DMat2> = { typeName: "glam::f64::dmat2::DMat2" };
const DMat3: BevyType<DMat3> = { typeName: "glam::f64::dmat3::DMat3" };
const DMat4: BevyType<DMat4> = { typeName: "glam::f64::dmat4::DMat4" };
const DQuat: BevyType<DQuat> = { typeName: "glam::f64::dquat::DQuat" };
const DVec2: BevyType<DVec2> = { typeName: "glam::f64::dvec2::DVec2" };
const DVec3: BevyType<DVec3> = { typeName: "glam::f64::dvec3::DVec3" };
const DVec4: BevyType<DVec4> = { typeName: "glam::f64::dvec4::DVec4" };
const IVec2: BevyType<IVec2> = { typeName: "glam::i32::ivec2::IVec2" };
const IVec3: BevyType<IVec3> = { typeName: "glam::i32::ivec3::IVec3" };
const IVec4: BevyType<IVec4> = { typeName: "glam::i32::ivec4::IVec4" };
const UVec2: BevyType<UVec2> = { typeName: "glam::u32::uvec2::UVec2" };
const UVec3: BevyType<UVec3> = { typeName: "glam::u32::uvec3::UVec3" };
const UVec4: BevyType<UVec4> = { typeName: "glam::u32::uvec4::UVec4" };

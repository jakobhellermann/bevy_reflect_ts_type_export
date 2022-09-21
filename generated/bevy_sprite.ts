type Mesh2dHandle = unknown;
type Anchor = unknown;
type Sprite = {
    color: Color,
    flip_x: boolean,
    flip_y: boolean,
    custom_size: Vec2 | null,
    rect: Rect | null,
    anchor: Anchor,
};

const Mesh2dHandle: BevyType<Mesh2dHandle> = { typeName: "bevy_sprite::mesh2d::mesh::Mesh2dHandle" };
const Anchor: BevyType<Anchor> = { typeName: "bevy_sprite::sprite::Anchor" };
const Sprite: BevyType<Sprite> = { typeName: "bevy_sprite::sprite::Sprite" };

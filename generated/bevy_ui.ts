type FocusPolicy = unknown;
type Interaction = unknown;
type Size = {
    width: Val,
    height: Val,
};
type UiRect = {
    left: Val,
    right: Val,
    top: Val,
    bottom: Val,
};
type AlignContent = unknown;
type AlignItems = unknown;
type AlignSelf = unknown;
type CalculatedSize = {
    size: Size,
};
type Direction = unknown;
type Display = unknown;
type FlexDirection = unknown;
type FlexWrap = unknown;
type JustifyContent = unknown;
type Node = {
    size: Vec2,
};
type Overflow = unknown;
type PositionType = unknown;
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
type UiColor = unknown;
type UiImage = unknown;
type Val = unknown;
type Button = {
};
type ImageMode = unknown;

const FocusPolicy: BevyType<FocusPolicy> = { typeName: "bevy_ui::focus::FocusPolicy" };
const Interaction: BevyType<Interaction> = { typeName: "bevy_ui::focus::Interaction" };
const Size: BevyType<Size> = { typeName: "bevy_ui::geometry::Size" };
const UiRect: BevyType<UiRect> = { typeName: "bevy_ui::geometry::UiRect" };
const AlignContent: BevyType<AlignContent> = { typeName: "bevy_ui::ui_node::AlignContent" };
const AlignItems: BevyType<AlignItems> = { typeName: "bevy_ui::ui_node::AlignItems" };
const AlignSelf: BevyType<AlignSelf> = { typeName: "bevy_ui::ui_node::AlignSelf" };
const CalculatedSize: BevyType<CalculatedSize> = { typeName: "bevy_ui::ui_node::CalculatedSize" };
const Direction: BevyType<Direction> = { typeName: "bevy_ui::ui_node::Direction" };
const Display: BevyType<Display> = { typeName: "bevy_ui::ui_node::Display" };
const FlexDirection: BevyType<FlexDirection> = { typeName: "bevy_ui::ui_node::FlexDirection" };
const FlexWrap: BevyType<FlexWrap> = { typeName: "bevy_ui::ui_node::FlexWrap" };
const JustifyContent: BevyType<JustifyContent> = { typeName: "bevy_ui::ui_node::JustifyContent" };
const Node: BevyType<Node> = { typeName: "bevy_ui::ui_node::Node" };
const Overflow: BevyType<Overflow> = { typeName: "bevy_ui::ui_node::Overflow" };
const PositionType: BevyType<PositionType> = { typeName: "bevy_ui::ui_node::PositionType" };
const Style: BevyType<Style> = { typeName: "bevy_ui::ui_node::Style" };
const UiColor: BevyType<UiColor> = { typeName: "bevy_ui::ui_node::UiColor" };
const UiImage: BevyType<UiImage> = { typeName: "bevy_ui::ui_node::UiImage" };
const Val: BevyType<Val> = { typeName: "bevy_ui::ui_node::Val" };
const Button: BevyType<Button> = { typeName: "bevy_ui::widget::button::Button" };
const ImageMode: BevyType<ImageMode> = { typeName: "bevy_ui::widget::image::ImageMode" };

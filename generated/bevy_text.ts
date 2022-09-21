type HorizontalAlign = unknown;
type Text = {
    sections: TextSection[],
    alignment: TextAlignment,
};
type TextAlignment = {
    vertical: VerticalAlign,
    horizontal: HorizontalAlign,
};
type TextSection = {
    value: string,
    style: TextStyle,
};
type TextStyle = {
    font: HandleFont,
    font_size: number,
    color: Color,
};
type VerticalAlign = unknown;

const HorizontalAlign: BevyType<HorizontalAlign> = { typeName: "bevy_text::text::HorizontalAlign" };
const Text: BevyType<Text> = { typeName: "bevy_text::text::Text" };
const TextAlignment: BevyType<TextAlignment> = { typeName: "bevy_text::text::TextAlignment" };
const TextSection: BevyType<TextSection> = { typeName: "bevy_text::text::TextSection" };
const TextStyle: BevyType<TextStyle> = { typeName: "bevy_text::text::TextStyle" };
const VerticalAlign: BevyType<VerticalAlign> = { typeName: "bevy_text::text::VerticalAlign" };

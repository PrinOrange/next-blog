export interface AffixProps extends React.HTMLAttributes<HTMLElement> {
  direction: "top" | "bottom" | "right" | "left";
  space: number;
}

export default function Affix(props: AffixProps) {
  const _style = {
    position: "sticky",
    top: undefined,
    bottom: undefined,
    right: undefined,
    left: undefined,
  } as React.CSSProperties;
  _style[props.direction] = props.space;

  return <div style={_style}>{props.children}</div>;
}

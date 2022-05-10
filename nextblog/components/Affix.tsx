import classNames from "classnames";

export interface AffixProps extends React.HTMLAttributes<HTMLElement> {
  direction: "top" | "bottom" | "right" | "left";
  responsive?: "sm" | "md" | "lg" | "xl" | "2xl";
  space: number;
}

export default function Affix(props: AffixProps) {
  const _style = {
    top: undefined,
    bottom: undefined,
    right: undefined,
    left: undefined,
    zIndex: 90000,
  } as React.CSSProperties;
  _style[props.direction] = props.space;

  const classnames = classNames(
    `${props.responsive ? `${props.responsive}:tw-sticky` : "tw-sticky"}`
  );

  return (
    <div className={classnames} style={_style}>
      {props.children}
    </div>
  );
}

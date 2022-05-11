import classNames from "classnames";
import React from "react";

interface propsType extends React.HTMLAttributes<HTMLElement> {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xl2: boolean;
}

export default function ResponsiveShow(props: propsType) {
  return (
    <div className={classNames({ "sm:tw-hidden": props.sm ?? false })}>
      {props.children}
    </div>
  );
}

import React from "react";

export default function ColorfulBadges(props: { stringArr?: string[] }) {
  const colors_list = [
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-danger",
    "bg-warning  text-dark",
    "bg-info text-dark",
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-danger",
  ];

  const getColorIndex = (index: number): number => {
    let _rem_num;
    _rem_num = index % 10;
    return _rem_num;
  };

  if (props.stringArr != null)
    return (
      <React.Fragment>
        {props.stringArr.map((item: string, index: number) => (
          <span
            className={`badge badge-margin mx-1 my-1 rounded-pill ${
              colors_list[getColorIndex(index)]
            }`}
            key={`badge-${item}:${index}`}
          >
            {item}
          </span>
        ))}
      </React.Fragment>
    );
  return null;
}

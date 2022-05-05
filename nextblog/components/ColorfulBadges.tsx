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
    "bg-warning  text-dark",
    "bg-info text-dark",
  ];

  if (props.stringArr != null)
    return (
      <React.Fragment>
        {props.stringArr.map((item: string, index: number) => (
          <span
            className={`badge badge-margin mx-1 my-1 rounded-pill ${
              colors_list[index % 10]
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

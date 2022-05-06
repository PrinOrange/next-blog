import { useState } from "react";
import { Button, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useDocFilter } from "../hooks/useDocFilter";

function CheckBroad(props: { tags: string[] }) {
  const fl = useDocFilter();

  const [keyword_input, set_keyword_input] = useState<string>("");
  const [tags_input, set_tags_input] = useState([]);

  const handleKeywordChange = (e: any) => {
    set_keyword_input(e.target.value);
  };

  const handleTagsChange = (val: any) => {
    set_tags_input(val);
  };

  const checkLoad = () => {
    fl.setFilter({ keyword: keyword_input.split(","), tags: tags_input });
    console.log(fl.getFilter());
  };

  return (
    <div className="tw-my-3">
      <Form.Control
        type="search"
        className="rounded-pill shadow-none"
        placeholder="Input Keywords Here..."
        value={keyword_input}
        onChange={handleKeywordChange}
      />
      <ToggleButtonGroup
        type="checkbox"
        bsPrefix=" tw-flex tw-justify-center tw-my-3 tw-flex-wrap"
        value={tags_input}
        onChange={handleTagsChange}
      >
        {props.tags.map((item, index) => {
          const variant_list = [
            "primary",
            "secondary",
            "success",
            "danger",
            "info",
            "warning",
            "dark",
            "primary",
            "secondary",
            "success",
            "danger",
          ];
          return (
            <ToggleButton
              variant={`outline-${variant_list[index % 10]}`}
              className="shadow-none tw-mx-1 rounded-pill tw-my-1"
              id={`filter-${item}-${index}`}
              key={`filter-${item}-${index}`}
              value={item}
              as="div"
              size="sm"
            >
              {item}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
      <div className=" tw-flex tw-justify-center">
        <Button
          as={"div"}
          className="rounded-pill shadow-none tw-px-6 tw-font-bold"
          onClick={checkLoad}
        >
          Check
        </Button>
      </div>
    </div>
  );
}

export default CheckBroad;

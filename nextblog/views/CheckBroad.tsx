import { useRef, useState } from "react";
import { Button, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useAppDispatch } from "../pages/_store";
import { cleanList, DocsCheckerFilter, fetchCheckedDocsList } from "../slices/DocsCheckerSlice";

function CheckBroad(props: { tags: string[] }) {
  const [keyword_state, set_keyword_state] = useState<string>("");
  const [tags_state, set_tags_state] = useState<string>("");

  const checker = useRef<DocsCheckerFilter>({
    keyword: "",
    tags: "",
    outset: "",
  });

  const dispatch = useAppDispatch();

  const handleKeywordChange = (e: any) => {
    set_keyword_state(e.target.value);
    checker.current.keyword = e.target.value?.split(",");
  };

  const handleTagsChange = (val: any) => {
    set_tags_state(val.join(","));
    checker.current.tags = val.join(",");
  };

  const checkLoad = () => {
    dispatch(cleanList());
    dispatch(
      fetchCheckedDocsList({
        tags: tags_state,
        keyword: keyword_state,
      })
    );
  };

  return (
    <div className="tw-my-6">
      <Form.Control
        type="search"
        className="rounded-pill shadow-none"
        placeholder="Input Keywords Here..."
        value={keyword_state}
        onChange={handleKeywordChange}
      />
      <div className=" tw-flex tw-justify-center tw-my-4">
        <Button
          as={"div"}
          className="rounded-pill shadow-none tw-px-6 tw-font-bold"
          onClick={checkLoad}
        >
          {"Check"}
        </Button>
      </div>
      <ToggleButtonGroup
        type="checkbox"
        bsPrefix=" tw-flex tw-justify-center tw-my-3 tw-flex-wrap"
        value={tags_state.split(",")}
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
    </div>
  );
}

export default CheckBroad;

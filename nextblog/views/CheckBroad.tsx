import { Button, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { cleanCheckerListState, DocsCheckerFactor, fetchCheckedDocsListThunk } from "../redux/DocsCheckerSlice";
import { useAppDispatch } from "../redux/_store";
import { useRef, useState } from "react";

function CheckBroad(props: { tags: string[] }) {
  const [search_terms_state, set_search_terms_state] = useState<string>("");
  const [search_tags_state, set_search_tags_state] = useState<string[]>([]);

  const factor_ref = useRef<DocsCheckerFactor>({
    search_terms: "",
    search_tags: "",
    outset: "",
  });

  const dispatch = useAppDispatch();

  const handleKeyCheck = (e: any) => {
    if (e.key == 'Enter') {
        handleCheckLoad();
    }
}

  const handleSearchTermsChange = (e: any) => {
    set_search_terms_state(e.target.value);
    factor_ref.current.search_terms = e.target.value;
  };

  const handleSearchTagsChange = (val: any) => {
    set_search_tags_state(val);
    factor_ref.current.search_tags = val.join(",");
  };

  const handleCheckLoad = () => {
    dispatch(cleanCheckerListState());
    dispatch(
      fetchCheckedDocsListThunk({
        search_tags: factor_ref.current.search_tags,
        search_terms: factor_ref.current.search_terms,
      })
    );
  };

  return (
    <div className="tw-my-6">
      <Form.Control type="search" className="rounded-pill shadow-none" placeholder="Input Keywords Here..." value={search_terms_state} onChange={handleSearchTermsChange} onKeyUp={handleKeyCheck} />
      <div className="tw-flex tw-justify-center tw-my-4">
        <Button as={"div"} className="tw-rounded-full tw-shadow-none tw-px-6 tw-font-bold" onClick={handleCheckLoad}>
          {"Check"}
        </Button>
      </div>
      <ToggleButtonGroup type="checkbox" bsPrefix="tw-flex tw-justify-center tw-my-3 tw-flex-wrap" value={search_tags_state} onChange={handleSearchTagsChange}>
        {props.tags.map((item, index) => {
          const variant_list = ["primary", "secondary", "success", "danger", "info", "warning", "dark", "primary", "secondary", "success", "danger"];
          return (
            <ToggleButton
              variant={`outline-${variant_list[index % 10]}`}
              className="tw-shadow-none tw-mx-1 tw-rounded-full tw-my-1"
              id={`factor-tags-${item}-${index}`}
              key={`filter-tags-${item}-${index}`}
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

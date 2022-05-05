import {
  Button,
  Card,
  Form,
  ListGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { useRef, useState } from "react";
import { DocsListModel } from "../model/DocsListModel";
import ColorfulBadges from "../components/ColorfulBadges";

interface DocFilterType {
  keyword?: string[];
  tags?: string[];
  outset?: string;
}

export default function DocsList(props: {
  tags?: string[];
  list: DocsListModel;
}) {
  const filter = useRef<DocFilterType>({});
  // const [docs_list, set_docs_list] = useState<DocsListModel>([]);

  const [keyword_input, set_keyword_input] = useState<string>("");
  const [tags_input, set_tags_input] = useState([]);

  const handleKeywordChange = (e: any) => {
    set_keyword_input(e.target.value);
    filter.current.keyword = keyword_input.split(",");
  };

  const handleTagsChange = (val: any) => {
    set_tags_input(val);
    filter.current.tags = tags_input;
  };

  const checkLoad = () => {
    console.log(filter.current);
  };

  return (
    <Card className=" tw-rounded-2xl tw-border-0">
      <Card.Body>
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
          {props.tags?.map((item, index) => {
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
        <div className=" tw-my-6">
          <ListGroup>
            {props.list.map((item, index) => (
              <ListGroup.Item
                key={`doclist-${item.id}`}
                action
                className="border-start-0 border-end-0 border-top-0"
              >
                <div>
                  <ColorfulBadges stringArr={item.tags} />
                </div>
                <div className="d-flex justify-content-center">
                  {item.imgURL != null && item.imgURL !== "" ? (
                    <img
                      className="img-fluid my-2 rounded-3"
                      src={item.imgURL}
                      alt={"图片背景"}
                    />
                  ) : null}
                </div>
                <div className="col-sm mt-3 d-flex justify-content-center flex-column">
                  <h5 className="card-title text-center fw-bold">
                    {item.title}
                  </h5>
                  <h6 className="card-subtitle my-2 text-muted fw-bold fs-6 text-center text-overflow-2">
                    {item.subtitle}
                  </h6>
                  <p className="card-text text-indent-2 text-overflow-5 text-align-justify">
                    {item.citation}
                  </p>
                </div>
                <div className="text-muted d-flex flex-column justify-content-between my-2">
                  <div className="fs-6 fw-light text-end">{`${"发布日期"}${
                    item.postDate
                  }`}</div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  );
}

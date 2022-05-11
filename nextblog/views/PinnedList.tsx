import { Card, ListGroup } from "react-bootstrap";
import { RiPushpinFill } from "react-icons/ri";
import { PinnedListModel } from "../model/PinnedListModel";
export default function PinnedListBroad(props: { list: PinnedListModel }) {
  return (
    <Card className="tw-border tw-rounded-2xl tw-my-6">
      <Card.Body>
        <span>
          <RiPushpinFill className="tw-inline" size={"1em"} />
          {"Pinned"}
        </span>
        <ListGroup as="ol" className="tw-my-3 tw-px-0" numbered variant="flush">
          {props.list.map((item, index) => (
            <ListGroup.Item
              key={`pinnedList-${item.id}-${index}`}
              as="div"
              className="d-flex justify-content-between align-items-start tw-cursor-pointer"
              action
            >
              <a href={`/docs/${item.id}`}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>
                  {item.subtitle}
                </div>
              </a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

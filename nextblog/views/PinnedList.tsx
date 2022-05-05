import { Card, ListGroup } from "react-bootstrap";
import { PinnedListModel } from "../model/PinnedListModel";
import { RiPushpinFill } from "react-icons/ri";

export default function PinnedList(props: { list: PinnedListModel }) {
  return (
    <Card className=" tw-border tw-rounded-2xl">
      <Card.Body className="tw-px-0">
        <div className=" tw-text-2xl tw-font-bold tw-flex tw-justify-center">
          <RiPushpinFill />
          {"Pinned"}
        </div>
        <ListGroup as="ol" numbered variant="flush">
          {props.list.map((item, index) => (
            <ListGroup.Item
              key={`pinnedList-${item.id}`}
              as="li"
              className="d-flex justify-content-between align-items-start"
              action
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item.title}</div>
                {item.subtitle}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

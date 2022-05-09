import { Button, ListGroup } from "react-bootstrap";
import { PinnedListModel } from "../model/PinnedListModel";
import { useSelector } from "react-redux";
export default function PinnedListBroad(props: { list: PinnedListModel }) {
  return (
    <ListGroup as="ol" className="tw-my-3 tw-px-0" numbered variant="flush">
      {props.list.map((item, index) => (
        <ListGroup.Item
          key={`pinnedList-${item.id}-${index}`}
          as="div"
          className="d-flex justify-content-between align-items-start tw-cursor-pointer"
          action
        >
          <a>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.title}</div>
              {item.subtitle}
            </div>
          </a>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

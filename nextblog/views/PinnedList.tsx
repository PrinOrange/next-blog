import { Card, ListGroup } from "react-bootstrap";
import { RiPushpinFill } from "react-icons/ri";
import { PinnedListModel } from "../model/PinnedListModel";
export default function PinnedListBroad(props: { list: PinnedListModel }) {
  return (
    <Card className="tw-border tw-rounded-2xl tw-my-6">
      <Card.Body>
        <span className=" tw-text-2xl tw-font-bold tw-flex tw-justify-center">
          <RiPushpinFill className="tw-inline tw-mx-2" size={"1em"} />
          {"Pinned"}
        </span>
        <ListGroup as="ol" className="tw-my-3 tw-px-0" numbered variant="flush">
          {props.list.map((item, index) => (
            <ListGroup.Item key={`pinnedList-${item.id}-${index}`} as="div" className="tw-flex tw-justify-start tw-cursor-pointer" action>
              <a href={`/docs/${item.id}`} target="_blank" rel="noreferrer">
                <div className="tw-font-bold">{item.title}</div>
                {item.subtitle}
              </a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

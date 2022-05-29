import { Card, ListGroup } from "react-bootstrap";
import { FaUserFriends } from "react-icons/fa";
import { FriendListModel } from "../model/FriendListModel";

export default function Friends(props: { list: FriendListModel }) {
  return (
    <Card className="tw-border tw-rounded-2xl tw-my-6">
      <Card.Body className="tw-px-0">
        <div className="tw-text-2xl tw-font-bold tw-flex tw-justify-center">
          <FaUserFriends className=" tw-mx-2" />
          {"My Friends"}
        </div>
        <ListGroup as="ol" numbered variant="flush">
          {props.list.map((item, index) => (
            <ListGroup.Item
              key={`pinnedList-${item.name}-${index}`}
              as="a"
              target={"_blank"}
              href={item.href}
              className="tw-flex tw-justify-between tw-align-middle tw-cursor-pointer"
              action
            >
              <div className="tw-ms-4 tw-me-auto">
                <div className="tw-font-bold">{item.name}</div>
                {item.describe}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

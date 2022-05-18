import Link from "next/link";
import { Card, ListGroup } from "react-bootstrap";
import { FaListUl } from "react-icons/fa";
import { NextContentModel } from "../model/NextContentModel";

export default function NextContent(props: { list: NextContentModel }) {
  return (
    <Card className="tw-border tw-rounded-2xl tw-my-6">
      <Card.Body>
        <div className="tw-my-2 tw-text-xl tw-font-bold tw-text-center">
          <FaListUl className=" tw-inline tw-mx-2" />
          {"Contents"}
        </div>
        <ListGroup as="ol" className="tw-my-3 tw-px-0" numbered variant="flush">
          {props.list.map((item, index) => (
            <Link
              href={`/docs/${item.id}`}
              key={`pinnedList-${item.id}-${index}`}
              passHref
            >
              <ListGroup.Item
                as="div"
                className="d-flex justify-content-between align-items-start tw-cursor-pointer"
                action
              >
                <a href={`/docs/${item.id}`} className="hover:tw-text-inherit">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.title}</div>
                    {item.subtitle}
                  </div>
                </a>
              </ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

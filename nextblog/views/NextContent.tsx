import Link from "next/link";
import { Card, ListGroup } from "react-bootstrap";
import { FaListUl } from "react-icons/fa";
import { NextContentModel } from "../model/NextContentModel";

export default function NextContent(props: { list: NextContentModel }) {
  return (
    <Card className="tw-border tw-rounded-2xl tw-my-6">
      <Card.Body>
        <div className="tw-my-2 tw-text-xl tw-font-bold tw-text-center">
          <FaListUl className="tw-inline tw-mx-2" />
          {"Contents"}
        </div>
        <ListGroup as="ol" className="tw-my-3 tw-px-0" numbered variant="flush">
          {props.list.map((item, index) => (
            <ListGroup.Item as="div" key={`pinnedList-${item.id}-${index}`} className="tw-flex tw-justify-between tw-align-middle tw-cursor-pointer" action>
              <a href={`/docs/${item.id}`} className="hover:tw-text-inherit" target="_blank" rel="noreferrer">
                <div className="tw-ml-2 tw-mr-auto">
                  <div className="tw-font-bold">{item.title}</div>
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

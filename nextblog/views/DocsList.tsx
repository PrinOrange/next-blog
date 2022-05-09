import Link from "next/link";
import { ListGroup } from "react-bootstrap";
import ColorfulBadges from "../components/ColorfulBadges";
import { DocsListModel } from "../model/DocsListModel";

export default function DocsList(props: {
  tags?: string[];
  list: DocsListModel;
}) {
  return (
    <div>
      <ListGroup>
        {props.list.map((item, index) => (
          <Link href={`/docs/${item.id}`} key={`doclist-${item.id}`}>
            <ListGroup.Item
              action
              className="border-start-0 border-end-0 border-top-0"
            >
              <div>
                <ColorfulBadges stringArr={item.tags} />
              </div>
              <div className="tw-flex tw-justify-center tw-my-3">
                {item.imgURL != null && item.imgURL !== "" ? (
                  <img
                    className="img-fluid tw-rounded-xl"
                    src={item.imgURL}
                    alt={item.title}
                  />
                ) : null}
              </div>
              <div className=" tw-flex tw-justify-center tw-flex-col">
                <h5 className="tw-text-center tw-font-bold tw-text-2xl">
                  {item.title}
                </h5>
                <h6 className=" tw-my-2 tw-text-center tw-text-gray-500 tw-font-bold">
                  {item.subtitle}
                </h6>
                <p className="tw-indent-8 text-justify">{item.citation}</p>
              </div>
              <div className="text-muted d-flex flex-column justify-content-between my-2">
                <div className="fs-6 fw-light text-end">{`${"发布日期"}${
                  item.postDate
                }`}</div>
              </div>
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </div>
  );
}

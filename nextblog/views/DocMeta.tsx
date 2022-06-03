import ColorfulBadges from "../components/ColorfulBadges";
import { Card } from "react-bootstrap";
import { DocMetaModel } from "../model/DocMetaModel";
import { FaLink } from "react-icons/fa";
import { yyyyMMddhhmmssToDate } from "../api/datestring";

export default function DocMeta(props: DocMetaModel) {
  return (
    <Card className="tw-border tw-rounded-2xl tw-my-6">
      <Card.Body className="">
        <dl className="row mt-3">
          {props.author ? (
            <>
              <dt className="col-4">{"作者"}</dt>
              <dd className="col-8">{props.author}</dd>
            </>
          ) : null}

          {props.originURL ? (
            <>
              <dt className="col-4">
                {"来源"}
                <FaLink className="tw-mx-2 tw-inline" size="1em" />
              </dt>
              <dd className="col-8">
                <a href={props.originURL}>{props.originFrom}</a>
              </dd>
            </>
          ) : null}

          {props.postDate ? (
            <>
              <dt className="col-4">{"日期"}</dt>
              <dd className="col-8">{yyyyMMddhhmmssToDate(props.postDate)}</dd>
            </>
          ) : null}

          {props.allowShare ? (
            <>
              <dt className="col-4">{"转载权"}</dt>
              <dd className="col-8">{props.allowShare ? "允许" : "不允许"}</dd>
            </>
          ) : null}

          {props.declaration ? (
            <>
              <dt className="col-4">{"声明"}</dt>
              <dd className="col-8">{props.declaration}</dd>
            </>
          ) : null}

          {props.tags ? (
            <>
              <dt className="col-4">{"标签"}</dt>
              <dd className="col-8">
                <ColorfulBadges stringArr={props.tags} />
              </dd>
            </>
          ) : null}
        </dl>
      </Card.Body>
    </Card>
  );
}

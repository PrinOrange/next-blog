import { yyyyMMddhhmmssToDate } from "../api/datestring";
import ColorfulBadges from "../components/ColorfulBadges";
import { DocsListModel } from "../model/DocsListModel";

export default function DocsList(props: { list: DocsListModel; showLoading?: boolean }) {
  return (
    <div>
      {props.list.map((item) => (
        <a href={`/docs/${item.id}`} key={`docslist-${item.id}`} className="hover:tw-text-inherit">
          <div className="tw-px-2 tw-py-2 tw-border-b hover:tw-bg-gray-100">
            <div>
              <ColorfulBadges stringArr={item.tags} />
            </div>
            <div className="tw-flex tw-justify-center tw-my-3 tw-px-6">
                {item.imgURL != null && item.imgURL !== "" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="tw-rounded-xl object-contain"
                    src={item.imgURL}
                    alt={item.title}
                  />
                ) : null}
            </div>
            <div className=" tw-flex tw-justify-center tw-flex-col tw-px-6">
              <h5 className="tw-text-center tw-font-bold tw-text-2xl">{item.title}</h5>
              <h6 className=" tw-my-2 tw-text-center tw-text-gray-500 tw-font-bold">
                {item.subtitle}
              </h6>
              <p className="tw-indent-8 text-justify">{item.citation}</p>
            </div>
            <div className="text-muted d-flex flex-column justify-content-between my-2">
              <div className="fs-6 fw-light text-end">{`${"发布时间："}${yyyyMMddhhmmssToDate(item.postDate)}`}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

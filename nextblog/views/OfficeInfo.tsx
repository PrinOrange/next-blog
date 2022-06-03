/* eslint-disable @next/next/no-html-link-for-pages */
import { OfficeInfoModel } from "../model/OfficeInfoModel";
import { MdEmail } from "react-icons/md";
export default function OfficeInfo(props: OfficeInfoModel) {
  return (
    <div className="tw-text-sm tw-mx-2">
      <div className="tw-my-2">
        <p>{`Copyright © 2015-${new Date().getFullYear()} ${props.copyright}`}</p>
        <p>{props.poweredBy}</p>
      </div>
      <div className="tw-align-middle tw-my-4">
        <MdEmail className=" tw-inline" size={"1em"} />
        <span className="tw-font-bold tw-ml-1 tw-mx-2 fs-7">{"E-Mail:"}</span>
        <a className="" href={`mailto:${props.email}`}>
          {props.email}
        </a>
      </div>
      <span className="fs-7 tw-text-color-dimgrey text-decoration-none tw-block">
        {props.icp}
      </span>
      <span className="fs-7 tw-text-gray-700 tw-text-decoration-none tw-block">
        {props.ps}
      </span>
    </div>
  );
}

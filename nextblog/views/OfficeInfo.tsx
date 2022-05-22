/* eslint-disable @next/next/no-html-link-for-pages */
import { OfficeInfoModel } from "../model/OfficeInfoModel";
import { MdEmail } from "react-icons/md";
export default function OfficeInfo(props: OfficeInfoModel) {
  return (
    <div className=" tw-text-xs">
      <p>
        如果您喜欢我的内容，可以选择赞助我的小站，助我有持续动力来创作更多优质的内容！
        <br />
        If you like my works, Welcome to sponsor my website to help me have
        continuous motivation for creating more excellent works!
        <br />
        <a href="/sponsor" className="text-decoration-none">
          {"点这里对我的小站进行赞助"}
        </a>
      </p>
      <div className=" tw-my-2">
        <p>
          {`Copyright © 2015-${new Date().getFullYear()} ${props.copyright}`}
        </p>
        <p>{props.poweredBy}</p>
      </div>

      <div className="tw-align-middle tw-my-4">
        <MdEmail className=" tw-inline" size={"1em"} />
        <span className="fw-bold mx-1 fs-7">{"E-Mail"}</span>
        <a className="" href={`mailto:${props.email}`}>
          {props.email}
        </a>
      </div>
      <a
        rel="noreferrer"
        target={"_blank"}
        className="fs-7 text-color-dimgrey text-decoration-none d-block"
      >
        {props.icp}
      </a>
      <a
        rel="noreferrer"
        target={"_blank"}
        className="fs-7 text-color-dimgrey text-decoration-none d-block"
      >
        {props.ps}
      </a>
    </div>
  );
}

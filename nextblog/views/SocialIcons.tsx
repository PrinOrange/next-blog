/* eslint-disable @next/next/no-img-element */
import { FaWeixin, FaQq, FaTwitter, FaGithub, FaWeibo } from "react-icons/fa";
import { SiZhihu } from "react-icons/si";

import { Modal } from "react-bootstrap";
import { useState } from "react";
/* eslint-disable react/jsx-pascal-case */

export default function SocialIcons() {
  const [modal_show, set_modal_show] = useState<boolean>(false);
  return (
    <div className=" tw-flex tw-justify-center tw-flex-wrap tw-text-black">
      <FaWeixin className=" tw-cursor-pointer hover:tw-text-green-600 tw-mx-4" onClick={() => set_modal_show(true)} size="1.75em" />
      <a
        className="tw-cursor-pointer hover:tw-text-blue-500 tw-mx-4 tw-text-black"
        target="_blank"
        title="访问知乎主页"
        href="https://www.zhihu.com/people/prinOrange"
        rel="noreferrer noopener"
      >
        <SiZhihu size="1.5em" />
      </a>
      <a
        className="tw-cursor-pointer hover:tw-text-red-600 tw-mx-4 tw-text-black"
        target="_blank"
        title="访问微博主页"
        href="https://weibo.com/u/1738014147"
        rel="noreferrer noopener"
      >
        <FaWeibo size="1.5em" />
      </a>
      <a
        className="tw-cursor-pointer hover:tw-text-blue-500 tw-mx-4 tw-text-black"
        target="_blank"
        title="访问Twitter主页"
        href="https://twitter.com/prinOrange_"
        rel="noreferrer noopener"
      >
        <FaTwitter size="1.5em" />
      </a>
      <a
        className="tw-cursor-pointer hover:tw-text-gray-500 tw-mx-4 tw-text-black"
        target="_blank"
        title="访问Github主页"
        href="https://github.com/PrinOrange"
        rel="noreferrer noopener"
      >
        <FaGithub size="1.5em" />
      </a>
      <Modal size="sm" centered show={modal_show} onHide={() => set_modal_show(false)}>
        <Modal.Body className="d-flex flex-column">
          <div className="fw-bold text-center">{"扫一扫，加我微信"}</div>
          <div className="tw-flex tw-justify-center tw-my-">
            <img src="./assets/wxqr.png" height="160em" width="160em" alt="张宇腾 微信" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

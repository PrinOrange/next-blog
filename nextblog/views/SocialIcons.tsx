import { FaWeixin, FaQq, FaTwitter, FaGithub, FaWeibo } from 'react-icons/fa';
import { SiZhihu } from 'react-icons/si';

import { Modal } from 'react-bootstrap';
import { useState } from 'react';
/* eslint-disable react/jsx-pascal-case */

export default function SocialIcons() {
    const [modal_show, set_modal_show] = useState<boolean>(false);
    return (
        <div className=" tw-flex tw-justify-around tw-flex-wrap">
            <FaWeixin className=" tw-cursor-pointer hover:tw-text-green-600"
                onClick={() => (set_modal_show(true))}
                size="1.75em" />
            <a className=" tw-cursor-pointer"
                target="_blank"
                href="http://wpa.qq.com/msgrd?v=3&uin=643431636&site=qq&menu=yes"
                rel="noreferrer"
            >
                <FaQq size="1.5em" />
            </a>
            <a className=" tw-cursor-pointer hover:tw-text-blue-500"
                target="_blank"
                href="https://www.zhihu.com/people/prinOrange"
                rel="noreferrer"
            >
                <SiZhihu size="1.5em" />
            </a>
            <a className=" tw-cursor-pointer hover:tw-text-red-600"
                target="_blank"
                href="https://weibo.com/u/1738014147"
                rel="noreferrer"
            >
                <FaWeibo size="1.5em" />
            </a>
            <a className=" tw-cursor-pointer hover:tw-text-blue-500"
                target="_blank"
                href="https://twitter.com/prinOrange_"
                rel="noreferrer"
            >
                <FaTwitter size="1.5em" />
            </a>
            <a className=" tw-cursor-pointer hover:tw-text-gray-500"
                target="_blank"
                href="https://github.com/PrinOrange"
                rel="noreferrer">
                <FaGithub size="1.5em" />
            </a>
            <Modal size="sm" centered show={modal_show} onHide={() => set_modal_show(false)} >
                <Modal.Body className="d-flex flex-column">
                    <div className="fw-bold text-center">扫一扫，加我微信</div>
                    <div className="text-center my-3">

                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
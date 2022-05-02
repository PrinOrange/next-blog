import Image from "next/image";
import { FaPaperPlane } from 'react-icons/fa';
import { Button, Card } from "react-bootstrap";

export default function AboutMe() {

    return (
        <div className=" tw-bg-white dark:tw-bg-slate-800">
            <div className=" tw-pt-6">
                <div className=" tw-font-bold tw-text-lg">
                    <FaPaperPlane className="d-inline tw-m-3 tw-text-blue-500" />
                    <h1 className="d-inline">{"张宇腾 My Blog"}</h1>
                </div>
                <img className="tw-mx-auto tw-rounded-full tw-border-cyan-500 tw-border-2 tw-my-4"
                    src="https://pica.zhimg.com/v2-108933a878822338d1117f450f0c2de3_xl.jpg?source=32738c0c"
                    alt="Edward Zhang"
                    height="130px"
                    width="130px"
                />
                <div className=" tw-px-5">

                </div>
            </div>
        </div>
    )
}
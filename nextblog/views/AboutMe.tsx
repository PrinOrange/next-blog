import Image from "next/image";

import { Button, Card } from "react-bootstrap";
import { useDocFilter } from "../hooks/useDocFilter";

export default function AboutMe() {
    return (
        <div className=" tw-bg-white dark:tw-bg-slate-800">
            <div className=" tw-pt-6"
                style={{ background: "url('https://pic2.zhimg.com/80/v2-2fc3abddacfe7671978270e476b1790e_720w.jpg')" }}
            >
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
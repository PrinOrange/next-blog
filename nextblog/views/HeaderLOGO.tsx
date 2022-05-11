/* eslint-disable @next/next/no-html-link-for-pages */
import { FaPaperPlane } from "react-icons/fa";
export default function Header() {
  return (
    <div className=" tw-font-bold tw-text-lg tw-text-center">
      <FaPaperPlane className="d-inline tw-m-3 tw-text-blue-500" />
      <h1 className="d-inline tw-text-2xl"><a href="/">{"张宇腾 My Blog"}</a></h1>
    </div>
  );
}

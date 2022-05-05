import { FaPaperPlane } from 'react-icons/fa';
import SocialBlock from './SocialBlock';
import SocialIcons from './SocialIcons';
export default function Header() {
    return (
        <div className=" tw-font-bold tw-text-lg tw-py-6 tw-text-center tw-border-b">
            <FaPaperPlane className="d-inline tw-m-3 tw-text-blue-500" />
            <h1 className="d-inline tw-text-2xl">{"张宇腾 My Blog"}</h1>
        </div>
    )
}
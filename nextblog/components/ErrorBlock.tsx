import { MdOutlineErrorOutline } from 'react-icons/md'
export default function ErrorBlock() {
    return (
        <div className="tw-text-2xl tw-font-bold  tw-text-center  tw-text-red-600">
            <MdOutlineErrorOutline size={"2em"} className="tw-mx-auto" />
            {"LOADING ERROR"}
        </div>
    )
}
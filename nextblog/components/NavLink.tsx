import classNames from "classnames";

export default function NavLink(props: {
  content: React.ReactNode;
  checked: boolean;
  href?: string;
}) {
  const style_class = classNames(
    { "tw-bg-orange-500 tw-text-white": props.checked,
    "hover:tw-bg-gray-100 hover:tw-text-orange-500 tw-text-orange-500":!props.checked,
    "hover:tw-text-white":props.checked
 },
    "tw-px-4 tw-py-2 tw-font-bold tw-mx-2 tw-rounded-full tw-cursor-pointer"
  );
  return (
      <a className={style_class}  href={props.href}>{props.content}</a>
  );
}

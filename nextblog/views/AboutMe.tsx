import ColorfulBadges from "../components/ColorfulBadges";
import { AboutMeModel } from "../model/AboutMeModel";
import SocialIcons from "./SocialIcons";

export default function AboutMe(props: AboutMeModel) {
  return (
    <div className=" tw-bg-white dark:tw-bg-slate-800">
      <div className=" tw-pt-6">
        <img
          className="tw-mx-auto tw-rounded-full tw-border-cyan-500 tw-border-2 tw-my-4"
          src={props.avatarURL}
          alt="Edward Zhang"
          height="130px"
          width="130px"
        />
        <div className=" tw-text-sm tw-mx-4 tw-my-3">{props.impression}</div>
        <div className=" tw-mx-4 tw-my-3">
          <ColorfulBadges stringArr={props.badges} />
        </div>
        <div className=" tw-px-5">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

import "./SectionBase.scss";
import { IconWrapper } from "../IconWrapper/IconWrapper.tsx";
import {FacebookLogo, InstagramLogo, YoutubeLogo} from "@phosphor-icons/react";

export const SectionBase = () => {
  return (
    <div className="section-base">
      <div className="section-base__motto">Your Smile, Our Passion</div>
      <div className="section-base__social">
        <div className="section-base__social-icons">
          <IconWrapper bgColor="#fffcee" width={24}>
            <InstagramLogo size={16}  weight="thin" />
          </IconWrapper>
          <IconWrapper bgColor="#fffcee" width={24}>
            <YoutubeLogo  size={16}  weight="thin" />
          </IconWrapper>
          <IconWrapper bgColor="#fffcee" width={24}>
            <FacebookLogo  size={16}  weight="thin" />
          </IconWrapper>
        </div>
        <div className="section-base__social-award">Best Start Up of 2023</div>
      </div>
    </div>
  );
};

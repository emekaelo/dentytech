import "./SectionBase.scss";
import { IconWrapper } from "../IconWrapper/IconWrapper.tsx";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SectionBase = () => {
  const sectionBaseRef = useRef(null);
  const tl = useRef<GSAPTimeline>();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-base__motto",
            start: "top bottom",
            end: "bottom top",
          },
        })
        .from([".section-base__motto", ".section-base__social-award"], {
          y: 50,
          opacity: 0,
          scale: 0.3,
          duration: 1,
        })
        .from(
          ".section-base__social-icons div",
          {
            scale: 0,
            rotate: "-90deg",
            duration: 1,
          },
          "<"
        );
    }, sectionBaseRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionBaseRef} className="section-base">
      <div className="section-base__motto">Your Smile, Our Passion</div>
      <div className="section-base__social">
        <div className="section-base__social-icons">
          <IconWrapper bgColor="#fffcee" width={24}>
            <InstagramLogo size={16} weight="thin" />
          </IconWrapper>
          <IconWrapper bgColor="#fffcee" width={24}>
            <YoutubeLogo size={16} weight="thin" />
          </IconWrapper>
          <IconWrapper bgColor="#fffcee" width={24}>
            <FacebookLogo size={16} weight="thin" />
          </IconWrapper>
        </div>
        <div className="section-base__social-award">Best Start Up of 2023</div>
      </div>
    </div>
  );
};

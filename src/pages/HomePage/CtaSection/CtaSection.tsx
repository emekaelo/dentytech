import "./CtaSection.scss";
import { IconWrapper } from "../../../components/IconWrapper/IconWrapper.tsx";
import { Atom, Dna, Tooth } from "@phosphor-icons/react";
import { Button } from "../../../components/Buttons/Button.tsx";
import { SectionBase } from "../../../components/SectionBase/SectionBase.tsx";
import { OfferingList } from "../../../components/Offering/OfferingList/OfferingList.tsx";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const CtaSection = () => {
  const ctaSection = useRef(null);

  const tl = useRef<GSAPTimeline>();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cta__icons div",
          },
        })
        .from(
          ".cta__icons div",
          {
            rotate: "-36deg",
            scale: 0,
            stagger: {
              amount: 0.1,
            },
            duration: 0.3,
          },
          "<"
        );
    }, ctaSection);
    return () => ctx.revert();

  }, []);

  return (
    <section ref={ctaSection} className="cta__section">
      <div className="cta__explore">
        <div className="cta__content">
          <div className="cta__icons">
            <IconWrapper bgColor="#d8e8f7" width={32}>
              <Dna size={24} color="#ff4e26" weight="thin" />
            </IconWrapper>
            <IconWrapper bgColor="#d8e8f7" width={32}>
              <Tooth size={24} color="#ff4e26" weight="thin" />
            </IconWrapper>
            <IconWrapper bgColor="#d8e8f7" width={32}>
              <Atom size={24} color="#ff4e26" weight="thin" />
            </IconWrapper>
          </div>
          <h2 className="cta__title">
            <div>
              <span>EXPLORE OUR</span>
            </div>
            <div>
              <span>SERVICE, MAKE</span>
            </div>
            <div>
              <span>YOUR SMILE SHINE</span>
            </div>
          </h2>
          <div className="cta__buttons">
            <Button text="Get The App" className="primary-btn" />
            <Button text="Meet The Team" className="ghost-btn" />
          </div>
        </div>
        <SectionBase />
      </div>
      <OfferingList />
    </section>
  );
};

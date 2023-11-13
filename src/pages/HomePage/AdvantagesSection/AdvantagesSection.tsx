import "./AdvantagesSection.scss";
import { PortraitCardList } from "../../../components/PortraitCard/PortraitCardList/PortraitCardList.tsx";
import { SectionBase } from "../../../components/SectionBase/SectionBase.tsx";
import { ArrowDown } from "@phosphor-icons/react";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const AdvantagesSection = () => {
    const advantagesSectionRef = useRef(null);

    const tl = useRef<GSAPTimeline>();
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap
                .timeline()
                .from(
                    [".portrait__list", ".advantages__title div"],
                    {
                        y: 100
                    }
                );
        }, advantagesSectionRef);
        return () => ctx.revert();

    }, []);

  return (
    <section ref={advantagesSectionRef} className="advantages__section">
        <h2 className="advantages__title"><div>OUR ADVANTAGES</div></h2>
      <PortraitCardList />
      <SectionBase />
      <div className="scroll-down">
        <ArrowDown className="down-arrow" size={32} weight="thin" />
      </div>
    </section>
  );
};

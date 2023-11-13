import "./AdvantagesSection.scss";
import { PortraitCardList } from "../../../components/PortraitCard/PortraitCardList/PortraitCardList.tsx";
import { SectionBase } from "../../../components/SectionBase/SectionBase.tsx";
import { ArrowDown } from "@phosphor-icons/react";

export const AdvantagesSection = () => {
  return (
    <section className="advantages__section">
      <h2 className="advantages__title">OUR ADVANTAGES</h2>
      <PortraitCardList />
      <SectionBase />
      <div className="scroll-down">
        <ArrowDown className="down-arrow" size={32} weight="thin" />
      </div>
    </section>
  );
};

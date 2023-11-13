import "./HomePage.scss";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { AdvantagesSection } from "./AdvantagesSection/AdvantagesSection.tsx";
import { ServiceSection } from "./ServiceSection/ServiceSection.tsx";
import { CtaSection } from "./CtaSection/CtaSection.tsx";

export const HomePage = () => {

  useEffect(() => {
    // @ts-expect-error expected configuration based on the library doc
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const locomotiveScroll = new LocomotiveScroll();
  });

  return (
    <main >
      <AdvantagesSection />
      <ServiceSection />
      <CtaSection />
    </main>
  );
};

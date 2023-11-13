import "./OfferingList.scss";
import { OfferingItem } from "../OfferingItem/OfferingItem.tsx";
import {Offering} from "../../../models";

export const OfferingList = () => {
  const offerings:Offering[] = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1560365163-3e8d64e762ef?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Oral Health Assessment",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1606811856475-5e6fcdc6e509?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Teledentistry",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1564420228450-d9a5bc8d6565?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Oral Care Guides",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1559591939-c2d3c204f6da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Dental Health Records",
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1684607633080-df59e6874367?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Appointment Scheduling",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1611690060937-b1be8b100837?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      type: "Toothbrush Tracking",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Symptom Checker",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1684607632845-723f8f427110?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Medication Tracking",
    },
  ];

  return (
    <ul className="cta-offering__list">
      <div data-scroll data-scroll-speed="-0.3">
        {offerings.slice(0, 4).map((offering) => (
          <OfferingItem key={offering.type} offering={offering} />
        ))}
      </div>
      <div data-scroll data-scroll-speed="0.3">
        {offerings.slice(4).map((offering) => (
            <OfferingItem key={offering.type} offering={offering} />
        ))}
      </div>
    </ul>
  );
};

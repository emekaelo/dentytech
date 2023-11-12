import "./PortraitCardList.scss";
import { PortraitCardItem } from "../PortraitCardItem/PortraitCardItem.tsx";
import {Gear, Graph, HandTap, UserFocus} from "@phosphor-icons/react";

export const PortraitCardList = () => {
  const portraitCards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtaWxpbmclMjBmYWNlJTIwdGVldGh8ZW58MHx8MHx8fDA%3D",
      icon: Gear,
      advantage: "Advanced Technology",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: HandTap,
      advantage: "Convenience",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1642494369676-ff80d8d6c71e?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Graph,
      advantage: "Modern Solutions",
    },
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661588027248-82d0ad68d4c7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: UserFocus,
      advantage: "Personalized Care",
    },
  ];

  return (
    <div className="portrait__list">
      {portraitCards.map((card, index) => (
        <PortraitCardItem key={index} card={card} index={index} />
      ))}
    </div>
  );
};

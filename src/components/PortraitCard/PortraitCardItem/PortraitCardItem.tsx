import "./PortraitCardItem.scss";
import { IconWrapper } from "../../IconWrapper/IconWrapper.tsx";
import {PortraitCard} from "../../../models";



export const PortraitCardItem = ({
  card,
  index,
}: {
  card: PortraitCard;
  index: number;
}) => {
  return (
    <li
      className="portrait__item"
      style={{
        backgroundImage: `url(${card.imageSrc})`,
        rotate: `${-7.67 * index}deg`,
        zIndex: -index,
          backgroundPosition: index === 1 ? '30%' : 'initial'
      }}
    >
      <div className="portrait__advantage">
        <IconWrapper bgColor="#ffffff" width={32}>
          <card.icon size={24} weight="thin" />
        </IconWrapper>
        <p className="portrait__description">{card.advantage}</p>
      </div>
    </li>
  );
};

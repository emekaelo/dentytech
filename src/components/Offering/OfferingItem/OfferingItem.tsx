import "./OfferingItem.scss";
import { Button } from "../../Buttons/Button.tsx";
import { IconWrapper } from "../../IconWrapper/IconWrapper.tsx";
import {ArrowUpRight, HeartStraight} from "@phosphor-icons/react";
import React from "react";
import {Offering} from "../../../models";


export const OfferingItem: React.FC<{offering: Offering}> = ({offering}) => {
  return (
    <li className="cta-offering__item" style={{backgroundImage: `url(${offering.imageSrc})`}}>
      <div className="cta-offering__item-action-icons">
        <IconWrapper bgColor="#ffffff" width={30}>
          <HeartStraight  size={20} weight="thin" />
        </IconWrapper>
        <IconWrapper bgColor="#ffffff" width={30}>
          <ArrowUpRight size={28} weight="thin" />
        </IconWrapper>
      </div>
      <Button text={offering.type} className="ghost-btn" style={{alignSelf: 'flex-start', color: '#ffffff', border: '1px Solid #ffffff'}} />
    </li>
  );
};

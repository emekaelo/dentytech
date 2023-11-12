import './PortraitCardItem.scss'
import {IconWrapper} from "../../IconWrapper/IconWrapper.tsx";
import {Icon} from "@phosphor-icons/react";

interface PortraitCard {
    imageSrc: string;
    icon: Icon;
    advantage: string;
}

export const PortraitCardItem = ({card, index}: {card: PortraitCard, index: number }) => {
    return (
        <div className='portrait__item' style={{backgroundImage: `url(${card.imageSrc})`, rotate: `${(-7.67 * index)}deg`, zIndex: -index}}>
            <div className='portrait__advantage'>
                <IconWrapper bgColor='#ffffff' width={32}>
                    <card.icon size={24} color="#000000"
                               weight="thin" />
                </IconWrapper>
                <p className='portrait__description'>{card.advantage}</p></div>
        </div>
    );
};

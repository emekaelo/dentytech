import {CSSProperties} from "react";
import {Icon} from "@phosphor-icons/react";

export interface ButtonConfig {
    text: string;
    style?: CSSProperties;
    className: string;
}

export interface PortraitCard {
    imageSrc: string;
    icon: Icon;
    advantage: string;
}

export interface Offering {
    imageSrc: string;
    type: string;
}

export interface IconWrapperConfig {
    bgColor: string;
    border?: string;
    children: React.ReactNode,
    padding?: string;
    width?: number
}
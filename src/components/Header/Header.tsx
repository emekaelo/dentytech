import './Header.scss'
import {Button} from "../Buttons/Button.tsx";
import {IconWrapper} from "../IconWrapper/IconWrapper.tsx";
import {Tooth} from "@phosphor-icons/react";
import Menu from "../../assets/icons/Menu.tsx";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";

export const Header = () => {
    const headerRef = useRef(null);
    const tl = useRef<GSAPTimeline>()

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline().from([".nav", ".app-access__btn"], {
                y: -50,
                opacity: 0,
                scale: 0.5
            }).from(".brand", {
                scale: 0
            }, "<")
        }, headerRef);
        return () => ctx.revert();
    }, [])

    return (
        <header ref={headerRef} className='header'>
            <nav className="nav">
                <Button text='Menu' className='ghost-btn' />
                <div className="nav__icon">
                    <IconWrapper bgColor='transparent' border='1px solid #000000' width={35}>
                        <Menu size={24} color='#000000' weight='thin' />
                    </IconWrapper>
                </div>
            </nav>
            <div className='brand'>
                <div className="brand__icon"><IconWrapper bgColor='#ff4e26' width={28}>
                    <Tooth size={20} color="#ffffff"
                           weight="thin" /></IconWrapper>
                </div>
                <div className="brand__name">DENTYTECH</div>
            </div>
            <div className="app-access__btn">
                <Button text='Log In' className='ghost-btn' />
                <Button text='Sign Up' className='primary-btn' />
            </div>
        </header>

    );
};

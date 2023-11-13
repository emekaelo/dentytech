import "./ServiceSection.scss"
import {IconWrapper} from "../../../components/IconWrapper/IconWrapper.tsx";
import {Atom, Dna, Tooth} from "@phosphor-icons/react";
import {SectionBase} from "../../../components/SectionBase/SectionBase.tsx";
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


export const ServiceSection = () => {
    const serviceSection = useRef(null);

    const tl = useRef<GSAPTimeline>();
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: ".service__title-text",
                        start: "top 90%",
                        end: "bottom top",
                        markers: true,
                        toggleActions: "restart none none reverse"
                    }
                })
                .from(".service__title-text", {
                    y: 200,
                    ease: "power4.out",
                    duration: 1
                })
                .to(
                    ".service__title-text-wrapper:nth-of-type(1) .service__title-text",
                    {
                        left: "0",
                        ease: "out",
                    }
                )
                .fromTo(
                    ".service__aim",
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                    },
                    "<0.2"
                )
                .from(
                    ".service__icons div",
                    {
                        rotate: "-36deg",
                        scale: 0,
                        stagger: {
                            amount: 0.1,
                        },
                        duration: 0.3,
                    },
                    "<"
                )
                .from(
                    ".service__aim-text span",
                    {
                        y: 200,
                        ease: "power4.out",
                        stagger: {
                            amount: 0.2,
                        },
                    },
                    "<-=0.2"
                )
        }, serviceSection);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={serviceSection} className="service__section">
            <h1 className="service__title">
                <div className="service__title-text-wrapper">
                    <span className="service__title-text">REVOLUTIONIZING</span>
                    <div className="service__aim">
                        <div className="service__icons">
                            <IconWrapper bgColor="#d8e8f7" width={24}>
                                <Dna size={16} color="#ff4e26" weight="thin" />
                            </IconWrapper>
                            <IconWrapper bgColor="#d8e8f7" width={24}>
                                <Tooth size={16} color="#ff4e26" weight="thin" />
                            </IconWrapper>
                            <IconWrapper bgColor="#d8e8f7" width={24}>
                                <Atom size={16} color="#ff4e26" weight="thin" />
                            </IconWrapper>
                        </div>
                        <div className="service__aim-text">
                            <div>
                                <span>Modern Solutions,</span>
                            </div>
                            <div>
                                <span>Timeless Smiles</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service__title-text-wrapper">
                    <span className="service__title-text">DENTAL CARE</span>
                </div>
                <div className="service__title-text-wrapper">
                    <span className="service__title-text">WITH TECHNOLOGY</span>
                </div>
            </h1>
            <SectionBase />
        </section>
    );
};

import "./Preloader.scss";
import { IconWrapper } from "../IconWrapper/IconWrapper.tsx";
import { Tooth } from "@phosphor-icons/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const Preloader = () => {
  const preloaderRef = useRef(null);
  const tl = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().from([".brand__name > div",".brand"], {
        y: 50,
      }).to(preloaderRef.current, {
        opacity:0,
        delay: 2,
      },"<");
      // tl.current = gsap
      //     .timeline()
      //     .fromTo(
      //         ".arr-two",
      //         {
      //           y: "-2rem",
      //           duration:2
      //         },
      //         {
      //           padding: 0,
      //           // width:48
      //         }
      //
      //     ).from(".arr-two > div", {
      //       display: "none"
      //     }).to(".arr-two > span", {
      //       x: "-100%",
      //       width: 0,
      //       display: "none",
      //       padding: 0,
      //
      // },"<");
    }, preloaderRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={preloaderRef} className="preloader">
      {/*<div className="preloader__content">*/}
      {/*  <div className="left-col"></div>*/}
      {/*  <div className="preloader__text">*/}
      {/*    <div className="arr-two">*/}
      {/*      <span>DENTAL</span>*/}
      {/*      <IconWrapper bgColor="#ff4e26" width={48}>*/}
      {/*        <ArrowRight size={36} color="#ffffff" weight="thin" />*/}
      {/*      </IconWrapper>*/}
      {/*    </div>*/}
      {/*    <div className="arr-three">*/}
      {/*      <span>ASSISTANCE</span>*/}
      {/*      <IconWrapper bgColor="#ffffff" width={48}>*/}
      {/*        <ArrowLeft size={36} color="#ff4e26" weight="thin" />*/}
      {/*      </IconWrapper>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="right-col"></div>*/}
      {/*</div>*/}
      <div className="brand">
        <IconWrapper bgColor="#ff4e26" width={48}>
          <Tooth size={36} color="#ffffff" weight="thin" />
        </IconWrapper>
        <div className="brand__name">
          <div>DENTYTECH</div>
        </div>
      </div>
    </div>
  );
};

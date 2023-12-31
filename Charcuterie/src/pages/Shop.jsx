import fashion from "../assets/fashoin.jpeg";
import logo from "../assets/cap2.png";
import insta from "../assets/instagram2.png";
import tik from "../assets/tiktok.png";
import fb from "../assets/facebook2.png";
import { gsap } from "gsap";
import { useLayoutEffect, useState } from "react";
import DotsContainer from "../components/DotsContainer";
import BouncingDots from "../components/BouncingDots";

export function Shop() {
  const [isLoad, setIsLoad] = useState(false);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      if (!isLoad) {
        t1.from(".shop-right-img", {
          xPercent: "-100",
          duration: 1.5,
          delay: 1,
          ease: "slow(0.9,2,false)",
        });
        t1.from(".shop-left-logo-container", {
          yPercent: -100,
          opacity: 0,
          duration: 1.5,
          delay: 1,
        });
        t1.from(
          ".shop-left-clickable-container",
          {
            yPercent: 100,
            opacity: 0,
            duration: 1.5,
          },
          "-=1.5"
        );
      }
      if (isLoad) {
        t1.to(".shop-left-logo-container", {
          yPercent: -100,
          opacity: 0,
          duration: 1.5,
          delay: 0.5,
        });
        t1.to(
          ".shop-left-clickable-container",
          {
            yPercent: 100,
            opacity: 0,
            duration: 1,
          },
          "-=1.5"
        );
        t1.to(".shop-right-img", {
          xPercent: "-100",
          duration: 1.5,
          ease: "slow(0.9,2,false)",
        });
        setTimeout(() => {
          setIsLoad(false);
        }, 4000);
      }
    });
    return () => ctx.revert();
  }, [isLoad]);
  return (
    <div className="shop-main-container">
      <div className="shop-left-container">
        <div className="shop-left-logo-container">
          <img src={logo} className="shop-left-logo-png" />
          <p className="shop-left-logo-title">Concrete Chic Boutique Co.</p>
        </div>
        <h1 className="shop-left-title">This is fashoin!</h1>
        <div className="shop-left-clickable-container">
          <button
            className="shop-left-button"
            onClick={() => setIsLoad(!isLoad)}
          >
            Enter the Boutique
          </button>
          <div className="shop-left-socials">
            <img src={insta} className="shop-left-socials-png" />
            <img src={tik} className="shop-left-socials-png" />
            <img src={fb} className="shop-left-socials-png" />
          </div>
        </div>
      </div>
      <div className="shop-right-container">
        <img src={fashion} className="shop-right-img" />
      </div>
    </div>
  );
}

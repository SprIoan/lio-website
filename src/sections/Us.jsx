import "./us.modules.css";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Benefits from "./Benefits";
import Faq from "./Faq";

const Us = () => {
  useGSAP(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".whitespace",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: ".header-info",
      start: "top top",
      endTrigger: ".whitespace",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".header-info",
      end: "bottom bottom",
      onUpdate: (self) => {
        const rotation = self.progress * 360;
        let top = 50 * self.progress;
        if (window.innerWidth < 1024) {
          top = 200 * self.progress;
        }
        if (window.innerWidth < 768) {
          top = 250 * self.progress;
        }
        gsap.to(".revealer", { rotation: rotation, top: `${top}px` });
      },
    });

    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".header-info",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        const clipPath = `polygon(
        ${45 - 45 * progress}% ${0 + 0 * progress}%,
        ${55 + 45 * progress}% ${0 + 0 * progress}%,
        ${55 + 45 * progress}% ${100 - 0 * progress}%,
        ${45 - 45 * progress}% ${100 - 0 * progress}%
      )`;
        gsap.to(".revealer-1, .revealer-2", {
          clipPath: clipPath,
          ease: "none",
          duration: 0,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".header-info",
      start: "top top",
      end: "bottom 50%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const left = 35 + 15 * progress;
        //get previous margin top value

        gsap.to(".revealer", {
          left: `${left}%`,
          ease: "none",
          duration: 0,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".whitespace",
      start: "top 50%",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const scale = 1 + 15 * self.progress;
        gsap.to(".revealer", {
          scale: scale,
          ease: "none",
          duration: 0,
        });
      },
    });
  }, []);

  return (
    <div className="container-us bg-white text-black dark:bg-black dark:text-gray-100">
      <section id="info" className="info">
        <div className="header-rows">
          <div className="header-row">
            <h1 className="h1-us">Concept</h1>
          </div>
          <div className="header-row">
            <h1 className="h1-us">vision</h1>
          </div>
        </div>
      </section>
      <section className="header-info">
        <p>
          Our vision is to help businesses enhance their processes through
          efficient software solutions, allowing them to focus on their
          employees. <br /> <br />
          By supporting their employees, companies can build a strong foundation
          for exceptional client care.
        </p>
      </section>

      <section className="whitespace"></section>
      <section className="pinned">
        <div className="revealer">
          <div className="revealer-1 bg-gray-300 dark:bg-[#685AA2]"></div>
          <div className="revealer-2 bg-gray-300 dark:bg-[#685AA2]"></div>
        </div>
      </section>

      <section
        id="expertise"
        className="website-content  bg-gradient-to-b from-gray-300 dark:from-[#685AA2] to-gray-200 dark:to-[#0F172A]  w-full flex  justify-center items-center"
      >
        <Benefits />
      </section>
      <section
        id="about"
        className="faq bg-gradient-to-b from-gray-200 dark:from-[#0F172A] to-white dark:to-black w-full flex  justify-center items-center"
      >
        <Faq />
      </section>
    </div>
  );
};

export default Us;

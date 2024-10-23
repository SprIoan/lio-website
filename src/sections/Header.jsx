import ModeSwitch from "../components/ui/ModeSwitch";
import { useTheme } from "../ThemeContext";
import "./header.modules.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { useState, useRef } from "react";

const Header = () => {
  const { theme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const Logo = () => (
    <a>
      {theme === "light" ? (
        <img src="/images/lio-light.png" width={126} height={55} alt="Xora" />
      ) : (
        <img src="/images/lio-dark.png" width={130} height={55} alt="Xora" />
      )}
    </a>
  );

  const menuRef = useRef();
  const toggleRef = useRef();

  useGSAP(
    (context, contextSafe) => {
      gsap.registerPlugin(CustomEase);
      CustomEase.create(
        "hop",
        "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
      );

      const onToggleMenu = contextSafe(() => {
        if (isAnimating) return;

        const menuToggle = document.querySelector(".menu-toggle");

        if (menuToggle.classList.contains("closed")) {
          menuToggle.classList.remove("closed");
          menuToggle.classList.add("opened");
          setIsAnimating(true);
          gsap.to(".menu", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "hop",
            duration: 1.5,
            onStart: () => {
              document.querySelector(".menu").style.pointerEvents = "all";
            },
            onComplete: () => {
              setIsAnimating(false);
            },
          });

          gsap.to(".link", {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            delay: 0.85,
            duration: 1,
            ease: "power3.out",
          });

          gsap.to(".socials p", {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            delay: 0.85,
            duration: 1,
            ease: "power3.out",
          });

          gsap.to(".video-wrapper", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "hop",
            duration: 1.5,
            delay: 0.5,
          });

          gsap.to(".header h1 span", {
            rotateY: 0,
            stagger: 0.05,
            delay: 0.75,
            duration: 1.5,
            ease: "power4.out",
          });

          gsap.to(".header h1 span", {
            y: 0,
            scale: 1,
            stagger: 0.05,
            delay: 0.5,
            duration: 1.5,
            ease: "power4.out",
          });
        } else {
          menuToggle.classList.remove("opened");
          menuToggle.classList.add("closed");
          setIsAnimating(true);

          gsap.to(".menu", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            ease: "hop",
            duration: 1.5,
            onComplete: () => {
              document.querySelector(".menu").style.pointerEvents = "none";
              gsap.set(".menu", {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              });

              gsap.set(".link", { y: 30, opacity: 0 });
              gsap.set(".socials p", { y: 30, opacity: 0 });
              gsap.set(".video-wrapper", {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              });
              gsap.set(".header h1 span", { rotateY: 90, y: 500, scale: 0.75 });
              setIsAnimating(false);
            },
          });
        }
      });

      //add event listener
      toggleRef.current.addEventListener("click", onToggleMenu);

      return () => {
        //remove event listener
        toggleRef.current.removeEventListener("click", onToggleMenu);
      };
    },
    { scope: menuRef }
  );

  return (
    <header>
      <div className="absolute z-[999] w-full flex justify-between items-center px-6 py-2 pr-10 ">
        <Logo />

        <div className="flex flex-row gap-10">
          <div
            className="menu-toggle closed bg-[rgba(255, 255, 255, 0.6)] dark:bg-transparent"
            ref={menuRef}
          >
            <div
              ref={toggleRef}
              className="flex justify-center items-center cursor-pointer"
            >
              <div className="menu-toggle-icon border dark:border-0">
                <div className="hamburger">
                  <div className="menu-bar" data-position="top"></div>
                  <div className="menu-bar" data-position="bottom"></div>
                </div>
              </div>
              <div className="menu-copy">
                <p className="text-black dark:text-white">Menu</p>
              </div>
            </div>

            <div className="menu bg-[#DDB888] dark:bg-[#0f0f0f] transition-colors duration-1000">
              <div className="col col-1 ">
                <div className="menu-logo mr-auto relative">
                  <Logo />
                  <ModeSwitch classNames="absolute -right-20 top-[50%] translate-y-[-50%]" />
                </div>

                <div className="links">
                  <div className="link ">
                    <a className="hover:text-black dark:hover:text-[#DDB888] transition-colors">
                      Projects
                    </a>
                  </div>
                  <div className="link">
                    <a>Expertise</a>
                  </div>
                  <div className="link">
                    <a>About</a>
                  </div>
                  <div className="link">
                    <a>Contact</a>
                  </div>
                </div>

                <div className="video-wrapper">
                  <video autoPlay muted loop>
                    <source src="/lio-vid.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="col col-2">
                <div className="socials">
                  <div className="sub-col">
                    <p>Lio Tech</p>
                    <p>Iroon Polytecneiou 9</p>
                    <p>10445 Athens</p>
                    <p>Greece</p>
                    <br />
                    <p>contact@lio.gr</p>
                    <p>job@lio.gr</p>
                  </div>
                  <div className="sub-col">
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                    <br />
                    <p>210 9999000</p>
                  </div>
                </div>
                <div className="header">
                  <h1>
                    <span>L</span>
                    <span>I</span>
                    <span>O</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

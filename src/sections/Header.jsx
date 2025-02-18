import ModeSwitch from "../components/ui/ModeSwitch";
import { useTheme } from "../ThemeContext";
import "./header.modules.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { useRef, useEffect, lazy, Suspense } from "react";
const VideoPlayer = lazy(() => import("./VideoPlayer"));

gsap.registerPlugin(CustomEase);
CustomEase.create(
  "hop",
  "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
);

const Header = () => {
  const { theme } = useTheme();
  const isAnimating = useRef(false);

  const teamRef = useRef();
  const visionRef = useRef();
  const expertiseRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const lightLogo = new Image();
    lightLogo.src = "/images/lio-light.svg";
    const darkLogo = new Image();
    darkLogo.src = "/images/lio-dark.svg";
  }, []);

  const Logo = () => {
    return (
      <a href="#">
        <img
          src={
            theme === "light" ? "/images/lio-light.svg" : "/images/lio-dark.svg"
          }
          width={140}
          height={55}
          className="scale-105 lg:scale-150 lg:ml-4 relative -top-1 sm:top-0"
          alt="Lio"
        />
      </a>
    );
  };

  const menuRef = useRef();
  const toggleRef = useRef();

  useGSAP(
    (context, contextSafe) => {
      const onToggleMenu = contextSafe(() => {
        if (isAnimating.current) return;

        const menuToggle = document.querySelector(".menu-toggle");

        if (menuToggle.classList.contains("closed")) {
          menuToggle.classList.remove("closed");
          menuToggle.classList.add("opened");
          isAnimating.current = true;
          gsap.to(".menu", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "hop",
            duration: 1.5,
            onStart: () => {
              document.querySelector(".menu").style.pointerEvents = "all";
            },
            onComplete: () => {
              isAnimating.current = false;
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
            display: "flex",
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
          isAnimating.current = true;

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
              isAnimating.current = false;
            },
          });
        }
      });

      //add event listener
      teamRef.current.addEventListener("click", onToggleMenu);
      visionRef.current.addEventListener("click", onToggleMenu);
      expertiseRef.current.addEventListener("click", onToggleMenu);
      aboutRef.current.addEventListener("click", onToggleMenu);
      contactRef.current.addEventListener("click", onToggleMenu);
      toggleRef.current.addEventListener("click", onToggleMenu);

      return () => {
        //remove event listener

        toggleRef.current.removeEventListener("click", onToggleMenu);
        expertiseRef.current.removeEventListener("click", onToggleMenu);
        aboutRef.current.removeEventListener("click", onToggleMenu);
        contactRef.current.removeEventListener("click", onToggleMenu);
        teamRef.current.removeEventListener("click", onToggleMenu);
        visionRef.current.removeEventListener("click", onToggleMenu);
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
              <div className="menu-toggle-icon bg-white dark:bg-purple-400">
                <div className="hamburger">
                  <div
                    className="menu-bar bg-black dark:bg-white transition-colors"
                    data-position="top"
                  ></div>
                  <div
                    className="menu-bar bg-black dark:bg-white transition-colors"
                    data-position="bottom"
                  ></div>
                </div>
              </div>
              <div className="menu-copy">
                <p className="text-black dark:text-white">Menu</p>
              </div>
            </div>

            <div className="menu bg-[#31DC72] dark:bg-[#0f0f0f] transition-colors duration-1000">
              <div className="col col-1 ">
                <div className="menu-logo mr-auto relative">
                  <Logo />
                  <ModeSwitch classNames="mode-switch absolute -right-20 sm:-right-20 top-[50%] translate-y-[-50%] z-[999] transition-all" />
                </div>

                <div className="links">
                  <div className="link">
                    <a
                      href="#team"
                      ref={teamRef}
                      className="hover:text-black focus:text-black dark:hover:text-purple-300 dark:focus:text-purple-300transition-colors"
                    >
                      Team
                    </a>
                  </div>
                  <div className="link">
                    <a
                      href="#vision"
                      ref={visionRef}
                      className="hover:text-black focus:text-black dark:hover:text-purple-300 dark:focus:text-purple-300transition-colors"
                    >
                      Vision
                    </a>
                  </div>
                  <div className="link">
                    <a
                      href="#expertise"
                      ref={expertiseRef}
                      className="hover:text-black focus:text-black dark:hover:text-purple-300 dark:focus:text-purple-300 transition-colors"
                    >
                      Expertise
                    </a>
                  </div>
                  <div className="link">
                    <a
                      href="#about"
                      ref={aboutRef}
                      className="hover:text-black focus:text-black dark:hover:text-purple-300 dark:focus:text-purple-300 transition-colors"
                    >
                      About
                    </a>
                  </div>
                  <div className="link">
                    <a
                      href="#contact"
                      ref={contactRef}
                      className="hover:text-black focus:text-black dark:hover:text-purple-300 dark:focus:text-purple-300 transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </div>

                <div className="video-wrapper">
                  <Suspense fallback={<div>Loading...</div>}>
                    <VideoPlayer />
                  </Suspense>
                  <video autoPlay muted loop playsInline>
                    <source src="/lio-vid.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="col col-2">
                <div className="socials">
                  <div className="sub-col">
                    <p>Lio Tech</p>
                    <p>Michail Voda 148</p>
                    <p>10446 Athens</p>
                    <p>Greece</p>
                    <br />
                    <p>info@lio-tech.gr</p>
                    {/* Add Here */}
                  </div>
                  <div className="sub-col">
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                    <br />
                    {/* Add Here */}
                  </div>
                </div>
                <div className="header hidden lg:flex">
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

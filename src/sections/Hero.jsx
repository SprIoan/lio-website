import { Suspense, useRef } from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../lib/utils";
import Loading from "../components/ui/Loading";
import { useTheme } from "../ThemeContext";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { useGSAP } from "@gsap/react";

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
const Hero = () => {
  const { theme } = useTheme();
  const LearnMoreRef = useRef(null);

  useGSAP((context, contextSafe) => {
    const onLearnMore = contextSafe(() => {
      window.scrollTo({
        top: document.getElementById("vision").offsetTop,
        behavior: "smooth",
      });
    });

    //add event listener to the button
    LearnMoreRef.current.addEventListener("click", onLearnMore);

    return () => {
      //remove event listener
      LearnMoreRef.current.removeEventListener("click", onLearnMore);
    };
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div
        id="hero"
        className={`h-screen relative mx-auto overflow-hidden ${
          theme == "light" ? "bg-white" : "bg-slate-900"
        } flex flex-col items-center justify-center rounded-lg`}
      >
        <div
          className={`absolute inset-0 w-full h-full ${
            theme == "light" ? "bg-white/30" : "bg-slate-900"
          }  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none transition-colors duration-700`}
        />

        <Boxes />
        <h1
          id="intro-text"
          className={cn(
            `md:text-6xl lg:text-7xl text-3xl font-semibold z-0 pointer-events-none border-4 border-black dark:border-white shadow-2xl p-4 bg-white dark:bg-black text-black dark:text-white relative z-20`
          )}
        >
          Welcome to Lio Tech
        </h1>
        <p
          className={`text-center text-lg md:text-2xl font-bold  underline-offset-4 lg:text-4xl mt-6 pointer-events-none ${
            theme == "light" ? "text-black" : "text-white"
          } relative z-20`}
        >
          where we build amazing things for you
        </p>
        <div className="relative top-[150px] md:top-10 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <AceternityLogo />
            <a
              ref={LearnMoreRef}
              className="whitespace-nowrap text-lg md:text-xl"
            >
              Learn More
            </a>
          </HoverBorderGradient>
        </div>
      </div>
    </Suspense>
  );
};

export default Hero;

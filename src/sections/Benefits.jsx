import { benefits } from "../constants";

import Heading from "./Heading";
import Arrow from "../assets/svg/Arrow";

import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useTheme } from "../ThemeContext";

const Benefits = () => {
  const { theme } = useTheme();
  return (
    <section
      id="expertise"
      className={`${
        theme === "dark" ? "bg-grid" : "bg-grid-light"
      } bg-gradient-to-b from-gray-100 dark:from-purple-900/20 to-gray-200 dark:to-purple-900/30 pb-20 z-10`}
    >
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] pt-10 lg:pt-0 relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Skills We Bring"
          text="What sets us apart is our ability to understand your needs and deliver the best solutions."
        />
        <div className="h-[5vh]" />

        <div className="flex flex-wrap justify-center gap-10 pb-10">
          {benefits.map((item) => (
            <div
              className={`block ${item.specialClass} relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]`}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="text-2xl leading-normal mb-5 font- text-black dark:text-white">
                  {item.title}
                </h5>
                <p className="font-light text-[0.895rem] leading-6 md:text-base mb-6 text-n-5 dark:text-n-3 font-sans">
                  {item.text}
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="!w-[48px] !h-[48px] mr-3"
                  />
                  <p className="ml-auto !font-code text-xs font-bold text-black/90 dark:text-n-1 uppercase tracking-wider z-3">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-[#EDEFF1] dark:bg-[#231842]"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 dark:hover:opacity-15 cursor-pointer">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

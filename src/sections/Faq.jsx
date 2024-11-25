import FaqItem from "../components/ui/FaqItem";
import { faq } from "../constants";
import Heading from "./Heading";
import { useTheme } from "../ThemeContext";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);
  const { theme } = useTheme();

  return (
    <section
      id="faq"
      className={`${theme === "dark" ? "bg-grid" : "bg-grid-light"}`}
    >
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] pt-10 lg:mt-0 relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="What You Might Want to Know"
        />
        <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 opacity-15 -z-1 bg-white dark:bg-s2" />
        <div className="faq-glow_before relative z-2  rounded-lg  bg-black/0">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-white dark:border-s2 bg-white dark:bg-s1">
              <img
                src="/images/cherry3.svg"
                alt="logo"
                className="!w-[70%] !h-[70%]"
              />
            </div>

            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>

          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-white dark:bg-s2 max-lg:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Faq;

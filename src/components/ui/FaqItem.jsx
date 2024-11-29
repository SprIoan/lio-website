import clsx from "clsx";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

//eslint-disable-next-line
const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);

  //eslint-disable-next-line
  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7 border-b border-black dark:border-white pb-2"
        onClick={() => {
          //eslint-disable-next-line
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-gray-600 dark:text-purple-300 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-black dark:text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-[#2BBF63]/80"
            )}
          >
            {/* eslint-disable-next-line */}
            {item.question}
          </div>
        </div>

        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full dark:border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            active && "before:bg-purple-600 after:rotate-0 after:bg-purple-600"
          )}
        >
          <div className="g4-light dark:g4 size-11/12 rounded-full shadow-sm shadow-[#2BBF63] dark:shadow-300" />
        </div>
      </div>

      <SlideDown>
        {/* eslint-disable-next-line */}
        {activeId === item.id && (
          //eslint-disable-next-line
          <div className="body-3 px-7 py-3.5 text-gray-800 dark:text-[#C3CBF5]">
            {/* eslint-disable-next-line */}
            {item.answer}
          </div>
        )}
      </SlideDown>

      <div
        className={clsx(
          "g5-light dark:g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute",
          active && "opacity-100"
        )}
      >
        <div className="g4-light dark:g4 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-[#2BBF63] dark:bg-purple-400" />
      </div>
    </div>
  );
};
export default FaqItem;

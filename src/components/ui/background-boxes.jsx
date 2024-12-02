"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

//eslint-disable-next-line
export const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(24).fill(1);
  const cols = new Array(24).fill(1);
  let colors = ["--box-2", "--red-500", "--box-2", "--red-500", ""];

  const colors2 = ["--box-2", "--red-500"];

  // let colors = ["--green-400", "--red-400", "--green-400", "--red-400", ""];

  // const colors2 = ["--green-400", "--red-400"];

  const screenSize = window.innerWidth;
  let screen_limit = 22;
  if (screenSize < 450) {
    screen_limit = 5;
  }
  if (screenSize < 768) {
    screen_limit = 5;
  } else if (screenSize < 1441) {
    screen_limit = 5;
  } else {
    screen_limit = 5;
  }

  const getRandomColor = (i, j) => {
    if (j < screen_limit || Math.abs(i - j) < 3) {
      return colors2[Math.floor(Math.random() * colors2.length)];
    }
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-15%,39.5%) scale(1.33) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 bg-gray-700",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8  border-l bg-white  border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              initial={{
                backgroundColor: `var(${getRandomColor(i, j)})`,
              }}
              transition={{
                delay: 1,
                duration: 2.5,
              }}
              whileHover={{
                backgroundColor: `${"white"}`,
                transition: { duration: 0 },
              }}
              whileTap={{
                backgroundColor: `${"white"}`,
                transition: { duration: 0 },
              }}
              key={`col` + j}
              className="w-16 h-8  border-r border-t border-slate-700 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);

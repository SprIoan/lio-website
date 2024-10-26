"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

//eslint-disable-next-line
export const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(40).fill(1);
  const cols = new Array(36).fill(1);
  let colors = [
    "",
    "--sky-400",
    "--pink-400",
    "--green-400",
    "--yellow-400",
    "--red-400",
    "--purple-400",
    "--blue-400",
    "--indigo-400",
    "--violet-400",
    "--sky-400",
    "--pink-400",
    "--green-400",
    "--yellow-400",
    "--red-400",
    "--purple-400",
    "--blue-400",
    "--indigo-400",
    "--violet-400",
  ];

  const colors2 = [
    "--sky-400",
    "--pink-400",
    "--green-400",
    "--yellow-400",
    "--red-400",
    "--purple-400",
    "--blue-400",
    "--indigo-400",
    "--violet-400",
  ];

  const screenSize = window.innerWidth;
  let screen_limit = 22;
  if (screenSize < 450) {
    screen_limit = 14;
  }
  if (screenSize < 768) {
    screen_limit = 17;
  } else if (screenSize < 1441) {
    screen_limit = 19;
  } else {
    screen_limit = 21;
  }

  const getRandomColor = (i, j) => {
    if (j < screen_limit || Math.abs(i - j) < 5) {
      return colors2[Math.floor(Math.random() * colors2.length)];
    }
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-25%,-20%) skewX(-48deg) skewY(14deg) scale(1.2) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8  border-l  border-slate-700 relative"
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
                backgroundColor: `${"#D3D3D3"}`,
                transition: { duration: 0 },
              }}
              whileTap={{
                backgroundColor: `${"lightgray"}`,
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

"use client";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "../components/ui/MagicButton";
import { useState } from "react";

const Footer = () => {
  //eslint-disable-next-line
  const [hovered1, setHovered1] = useState(false);
  //eslint-disable-next-line
  const [hovered2, setHovered2] = useState(false);
  return (
    <footer
      className="bg-white bg-opacity-25 dark:bg-gray-900 w-full sticky bottom-0 pt-20 pb-10 h-full "
      id="contact"
    >
      <div className="px-5 sm:px-10 max-w-7xl mx-auto">
        {/* background grid */}
        <div className="w-full absolute left-0 -bottom-0 min-h-96 overflow-hidden ">
          <img
            src="/images/grid.svg"
            alt="grid"
            className="w-full h-full opacity-50 "
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Are you ready to expand <span className="text-[#DEB887]">your</span>{" "}
            digital presence?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Get in touch with us today, and let&apos;s explore how I can help
            you reach your goals.
          </p>

          <a href="mailto:spiroioannou@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex my-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Lio Tech
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            <span className="w-10 h-10 cursor-pointer flex justify-center items-center bg-opacity-75 bg-[rgba(17, 25, 40, 0.75)] rounded-lg border border-black-300 hover:bg-[#DEB887] transition-colors">
              <img
                src={hovered1 ? "/images/git-black.svg" : "/images/git.svg"}
                alt="icons"
                width={20}
                height={20}
              />
            </span>
            <div className="w-10 h-10 border rounded-md z-[999] cursor-pointer flex justify-center items-center bg-[rgba(17, 25, 40, 0.75)] hover:bg-[#DEB887]">
              <img
                src={hovered2 ? "/images/link-black.svg" : "/images/link.svg"}
                alt="icons"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import CustomCheckbox from "../components/ui/CustomCheckbox";
import { useState } from "react";

const Contact = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/GHKUcTt3TbcFKUHM6", "_blank");
  };

  const handleCopy = (copyBtnNo) => {
    // the transfromation of the copy icon to a checkmark

    if (copyBtnNo === 1) {
      navigator.clipboard.writeText("test@test.com");
      const copyIcon = document.querySelector(".copyIcon1a");
      copyIcon.src = "/images/checkmark.svg";
      const copyIcon2 = document.querySelector(".copyIcon1b");
      copyIcon2.src = "/images/checkmark.svg";
      setTimeout(() => {
        copyIcon.src = "/images/copy-dark.svg";
        copyIcon2.src = "/images/copy-light.svg";
      }, 3000);
    } else if (copyBtnNo === 2) {
      navigator.clipboard.writeText("Michail Voda 148, 10446, Athens, Greece");
      const copyIcon = document.querySelector(".copyIcon2a");
      copyIcon.src = "/images/checkmark.svg";
      const copyIcon2 = document.querySelector(".copyIcon2b");
      copyIcon2.src = "/images/checkmark.svg";
      setTimeout(() => {
        copyIcon.src = "/images/copy-dark.svg";
        copyIcon2.src = "/images/copy-light.svg";
      }, 3000);
    } else {
      navigator.clipboard.writeText("+30 123 456 789 0");
      const copyIcon = document.querySelector(".copyIcon3a");
      copyIcon.src = "/images/checkmark.svg";
      const copyIcon2 = document.querySelector(".copyIcon3b");
      copyIcon2.src = "/images/checkmark.svg";
      setTimeout(() => {
        copyIcon.src = "/images/copy-dark.svg";
        copyIcon2.src = "/images/copy-light.svg";
      }, 3000);
    }
  };

  return (
    <section
      className="pb-10 w-full bg-gradient-to-b from-white dark:from-black to-white/90 dark:to-black/50 pt-10"
      id="contact"
    >
      <div className="container xl:border-2 dark:border-0 border-gray-800 lg:rounded-[50px] py-3 dark:lg:bg-gray-900/70 flex flex-col lg:flex-row lg:gap-6">
        <div className="w-full flex flex-col items-center lg:items-start lg:w-2/5 h-full rounded-3xl ">
          <img
            src="/images/contact-dark.svg"
            alt="lio-dark"
            className="w-1/2 ml-10 lg:ml-3 mt-2 hidden dark:flex"
          />
          <img
            src="/images/contact-light.svg"
            alt="lio-light"
            className="w-1/2 ml-16 sm:ml-32 lg:ml-3 mt-2 flex dark:hidden"
          />
          <div className="relative mt-16 flex flex-col justify-center group px-6 py-4 rounded-3xl w-[90%] bg-white/75 dark:bg-black/15 shadow-sm  hover:bg-white dark:hover:bg-black/40 transition-colors">
            <a href="mailto:test@test.com">
              <img
                src="/images/chat.svg"
                alt="chat"
                className="w-8 h-8 p-2  rounded-xl absolute top-3 right-4 bg-[#46e482] dark:bg-[#613594] group-hover:bg-[#30dc72] dark:group-hover:bg-[#904edb] transition-colors"
              />
            </a>
            <h1 className="text-lg font-semibold text-black dark:text-white  ">
              Chat to us
            </h1>
            <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">
              Our friendly team is here to help
            </p>
            <p className="text-xs mt-5 font-semibold text-gray-500 dark:text-gray-300">
              test<span className="hidden">NoSpam</span>@
              <span className="hidden">NoSpam</span>test.com
            </p>
            <img
              src="/images/copy-dark.svg"
              alt="copy"
              className="hidden dark:flex copyIcon1a absolute right-6 bottom-4 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => handleCopy(1)}
            />
            <img
              src="/images/copy-light.svg"
              alt="copy"
              className="flex dark:hidden copyIcon1b absolute right-6 bottom-4 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => handleCopy(1)}
            />
          </div>
          <div className="mt-6 relative flex flex-col justify-center group px-6 py-4  rounded-3xl w-[90%] bg-white/75 dark:bg-black/15 shadow-sm hover:bg-white dark:hover:bg-black/40 transition-colors">
            <img
              src="/images/location.svg"
              alt="chat"
              className="w-8 h-8 p-2  rounded-xl absolute top-3 right-4 bg-[#46e482] dark:bg-[#613594] group-hover:bg-[#56ec90] dark:group-hover:bg-[#904edb]  transition-colors cursor-pointer"
              onClick={handleLocationClick}
            />
            <h1 className="text-lg font-semibold text-black dark:text-white ">
              Visit us
            </h1>
            <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">
              Come say hello at our office HQ.
            </p>
            <p className="text-xs mt-5 font-semibold text-gray-500 dark:text-gray-300">
              Michail Voda 148 <br /> 10446, Athens, Greece
            </p>
            <img
              src="/images/copy-dark.svg"
              alt="copy"
              className="hidden dark:flex copyIcon2a absolute right-6 bottom-4 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => handleCopy(2)}
            />
            <img
              src="/images/copy-light.svg"
              alt="copy"
              className="flex dark:hidden copyIcon2b absolute right-6 bottom-4 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => handleCopy(2)}
            />
          </div>
          <div className="mt-6 relative flex flex-col justify-center group px-6 py-4  rounded-3xl w-[90%] bg-white/75 dark:bg-black/15 shadow-sm hover:bg-white dark:hover:bg-black/40 transition-colors">
            <a href="tel:+301234567890">
              <img
                src="/images/phone.svg"
                alt="chat"
                className="w-8 h-8 p-2  rounded-xl absolute top-3 right-4 bg-[#46e482] dark:bg-[#613594] group-hover:bg-[#2BBF63] dark:group-hover:bg-[#904edb]  transition-colors"
              />
            </a>
            <h1 className="text-lg font-semibold text-black dark:text-white">
              Call us
            </h1>
            <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">
              Mon-Fri from 9am to 5pm
            </p>
            <p className="text-xs mt-5 font-semibold text-gray-500 dark:text-gray-300">
              <p>
                {" "}
                +30 <span className="hidden">NoSpam</span>123 456 789 0
              </p>{" "}
            </p>
            <img
              src="/images/copy-dark.svg"
              alt="copy"
              className="hidden dark:flex copyIcon3a absolute right-6 bottom-4 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => handleCopy(3)}
            />
            <img
              src="/images/copy-light.svg"
              alt="copy"
              className="flex dark:hidden copyIcon3b absolute right-6 bottom-4 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => handleCopy(3)}
            />
          </div>
        </div>

        <div className="w-fit relative right-0 xl:-right-12 border bg-[#30dc72] dark:bg-purple-500/50 h-full rounded-[50px] p-10 py-16 mt-10 lg:mt-0">
          <h1 className="font-light text-5xl text-black dark:text-gray-200">
            Got Ideas? We&apos;ve got the skills. Let&apos;s team up.
          </h1>
          <p className="text-md mt-6 text-gray-900 dark:text-gray-400">
            Tell us more about yourself and what you&apos;ve got in mind.
          </p>
          <div className="flex gap-2 flex-col justify-center items-center mt-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full  outline-none text-sm border-b border-black mt-4 p-2 bg-transparent placeholder:text-black/90 dark:placeholder:text-gray-400 "
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-full outline-none text-sm border-b border-black mt-4 p-2 bg-transparent placeholder:text-black/90 dark:placeholder:text-gray-400"
            />
            <textarea
              placeholder="Tell us a little about the project..."
              className="w-full outline-none mt-4 p-2 bg-transparent border-b border-black placeholder:text-black/90 dark:placeholder:text-gray-400"
            ></textarea>
            <p className="mr-auto mt-4 text-sm text-black dark:text-white">
              How can we help?
            </p>
            <div className="mr-auto ml-0 mt-2 flex flex-wrap gap-4 w-full">
              <div className="flex gap-3  justify-start items-center">
                <CustomCheckbox
                  checked={checked1}
                  onChange={() => setChecked1(!checked1)}
                />
                <span className="text-sm text-black dark:text-white">
                  Website Design
                </span>
              </div>
              <div className="flex gap-3  justify-start items-center">
                <CustomCheckbox
                  checked={checked2}
                  onChange={() => setChecked2(!checked2)}
                />
                <span className="text-sm text-black dark:text-white">
                  UX Design
                </span>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <CustomCheckbox
                  checked={checked3}
                  onChange={() => setChecked3(!checked3)}
                />
                <span className="text-sm   text-black dark:text-white">
                  Technical Guidance
                </span>
              </div>
              <div className="flex gap-3  justify-start items-center">
                <CustomCheckbox
                  checked={checked4}
                  onChange={() => setChecked4(!checked4)}
                />
                <span className="text-sm text-black dark:text-white">
                  AI Models
                </span>
              </div>
              <div className="flex gap-3   justify-start items-center">
                <CustomCheckbox
                  checked={checked5}
                  onChange={() => setChecked5(!checked5)}
                />
                <span className="text-sm text-black dark:text-white">
                  Strategy & consulting
                </span>
              </div>
              <div className="flex gap-3 min-w-40 justify-start items-center">
                <CustomCheckbox
                  checked={checked6}
                  onChange={() => setChecked6(!checked6)}
                />
                <span className="text-sm text-black dark:text-white">
                  Other
                </span>
              </div>
            </div>
            <button className="w-[90%] mt-4 xl:mt-10 px-2 py-3 text-sm rounded-md bg-gradient-to-br from-black to-gray-900 hover:from-gray-900 hover:to-black transition-colors text-white">
              Let&apos;s get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

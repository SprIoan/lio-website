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
      const copyIcon = document.querySelector(".copyIcon1");
      copyIcon.src = "/images/checkmark.svg";
      setTimeout(() => {
        copyIcon.src = "/images/copy.svg";
      }, 3000);
    } else if (copyBtnNo === 2) {
      navigator.clipboard.writeText("Michail Voda 148, 10446, Athens, Greece");
      const copyIcon = document.querySelector(".copyIcon2");
      copyIcon.src = "/images/checkmark.svg";
      setTimeout(() => {
        copyIcon.src = "/images/copy.svg";
      }, 3000);
    } else {
      navigator.clipboard.writeText("+30 123 456 789 0");
      const copyIcon = document.querySelector(".copyIcon3");
      copyIcon.src = "/images/checkmark.svg";
      setTimeout(() => {
        copyIcon.src = "/images/copy.svg";
      }, 3000);
    }
  };

  return (
    <section
      className="pb-10 w-full bg-gradient-to-b from-black to-black/50 pt-10"
      id="contact"
    >
      <div className="container  border-gray-800 lg:rounded-[50px] py-3 lg:bg-gray-900/70 flex flex-col lg:flex-row lg:gap-6">
        <div className="w-full flex flex-col items-center lg:items-start lg:w-2/5 h-full rounded-3xl ">
          <img
            src="/images/test2.svg"
            alt="lio-light"
            className="w-1/2 ml-10 lg:ml-3 mt-2 "
          />
          <div className="relative mt-16 flex flex-col justify-center group px-6 py-4  rounded-3xl w-[90%] bg-black/15 shadow-sm shadow-purple-200 hover:bg-black/25 transition-colors">
            <a href="mailto:test@test.com">
              <img
                src="/images/chat.svg"
                alt="chat"
                className="w-8 h-8 p-2  rounded-xl absolute top-3 right-4 bg-[#613594] group-hover:bg-[#904edb] transition-colors"
              />
            </a>
            <h1 className="text-lg font-semibold  text-white ">Chat to us</h1>
            <p className="text-xs mt-3 text-gray-400">
              Our friendly team is here to help
            </p>
            <p className="text-xs mt-5 font-semibold text-gray-300">
              test<span className="hidden">NoSpam</span>@
              <span className="hidden">NoSpam</span>test.com
            </p>
            <img
              src="/images/copy.svg"
              alt="copy"
              className="copyIcon1 absolute right-6 bottom-4 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => handleCopy(1)}
            />
          </div>
          <div className="mt-6 relative flex flex-col justify-center group px-6 py-4  rounded-3xl w-[90%] bg-black/15 shadow-sm shadow-purple-200 hover:bg-black/25 transition-colors">
            <img
              src="/images/location.svg"
              alt="chat"
              className="w-8 h-8 p-2  rounded-xl absolute top-3 right-4 bg-[#613594] group-hover:bg-[#904edb] transition-colors cursor-pointer"
              onClick={handleLocationClick}
            />
            <h1 className="text-lg font-semibold  text-white ">Visit us</h1>
            <p className="text-xs mt-3 text-gray-400">
              Come say hello at our office HQ.
            </p>
            <p className="text-xs mt-5 font-semibold text-gray-300">
              Michail Voda 148 <br /> 10446, Athens, Greece
            </p>
            <img
              src="/images/copy.svg"
              alt="copy"
              className="copyIcon2 absolute right-6 bottom-4 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => handleCopy(2)}
            />
          </div>
          <div className="mt-6 relative flex flex-col justify-center group px-6 py-4 rounded-3xl w-[90%] bg-black/15 shadow-sm shadow-purple-200 hover:bg-black/25 transition-colors">
            <a href="tel:+301234567890">
              <img
                src="/images/phone.svg"
                alt="chat"
                className="w-8 h-8 p-2  rounded-xl absolute top-3 right-4 bg-[#613594] group-hover:bg-[#904edb] transition-colors"
              />
            </a>
            <h1 className="text-lg font-semibold  text-white">Call us</h1>
            <p className="text-xs mt-3 text-gray-400">
              Mon-Fri from 9am to 5pm
            </p>
            <p className="text-xs mt-5 font-semibold text-gray-300">
              <p>
                {" "}
                +30 <span className="hidden">NoSpam</span>123 456 789 0
              </p>{" "}
            </p>
            <img
              src="/images/copy.svg"
              alt="copy"
              className="copyIcon3 absolute right-6 bottom-4 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => handleCopy(3)}
            />
          </div>
        </div>

        <div className="w-fit relative right-0 xl:-right-12 border  bg-purple-500/50 h-full rounded-[50px] p-10 py-16 mt-10 lg:mt-0">
          <h1 className="font-light text-5xl text-gray-200">
            Got Ideas? We&apos;ve got the skills. Let&apos;s team up.
          </h1>
          <p className="text-md mt-6 text-gray-400">
            Tell us more about yourself and what you&apos;ve got in mind.
          </p>
          <div className="flex gap-2 flex-col justify-center items-center mt-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full outline-none text-sm border-b mt-4 p-2 bg-transparent"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-full outline-none text-sm border-b mt-4 p-2 bg-transparent"
            />
            <textarea
              placeholder="Tell us a little about the project..."
              className="w-full outline-none mt-4 p-2 bg-transparent border-b"
            ></textarea>
            <p className="mr-auto mt-4 text-sm text-white">How can we help?</p>
            <div className="mr-auto ml-0 mt-2 flex flex-wrap gap-4 w-full">
              <div className="flex gap-3  justify-start items-center">
                <CustomCheckbox
                  checked={checked1}
                  onChange={() => setChecked1(!checked1)}
                />
                <span className="text-sm text-white">Website Design</span>
              </div>
              <div className="flex gap-3  justify-start items-center">
                <CustomCheckbox
                  checked={checked2}
                  onChange={() => setChecked2(!checked2)}
                />
                <span className="text-sm text-white">UX Design</span>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <CustomCheckbox
                  checked={checked3}
                  onChange={() => setChecked3(!checked3)}
                />
                <span className="text-sm   text-white">Technical Guidance</span>
              </div>
              <div className="flex gap-3  justify-start items-center">
                <CustomCheckbox
                  checked={checked4}
                  onChange={() => setChecked4(!checked4)}
                />
                <span className="text-sm text-white">AI Models</span>
              </div>
              <div className="flex gap-3   justify-start items-center">
                <CustomCheckbox
                  checked={checked5}
                  onChange={() => setChecked5(!checked5)}
                />
                <span className="text-sm text-white">
                  Strategy & consulting
                </span>
              </div>
              <div className="flex gap-3 min-w-40 justify-start items-center">
                <CustomCheckbox
                  checked={checked6}
                  onChange={() => setChecked6(!checked6)}
                />
                <span className="text-sm text-white">Other</span>
              </div>
            </div>
            <button className="w-[90%] mt-4 px-2 py-3 text-sm rounded-md bg-gradient-to-br from-black to-gray-900 hover:from-gray-900 hover:to-black transition-colors text-white">
              Let&apos;s get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

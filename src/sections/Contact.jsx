import CustomCheckbox from "../components/ui/CustomCheckbox";

const Contact = () => {
  return (
    <section
      className="pb-10 w-full bg-gradient-to-b from-black to-black/50 pt-10"
      id="contact"
    >
      <div className="container h-[700px] border-2 border-gray-800 lg:rounded-[50px] py-6 bg-gray-900/80 flex gap-4">
        <div className="w-1/3 h-full rounded-3xl ">
          <img
            src="/images/test2.svg"
            alt="lio-light"
            className="w-1/2 ml-3 mt-2"
          />
          <div className="relative mt-10 flex flex-col justify-center group px-6 py-4  rounded-3xl w-[90%] bg-black/15 shadow-sm shadow-purple-200 hover:bg-black/25 transition-colors">
            <img
              src="/images/chat.svg"
              alt="chat"
              className="w-8 h-8 p-2  rounded-xl absolute top-3 right-4 bg-[#613594] group-hover:bg-[#904edb] transition-colors"
            />
            <h1 className="text-lg font-semibold  text-white ">Chat to us</h1>
            <p className="text-xs mt-3 text-gray-400">
              Our friendly team is here to help
            </p>
            <p className="text-xs mt-5 font-semibold text-gray-300">
              test@test.com
            </p>
            <img
              src="/images/copy.svg"
              alt="copy"
              className="absolute right-6 bottom-4 cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
          <div className="mt-6 relative flex flex-col justify-center group px-6 py-4  rounded-3xl w-[90%] bg-black/15 shadow-sm shadow-purple-200 hover:bg-black/25 transition-colors">
            <img
              src="/images/location.svg"
              alt="chat"
              className="w-8 h-8 p-2  rounded-xl absolute top-3 right-4 bg-[#613594] group-hover:bg-[#904edb] transition-colors"
            />
            <h1 className="text-lg font-semibold  text-white ">Visit us</h1>
            <p className="text-xs mt-3 text-gray-400">
              Come say hello at our office HQ.
            </p>
            <p className="text-xs mt-5 font-semibold text-gray-300">
              Iroon Polytechniou 9 <br /> 15773 Zografou, Athens, Greece
            </p>
            <img
              src="/images/copy.svg"
              alt="copy"
              className="absolute right-6 bottom-4 cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
          <div className="mt-6 relative flex flex-col justify-center group px-6 py-4 rounded-3xl w-[90%] bg-black/15 shadow-sm shadow-purple-200 hover:bg-black/25 transition-colors">
            <img
              src="/images/phone.svg"
              alt="chat"
              className="w-8 h-8 p-2  rounded-xl absolute top-3 right-4 bg-[#613594] group-hover:bg-[#904edb] transition-colors"
            />
            <h1 className="text-lg font-semibold  text-white">Call us</h1>
            <p className="text-xs mt-3 text-gray-400">
              Mon-Fri from 9am to 5pm
            </p>
            <p className="text-xs mt-5 font-semibold text-gray-300">
              +30 123 456 789 0
            </p>
            <img
              src="/images/copy.svg"
              alt="copy"
              className="absolute  right-6 bottom-4 cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>

        <div className="w-2/3 bg-purple-500/50 h-full rounded-3xl p-10 py-16">
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
                <CustomCheckbox checked={true} />
                <span className="text-sm text-white">Website Design</span>
              </div>
              <div className="flex gap-3  justify-start items-center">
                <CustomCheckbox checked={true} />
                <span className="text-sm text-white">UX Design</span>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <CustomCheckbox checked={false} />
                <span className="text-sm   text-white">Technical Guidance</span>
              </div>
              <div className="flex gap-3  justify-start items-center">
                <CustomCheckbox checked={true} />
                <span className="text-sm text-white">AI Models</span>
              </div>
              <div className="flex gap-3   justify-start items-center">
                <CustomCheckbox checked={false} />
                <span className="text-sm text-white">
                  Strategy & consulting
                </span>
              </div>
              <div className="flex gap-3 min-w-40 justify-start items-center">
                <CustomCheckbox checked={true} />
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

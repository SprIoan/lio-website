const Contact = () => {
  return (
    <section
      className="pb-10 w-full bg-gradient-to-b from-black to-black/50 pt-10"
      id="contact"
    >
      <div className="container h-[700px] border-2 border-gray-800 rounded-[50px] py-6 flex gap-4">
        <div className="w-1/3 h-full  rounded-3xl ">
          <img src="/images/lio-dark.svg" alt="lio-light" className="w-1/3 " />
          <div className="flex flex-col justify-center group cursor-pointer transition-colors px-6 py-4 rounded-3xl w-fit">
            <h1 className="text-xl font-semibold  text-gray-300 group-hover:text-white">
              Chat to us
            </h1>
            <p className="text-sm mt-2 text-gray-400">
              Our friendly team is here to help
            </p>
            <p className="text-sm mt-4 font-semibold text-gray-300">
              test@test.com
            </p>
          </div>
        </div>

        <div className="w-2/3  bg-[#181E38] h-full rounded-3xl p-10 py-16">
          <h1 className="font-light text-5xl text-gray-200">
            Got Ideas? We've got the skills. Let's team up.
          </h1>
          <p className="text-lg mt-6 text-gray-400">
            Tell us more about yourself and what you've got in mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

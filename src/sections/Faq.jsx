import Heading from "./Heading";

const Faq = () => {
  return (
    <section id="faq">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] mt-10 lg:mt-0 relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="What You Might Want to Know"
        />
        <div className="h-[10vh]" />

        <div className="flex flex-wrap gap-10 mb-10">Continue Here</div>
      </div>
    </section>
  );
};

export default Faq;

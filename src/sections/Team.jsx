import { WobbleCard } from "../components/ui/wobble-card";
import Heading from "./Heading";
import { useTheme } from "../ThemeContext";

const Team = () => {
  const { theme } = useTheme();

  return (
    <section
      id="team"
      className={`${
        theme === "dark" ? "bg-grid" : "bg-grid-light"
      } relative min-h-screen bg-gradient-to-b from-white dark:from-black  px-4 to-gray-100 dark:to-purple-900/10 py-20 lg:pb-44 overflow-hidden`}
    >
      <Heading
        className="md:max-w-md lg:max-w-2xl text-center"
        title="Our Team"
        text="A multidisciplinary collective of top-tier professionals driving innovation through EU, EDF, and nationally-funded initiatives."
      />
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-[#CC3B3C] min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs relative bottom-6">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Software Solutions & System Design
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Our certified IT specialists and software engineers architect
              robust digital infrastructures, leveraging 15+ years experience in
              enterprise-scale system development. We implement secure,
              future-proof technologies that form the backbone of successful
              digital transformations.
            </p>
          </div>
          <img
            src="/images/s_design.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="scale-110 md:scale-100 relative top-16 md:top-0 md:absolute  md:-right-[25%] lg:-right-[43%] xl:-right-[30%] grayscale filter lg:h-full  md:bottom-0 lg:object-cover lg:object-left rounded-2xl md:rounded-sm"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-[#209454] min-h-[300px]">
          <h2 className="max-w-80 relative bottom-6  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Cutting-Edge R&D Leadership
          </h2>
          <p className="mt-4 max-w-[26rem] relative bottom-6 text-left  text-base/6 text-neutral-200">
            PhD-credentialed researchers and project managers spearheading
            Horizon Europe initiatives. We bridge academic rigor with industrial
            applicability, turning groundbreaking concepts into market-ready
            solutions through structured innovation processes.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#c084fc] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm relative bottom-6">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Business Transformation Experts
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Seasoned product managers and business analysts who convert
              complex requirements into actionable roadmaps. Our consultants
              optimize project lifecycles from funding acquisition to
              deployment, ensuring alignment with both technical specifications
              and stakeholder objectives.
            </p>
          </div>
          <img
            src="/images/business.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-0 lg:-right-[10%] lg:h-full -bottom-24 sm:-bottom-32 lg:bottom-0 object-fill object-right lg:object-cover lg:object-left sm:rounded-2xl  lg:rounded-sm lg:border-l-2 border-black"
          />
        </WobbleCard>
      </div>
    </section>
  );
};

export default Team;

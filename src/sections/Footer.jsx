import useSound from "use-sound";

import note1 from "../assets/sounds/note1.mp3";
import note2 from "../assets/sounds/note2.mp3";
import note3 from "../assets/sounds/note3.mp3";
import note4 from "../assets/sounds/note4.mp3";
import note5 from "../assets/sounds/note5.mp3";
import note6 from "../assets/sounds/note6.mp3";
import note7 from "../assets/sounds/note7.mp3";

const Footer = () => {
  const [playNote1] = useSound(note1);
  const [playNote2] = useSound(note2);
  const [playNote3] = useSound(note3);
  const [playNote4] = useSound(note4);
  const [playNote5] = useSound(note5);
  const [playNote6] = useSound(note6);
  const [playNote7] = useSound(note7);

  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <section
      id="footer"
      className="bg-gradient-to-b from-[#EAEBED] to-white dark:from-[#040711] dark:to-black  h-auto pb-4"
    >
      <div className=" container py-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-black dark:text-white/90">
            &copy; {getYear()} Lio Tech. All rights reserved.
          </p>
          <div className="flex gap-0.5">
            <div className="w-3 h-4 bg-[#33DC72]" onClick={playNote1}></div>
            <div className="w-3 h-4 bg-[#DEB887]" onClick={playNote2}></div>
            <div className="w-3 h-4 bg-[#F98B8B]" onClick={playNote3}></div>
            <div className="w-3 h-4 bg-[#9EA7FA]" onClick={playNote4}></div>
            <div className="w-3 h-4 bg-[#6BCFFA]" onClick={playNote5}></div>
            <div className="w-3 h-4 bg-[#78B2FB]" onClick={playNote6}></div>
            <div
              className="w-3 h-4 bg-black dark:bg-white"
              onClick={playNote7}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

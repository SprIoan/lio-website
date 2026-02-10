
import { motion } from "framer-motion";
import { Building2, Home, MapPin, Users, Briefcase, Eye } from "lucide-react";
import { useTheme } from "../ThemeContext";

const Marquee = () => {
  const { theme } = useTheme();
  
  const isDark = theme === "dark";
  
  // Dynamic styles based on theme
  const bgColor = isDark ? "bg-black" : "bg-gray-100";
  const borderColor = isDark ? "border-slate-800" : "border-zinc-200";
  const textColor = isDark ? "text-slate-400" : "text-zinc-500";
  const lineBg = isDark ? "xl:bg-slate-800" : "xl:bg-zinc-200";
  const svgFill = isDark ? "black" : "#f3f4f6"; // black / gray-100
  const svgStroke = isDark ? "#1e293b" : "#e4e4e7"; // slate-800 / zinc-200
  
  const logoColor = isDark ? "text-white" : "text-black";

  return (
    <div className="absolute bottom-0 w-full z-20">
      {/* Tab Transition - Fluid SVG Design */}
      <div className="relative w-full flex items-end justify-center pointer-events-none -mb-1 z-10">
        {/* Left Line */}
        <div className={`h-px bg-transparent ${lineBg} w-full mb-0`} />

        {/* Center SVG Tab */}
        <div className="relative shrink-0 z-10">
          <svg
            width="400"
            height="40"
            viewBox="0 0 400 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[320px] md:w-[400px] h-10 block"
          >
            <path
              d="M0 40C0 40 40 40 60 20C80 0 100 0 100 0H300C300 0 320 0 340 20C360 40 400 40 400 40V41H0V40Z"
              fill={svgFill}
            />
            <path
              d="M0 40C0 40 40 40 60 20C80 0 100 0 100 0H300C300 0 320 0 340 20C360 40 400 40 400 40"
              stroke={svgStroke}
              strokeWidth="1"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center pt-2">
            <span className={`text-[11px] font-bold ${textColor} uppercase tracking-[0.2em]`}>
              Trusted by experts
            </span>
          </div>
        </div>

        {/* Right Line */}
        <div className={`h-px bg-transparent ${lineBg} w-full mb-0`} />
      </div>

      {/* Marquee Content */}
      <div className={`${bgColor} py-3 md:py-6 border-b ${borderColor} flex overflow-hidden select-none group`}>
        <motion.div
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* We duplicate the logo set to create a seamless loop. 
              The original expected 4 sets, let's do that. */}
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-20 items-center shrink-0">
              <div className={`flex items-center gap-2.5 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ${logoColor}`}>
                <Building2 className="w-8 h-8" />
                <span className="text-xl font-black tracking-tighter font-sans">ESTATE<span className="font-light">OS</span></span>
              </div>
              <div className={`flex items-center gap-2.5 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ${logoColor}`}>
                <Home className="w-8 h-8" />
                <span className="text-xl font-bold font-serif">Domus</span>
              </div>
              <div className={`flex items-center gap-2.5 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ${logoColor}`}>
                <MapPin className="w-8 h-8" />
                <span className="text-xl font-bold tracking-widest font-mono">MAPIFY</span>
              </div>
              <div className={`flex items-center gap-2.5 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ${logoColor}`}>
                <Users className="w-8 h-8" />
                <span className="text-xl font-extrabold italic">AgentLink</span>
              </div>
              <div className={`flex items-center gap-2.5 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ${logoColor}`}>
                <Briefcase className="w-8 h-8" />
                <span className="text-xl font-semibold">ProBroker</span>
              </div>
              <div className={`flex items-center gap-2.5 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ${logoColor}`}>
                <Eye className="w-8 h-8" />
                <span className="text-xl font-bold tracking-tight">ViewPoint</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;

import { Suspense } from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../lib/utils";
import Loading from "../components/ui/Loading";
import { useTheme } from "../ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <Suspense fallback={<Loading />}>
      <div
        className={`h-screen relative mx-auto overflow-hidden ${
          theme == "light" ? "bg-white" : "bg-slate-900"
        } flex flex-col items-center justify-center rounded-lg`}
      >
        <div
          className={`absolute inset-0 w-full h-full ${
            theme == "light" ? "bg-white/30" : "bg-slate-900"
          }  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none transition-colors duration-700`}
        />

        <Boxes />
        <h1
          className={cn(
            `md:text-6xl text-3xl font-semibold z-0 pointer-events-none ${
              theme == "light" ? "text-black" : "text-white"
            } relative z-20`
          )}
        >
          Welcome to Lio Tech
        </h1>
        <p
          className={`text-center text-lg md:text-2xl mt-2 pointer-events-none ${
            theme == "light" ? "text-gray-600" : "text-gray-300"
          } relative z-20`}
        >
          where we build amazing things for you
        </p>
      </div>
    </Suspense>
  );
};

export default Hero;

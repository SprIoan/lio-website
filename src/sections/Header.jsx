import ModeSwitch from "../components/ui/ModeSwitch";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header>
      <div className="absolute z-[999] w-full flex justify-between items-center px-6 py-4 pr-10 sm:pr-14">
        <a>
          {theme === "light" ? (
            <img
              src="/images/lio-light.png"
              width={126}
              height={55}
              alt="Xora"
            />
          ) : (
            <img
              src="/images/lio-dark.png"
              width={130}
              height={55}
              alt="Xora"
            />
          )}
        </a>
        <div className="flex flex-row gap-10">
          <ModeSwitch />
          <div>menu</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

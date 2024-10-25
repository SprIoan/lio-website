import { useTheme } from "../../ThemeContext";
import "./ModeSwitch.modules.css";

//eslint-disable-next-line
const ModeSwitch = ({ classNames }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames}>
      <label className="ui-switch" data-color="black">
        <input
          type="checkbox"
          checked={theme == "light"}
          onChange={toggleTheme}
        />
        <div className="slider">
          <div className="circle circle2"></div>
        </div>
      </label>
    </div>
  );
};

export default ModeSwitch;

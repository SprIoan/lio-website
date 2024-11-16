// eslint-disable-next-line
const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <label className="relative cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="absolute opacity-0"
      />
      <div
        className={`
        w-[23px] h-[23px] relative 
        border-2 border-[#323232] rounded-[5px]
        shadow-[4px_4px_#323232]
        transition-all duration-300
        ${checked ? "bg-[#2BBF63]" : "bg-[#ccc]"}
      `}
      >
        {checked && (
          <div
            className="
            absolute top-[3px] left-[7px]
            w-[5px] h-[11px]
            border-r-[2.5px] border-b-[2.5px] border-white
            transform rotate-45
          "
          ></div>
        )}
      </div>
    </label>
  );
};

export default CustomCheckbox;

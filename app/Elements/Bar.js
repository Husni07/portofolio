import { useState } from "react";

const Bar = (props) => {
  const [isHover, setIsHover] = useState(false);
  const { onclick } = props;

  return (
    <div
      className="flex flex-col gap-[5px] cursor-pointer py-3"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onclick}
    >
      <span className="bg-gray-200 hover:bg-white w-8 h-[2px] ease-linear duration-200 hover:text-sky-500 rounded-full"></span>
      <div className="flex justify-end">
        <span
          className={`${
            isHover ? "w-8" : ""
          } bg-gray-200 hover:bg-white w-6 h-[2px] rounded-full transition-all ease-linear duration-200 hover:text-sky-500`}
        ></span>
      </div>
      <div className="flex justify-end">
        <span
          className={`${
            isHover ? "w-8" : ""
          } bg-gray-200 hover:bg-white w-4 h-[2px] rounded-full transition-all ease-linear duration-200 hover:text-sky-500`}
        ></span>
      </div>
    </div>
  );
};

export default Bar;

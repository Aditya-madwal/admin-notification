import React, { useState } from "react";

const DatabaseManage = ({ setActiveComponent }) => {
  const [activeOption, setActiveOption] = useState("CurrentDatabase");

  const handleOptionClick = (option) => {
    setActiveOption(option);
    setActiveComponent(option); // Set the active component in Dashboard
  };

  return (
    <div className="w-[20vw] h-40 rounded-xl border-[#EDEDED] border-[1.5px] bg-white cycle">
      <p className="p-5 text-lg font-bold font-poppins">Database Management</p>
      <div className="m-0 p-0 flex flex-col items-start">
        <button
          className={`pl-10 mb-4 ml-0 ${
            activeOption === "CurrentDatabase"
              ? "border-l-[3px] border-l-blue-600 text-[#F5705E]"
              : "text-[#AEAEAE]"
          }`}
          onClick={() => handleOptionClick("CurrentDatabase")}
        >
          Current Database
        </button>
        <button
          className={`pl-10 ml-0 ${
            activeOption === "PastDatabase"
              ? "border-l-[3px] border-l-blue-600 text-[#F5705E]"
              : "text-[#AEAEAE]"
          }`}
          onClick={() => handleOptionClick("PastDatabase")}
        >
          Past Database
        </button>
      </div>
    </div>
  );
};

export default DatabaseManage;

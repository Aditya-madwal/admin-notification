import React, { useState } from "react";

const UserManage = ({ setActiveComponent }) => {
  const [activeOption, setActiveOption] = useState("PendingVerification");

  const handleOptionClick = (option) => {
    setActiveOption(option);
    setActiveComponent(option); // Set the active component in Dashboard
  };

  return (
    <div className="w-[20vw] h-40 rounded-xl border-[#EDEDED] border-[1.5px] bg-white cycle">
      <p className="p-5 text-lg font-bold font-poppins">User Verification</p>
      <div className="m-0 p-0 flex flex-col items-start">
        <button
          className={`pl-10 mb-4 ml-0 ${
            activeOption === "PendingVerification"
              ? "border-l-[3px] border-l-blue-600 text-[#F5705E]"
              : "text-[#AEAEAE]"
          }`}
          onClick={() => handleOptionClick("PendingVerification")}
        >
          Pending Verification
        </button>
        <button
          className={`pl-10 ml-0 ${
            activeOption === "Rejected"
              ? "border-l-[3px] border-l-blue-600 text-[#F5705E]"
              : "text-[#AEAEAE]"
          }`}
          onClick={() => handleOptionClick("Rejected")}
        >
          Rejected
        </button>
      </div>
    </div>
  );
};

export default UserManage;

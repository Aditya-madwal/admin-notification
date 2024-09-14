import React from "react";
import image1 from "../assets/success.svg";
import image2 from "../assets/soach.png";

const SuccessModal = ({ showModal, onClose }) => {
  if (!showModal) return null; // Don't render if showModal is false

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <div className="flex flex-col items-center justify-center my-5">
          <img src={image2} alt="soach" />
          <div className="mb-10 mt-16">
            <img src={image1} alt="success" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-[#26203B] mb-2">
            Notification Sent Successfully
          </h2>

          {/* Description */}
          <p className="text-[#9C9AA5] mb-6">
            Your message has been sent successfully to the user.
          </p>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="bg-[#F5705E] hover:bg-red-500 text-white py-2 px-6 rounded-lg font-semibold"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

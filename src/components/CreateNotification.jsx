import React, {useState} from "react";
import image from "../assets/document-upload.svg";
const CreateNotification = ({ showSuccessModal }) => {
  const handleSendClick = (e) => {
    e.preventDefault();
    showSuccessModal(); 
  };
  return (
    <>
      <form>
        {/* Form Container */}
        <div className="w-[52vw] rounded-xl border-[#EDEDED] border-2 bg-white">
          {/* Create New Notification Title */}
          <p className="text-2xl font-bold m-4 pl-4">Create New Notification</p>

          {/* Horizontal Line after Title */}
          <div>
            <hr className="border-t-2 border-gray-200" />
          </div>

          <div className="p-8 pr-32">
            {/* Notification Form Title */}
            <p className="text-lg font-bold mb-6">Notification Form</p>

            {/* Horizontal Line below Notification Form */}
            <div className="mb-8">
              <hr className="border-t-2 border-gray-200" />
            </div>
            {/* Send Notification to */}
            <div className="mb-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Send Notification to <span style={{ color: "red" }}>*</span>
              </label>
              <select
                id="notificationTo"
                name="notificationTo"
                required
                className="block w-full rounded-md border-0 p-3 text-sm mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6 bg-[#F9FAFB]"
              >
                <option value="">Select Recipient</option>
                <option value="Farmers">Farmers</option>
                <option value="Panchayat">Panchayat</option>
                <option value="Official">Official</option>
              </select>
            </div>

            {/* Block Code */}
            <div className="mb-4">
              <label
                htmlFor="blockCode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Block Code
              </label>
              <input
                id="blockCode"
                name="blockCode"
                type="text"
                required
                className="block w-[50%] rounded-md border-0 p-3 text-lg mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6 bg-[#F9FAFB]"
              />
            </div>

            {/* User ID and Bulk Upload */}
            <div className="flex items-center gap-4 justify-between mb-9">
              <div className="w-[50%]">
                <label
                  htmlFor="userId"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User ID
                </label>
                <input
                  id="userId"
                  name="userId"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 p-3 text-lg mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6 bg-[#F9FAFB]"
                />
              </div>
              <p className="mt-5 text-xl font-semibold">or</p>
              <div className="flex items-center mt-8">
                <button
                  type="button"
                  className="bg-[#F9FAFB] hover:bg-gray-300 text-[#F5705E] py-2 px-4 rounded-lg shadow-sm ring-1 ring-gray-300 flex items-center gap-1"
                >
                  <img src={image} alt="upload" style={{ width: "18%" }} />
                  Bulk Upload
                </button>
              </div>
            </div>
            <div>
              <hr className="border-t-2 border-gray-200 mb-5" />
            </div>

            {/* Title */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="block w-full rounded-md border-0 p-3 text-lg mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6 bg-[#F9FAFB]"
              />
            </div>

            {/* Content */}
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Write The Content
              </label>
              <textarea
                id="content"
                name="content"
                required
                className="block w-full rounded-md border-0 p-3 text-lg mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6 bg-[#F9FAFB]"
              ></textarea>
            </div>
            <div>
              <hr className="border-t-2 border-gray-200 mt-8" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pr-20">
            <button
              type="submit"
              className="mt-5 bg-[#F5705E] hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg mb-12"
              onClick={handleSendClick}
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateNotification;

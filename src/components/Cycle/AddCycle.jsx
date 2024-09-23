import React, { useState } from "react";

const AddCycle = ({ showSuccessModal }) => {
  const handleSendClick = (e) => {
    e.preventDefault();
    showSuccessModal();
  };

  return (
    <>
      <form>
        {/* Form Container */}
        <div className="w-[52vw] rounded-xl border-[#EDEDED] border-2 bg-white">
          {/* Add New Cycle Title */}
          <p className="text-2xl font-bold m-4 pl-4">Add New Cycle</p>

          {/* Horizontal Line after Title */}
          <div>
            <hr className="border-t-2 border-gray-200" />
          </div>

          <div className="p-8">
            {/* Notification Form Title */}
            <p className="text-lg font-bold mb-6">Notification Form</p>

            {/* Application Dates */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Application Start Date
                </label>
                <input
                  type="text"
                  name="applicationStartDate"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset"
                  
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Application End Date
                </label>
                <input
                  type="text"
                  name="applicationEndDate"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset"
                  
                />
              </div>
            </div>

            {/* Report Dates */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Last Date For Panchayat To Report
                </label>
                <input
                  type="text"
                  name="panchayatReportDate"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset"
                  
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Last Date For Govt. Official To Report
                </label>
                <input
                  type="text"
                  name="officialReportDate"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset"
                  
                />
              </div>
            </div>

            {/* Cycle Code */}
            <div className="mb-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Cycle Code
              </label>
              <input
                type="text"
                name="cycleCode"
                className="block w-[50%] rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset"
                              />
            </div>

            {/* Additional Information */}
            <p className="text-lg font-bold mb-6">Additional Information</p>

            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset"
                
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <textarea
                name="description"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset"
                
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-5 bg-[#F5705E] hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={handleSendClick}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCycle;

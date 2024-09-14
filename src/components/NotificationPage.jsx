import React, { useState } from "react";
import image from "../assets/notify.svg";
import image2 from "../assets/trash-empty.svg";
import image3 from "../assets/sort.svg";

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState("Farmer");

  // Dummy notification data
  const notifications = [
    {
      title: "Reminder Starts soon",
      content: "This is to remind everyone that our",
    },
    {
      title: "Application will end today",
      content: "The end date of the application is 21st",
    },
    {
      title: "Phase 1 status updated",
      content: "We will be starting phase 1 of VFGA",
    },
    {
      title: "2nd Phase starting soon",
      content: "This is to inform everyone that there",
    },
    {
      title: "Reminder fill the form",
      content: "Everyone is requested to fill the form",
    },
  ];

  return (
    <>
      <div>
        <div className="w-[52vw] rounded-xl border-[#EDEDED] border-2 bg-white">
          {/* Create New Notification Title */}
          <p className="text-2xl font-semibold m-4 pl-4">
            Manage Notifications
          </p>

          {/* Horizontal Line after Title */}
          <div>
            <hr className="border-t-2 border-gray-200" />
          </div>

          <div className="p-8">
            {/* Tab Buttons */}
            <div className="flex items-center gap-10 border-b-[1px] mb-4">
              <button
                className={`w-20 pb-4 ${
                  activeTab === "Panchayat"
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-[#89888E]"
                }`}
                onClick={() => setActiveTab("Panchayat")}
              >
                Panchayat
              </button>
              <button
                className={`w-32 pb-4 ${
                  activeTab === "Govt officials"
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-[#89888E]"
                }`}
                onClick={() => setActiveTab("Govt officials")}
              >
                Govt officials
              </button>
              <button
                className={`w-20 pb-4 ${
                  activeTab === "Farmer"
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-[#89888E]"
                }`}
                onClick={() => setActiveTab("Farmer")}
              >
                Farmer
              </button>
            </div>

            {/* Notification Count */}
            <div className="mb-4">
              <div className="text-lg text-[#89888E] font-poppins flex items-center gap-2 my-8">
                <div className="bg-[#EDEDED]">
                  <img src={image} alt="notify" />
                </div>
                <span className="font-semibold text-[#191632] text-3xl">
                  {notifications.length}
                </span>
                <span>notifications</span>
              </div>
            </div>

            {/* Notification List */}
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-[#F8F8F8] p-4 rounded-md shadow-sm w-full">
                <div className="flex items-center gap-4 w-full">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-red-500"
                  />
                  <div className="w-full flex items-center gap-16">
                    <span className="text-[#89888E] text-sm w-44 flex items-center">
                      TITLE <img src={image3} alt="" />
                    </span>
                    <span className="text-sm text-[#89888E] flex items-center">
                      NOTIFICATION <img src={image3} alt="" />
                    </span>
                  </div>
                </div>
              </div>
              {notifications.map((notification, index) => (
                <div>
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 rounded-md w-full mb-3"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-red-500"
                      />
                      <div className="w-full flex items-center gap-16">
                        <span className="font-semibold text-sm w-44">
                          {notification.title}
                        </span>
                        <span className="text-sm text-gray-500">
                          {notification.content.length > 30
                            ? `${notification.content.substring(0, 40)}...`
                            : notification.content}
                        </span>
                      </div>
                    </div>
                    <button className="text-red-500">
                      <img src={image2} alt="delete" />
                    </button>
                  </div>
                  <div>
                    <hr className="border-t-2 border-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;

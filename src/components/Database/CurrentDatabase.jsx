import React, { useState } from "react";
import trashIcon from "../../assets/trash-empty.svg";
import sortIcon from "../../assets/sort.svg";
import editIcon from "../../assets/edit.svg";
import addUser from "../../assets/add.svg";
import filter from "../../assets/filter.svg";
import search from "../../assets/search.svg";

const CurrentDatabase = () => {
  const [activeTab, setActiveTab] = useState("Govt Officials");
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Dummy user data to replicate the table
  const users = [
    {
      name: "Rahul (You)",
      email: "rahul@gmail.com",
      role: "Admin",
      profilePic: "path/to/image", // Add profile images if available
    },
    {
      name: "Raman Sharms",
      email: "raman@gmail.com",
      role: "Admin",
      profilePic: "path/to/image2",
    },
    {
      name: "Ram Gopal",
      email: "ramg@gmail.com",
      role: "Admin",
      profilePic: "path/to/image3",
    },
    {
      name: "Aprit Das Gopal",
      email: "arpit@gmail.com",
      role: "Member",
      profilePic: "path/to/image4",
    },
    {
      name: "Raghu Kishan",
      email: "raghu@gmail.com",
      role: "Member",
      profilePic: "path/to/image5",
    },
  ];

  return (
    <>
      <div>
        <div className="w-[52vw] rounded-xl border-[#EDEDED] border-2 bg-white">
          {/* Title */}
          <p className="text-2xl font-semibold m-4 pl-4">Database</p>
          <hr />

          {/* Tab Navigation */}
          <div className="p-4">
            <div className="flex items-center gap-10 border-b-[1px] mb-4">
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
                  activeTab === "Govt Officials"
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-[#89888E]"
                }`}
                onClick={() => setActiveTab("Govt Officials")}
              >
                Govt Officials
              </button>
            </div>

            {/* User Count and Actions */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg text-[#89888E] font-poppins flex items-center gap-2">
                <span className="font-semibold text-[#191632] text-3xl">
                  {users.length}
                </span>
                <span>Users</span>
              </div>

              {/* Filters and Add User */}
              <div className="flex items-center gap-4">
                {searchActive ? (
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg px-3 py-1 w-48"
                    placeholder="Search users"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onBlur={() => setSearchActive(false)} // Collapse on blur (click outside)
                  />
                ) : (
                  <img
                    src={search}
                    alt="search"
                    className="h-6 w-6 cursor-pointer"
                    onClick={() => setSearchActive(true)}
                  />
                )}
                <button className="flex items-center text-[#89888E] border-2 border-gray-200 px-3 py-1 rounded-md">
                  <img src={filter} alt="filter" className="h-5 w-5 mr-2" />
                  Filters
                </button>
                <button className="flex items-center text-white bg-[#F5705E] px-3 py-2 rounded-md">
                  <img src={addUser} alt="add user" className="h-5 w-5 mr-2" />
                  Add new User
                </button>
              </div>
            </div>

            {/* Table Header */}
            <div className="flex justify-between items-center bg-[#F8F8F8] p-4 rounded-md shadow-sm w-full">
              <div className="flex items-center gap-4 w-full">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-red-500"
                />
                <div className="w-full flex items-center gap-16">
                  <span className="text-[#89888E] text-sm w-48 flex items-center">
                    NAME <img src={sortIcon} alt="" className="ml-1" />
                  </span>
                  <span className="text-sm text-[#89888E] flex items-center w-36">
                    EMAIL <img src={sortIcon} alt="" className="ml-1" />
                  </span>
                  <span className="text-sm text-[#89888E] flex items-center">
                    ROLE <img src={sortIcon} alt="" className="ml-1" />
                  </span>
                </div>
              </div>
            </div>

            {/* User List */}
            <div className="space-y-4 mt-2">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 rounded-md w-full border-b-[1px] border-gray-200"
                >
                  <div className="flex items-center gap-4 w-full">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-red-500"
                    />
                    <div className="flex items-center gap-4 w-full">
                      <img
                        src={user.profilePic}
                        alt={user.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <span className="font-semibold text-sm w-44">
                        {user.name}
                      </span>
                      <span className="text-sm font-semibold w-52">
                        {user.email}
                      </span>
                      <span className="text-sm font-semibold">{user.role}</span>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <button className="text-green-500">
                      <img src={editIcon} alt="edit" className="h-6 w-6" />
                    </button>
                    <button className="text-red-500">
                      <img src={trashIcon} alt="delete" className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Export Button */}
            <div className="mt-6">
              <button className="text-white bg-[#F5705E] px-4 py-2 rounded-md">
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentDatabase;

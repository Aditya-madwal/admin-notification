import React, { useState } from "react";
import notifyIcon from "../../assets/notify.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/trash-empty.svg";
import DeleteCycle from "./DeleteCycle";
import image from "../../assets/sort.svg";

const ManageCycles = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState(null);
  const [cycles, setCycles] = useState([
    {
      cycleCode: "VFGA24-A1",
      appStartDate: "01-01-2025",
      appEndDate: "01-01-2025",
      additionalInfo: "Some text",
    },
    {
      cycleCode: "VFGA24-A1",
      appStartDate: "01-01-2025",
      appEndDate: "01-01-2025",
      additionalInfo: "Some text",
    },
    {
      cycleCode: "VFGA24-A1",
      appStartDate: "01-01-2025",
      appEndDate: "01-01-2025",
      additionalInfo: "Some text",
    },
    {
      cycleCode: "VFGA24-A1",
      appStartDate: "01-01-2025",
      appEndDate: "01-01-2025",
      additionalInfo: "Some text",
    },
    {
      cycleCode: "VFGA24-A1",
      appStartDate: "01-01-2025",
      appEndDate: "01-01-2025",
      additionalInfo: "Some text",
    },
  ]);
  const handleDelete = () => {
    setCycles(cycles.filter((cycle) => cycle !== selectedCycle));
    setShowModal(false);
  };
  return (
    <>
      <div>
        <div className="w-[52vw] bg-white rounded-xl border-2 border-[#EDEDED]">
          {/* Manage Notifications Title */}
          <p className="text-2xl font-semibold m-4 pl-4">
            Manage Notifications
          </p>
          <hr />

          {/* Notification Count */}
          <div className="flex items-center gap-4 mb-6 px-4 mt-5">
            <div className="bg-[#EDEDED] rounded-full p-2">
              <img src={notifyIcon} alt="Notification" className="h-6 w-6" />
            </div>
            <span className="font-semibold text-3xl text-[#191632]">
              {cycles.length}
            </span>
            <span className="text-gray-500 text-xl">Cycles</span>
          </div>

          {/* Notification Table */}
          <div className="overflow-x-auto p-4 mb-16">
            <table className="min-w-full table-auto">
              <thead className="bg-[#F8F8F8] text-left text-[#89888E]">
                <tr>
                  <th className="p-4">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-red-500"
                    />
                  </th>
                  <th className="p-4 text-[#89888E] text-sm">
                    <div className="flex">
                      CYCLE CODE <img src={image} alt="" />
                    </div>
                  </th>
                  <th className="p-4 text-[#89888E] text-sm">
                    <div className="flex">
                      APP START DATE <img src={image} alt="" />
                    </div>
                  </th>
                  <th className="p-4 text-[#89888E] text-sm">
                    <div className="flex">
                      APP END DATE <img src={image} alt="" />
                    </div>
                  </th>
                  <th className="p-4 text-[#89888E] text-sm">
                    <div className="flex">
                      ADD. INFO <img src={image} alt="" />
                    </div>
                  </th>
                  <th className="p-4 text-[#89888E] text-sm"></th>
                </tr>
              </thead>
              <tbody>
                {cycles.map((cycle, index) => (
                  <tr key={index} className="border-b-2 border-gray-200">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-red-500"
                      />
                    </td>
                    <td className="p-4">{cycle.cycleCode}</td>
                    <td className="p-4 text-[#AAAAAA]">{cycle.appStartDate}</td>
                    <td className="p-4 text-[#AAAAAA]">{cycle.appEndDate}</td>
                    <td className="p-4 text-[#AAAAAA]">
                      {cycle.additionalInfo}
                    </td>
                    <td className="p-4 flex items-center gap-4">
                      <button className="text-green-500">
                        <img src={editIcon} alt="Edit" className="h-6 w-6" />
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => {
                          setSelectedCycle(cycle);
                          setShowModal(true);
                        }}
                      >
                        <img
                          src={deleteIcon}
                          alt="Delete"
                          className="h-6 w-6"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DeleteCycle
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default ManageCycles;

import React, { useState } from "react";
import CycleManage from "../components/Cycle/CycleManage";
import AddCycle from "../components/Cycle/AddCycle";
import ManageCycles from "../components/Cycle/ManageCycles";

const Cycle = () => {
  const [activeComponent, setActiveComponent] = useState("AddNewCycle");

  return (
    <>
      <CycleManage setActiveComponent={setActiveComponent} />
      <div>
        {activeComponent === "AddNewCycle" ? <AddCycle /> : <ManageCycles />}
      </div>
    </>
  );
};

export default Cycle;

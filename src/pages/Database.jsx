import React,{act, useState} from 'react'
import DatabaseManage from '../components/Database/DatabaseManage'
import CurrentDatabase from '../components/Database/CurrentDatabase';
const Database = () => {
    const [activeComponent, setActiveComponent] = useState("CurrentDatabase");

  return (
    <>
    <DatabaseManage setActiveComponent={setActiveComponent}/>
    <div>
        {activeComponent === "CurrentDatabase" ? <CurrentDatabase />:<CurrentDatabase />}
    </div>
    </>
  )
}

export default Database
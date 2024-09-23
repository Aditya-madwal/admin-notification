import React,{useState} from 'react'
import UserManage from '../components/UserVerification/UserManage'
import PendingVerification from '../components/UserVerification/PendingVerification';

const UserVerification = () => {
  const [activeComponent, setActiveComponent] = useState("PendingVerification");

  return (
    <>
    <UserManage setActiveComponent={setActiveComponent} />
    <div>
        {activeComponent === "PendingVerification" ? <PendingVerification /> : <h1>hello</h1>}
      </div>
    </>
  )
}

export default UserVerification
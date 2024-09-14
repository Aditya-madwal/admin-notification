import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Verify from "./pages/Verify";
import Notification from "./pages/Notification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotificationPage from "./components/NotificationPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Verify />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/manage" element={<NotificationPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DesktopOnly from "./components/DesktoOnly.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DesktopOnly>
        <App />
      </DesktopOnly>
    </BrowserRouter>
  </StrictMode>
);

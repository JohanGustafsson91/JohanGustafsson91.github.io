import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./print.css";
import cvData from "./cv.json";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App {...cvData} />
  </StrictMode>,
);

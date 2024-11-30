import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App/App.tsx";
import cvData from "./data/cv.json";

import "./styles/root.css";
import "./styles/typography.css";
import "./styles/print.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App {...cvData} />
  </StrictMode>,
);

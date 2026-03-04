import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { LandingPage } from "./pages/landing/LandingPage";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);

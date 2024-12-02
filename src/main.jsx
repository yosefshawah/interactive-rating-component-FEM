import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RatingProvider from "../src/context/RatingContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RatingProvider>
      <App />
    </RatingProvider>
  </StrictMode>
);

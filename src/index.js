import React from "react";
import AppRoutes from "./routes/routes";
import "./index.css";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppRoutes />);

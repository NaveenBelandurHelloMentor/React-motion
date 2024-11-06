import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const Container = document.getElementById("root");
const Root = createRoot(Container);
Root.render(
  <Router>
    <App />
  </Router>
);

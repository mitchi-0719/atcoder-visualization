import { createRoot } from "react-dom/client";
import App from "./App";
import "./style/Reset.css";
import "./style/global.css";

createRoot(document.querySelector("#content")).render(<App />);

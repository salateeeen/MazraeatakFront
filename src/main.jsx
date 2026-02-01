import { createRoot } from "react-dom/client";

import App from "./App/App.jsx";
import "./style/index.css";
import "./style/form.css";
import "./style/scrollbar.css";

createRoot(document.getElementById("root")).render(
    <App />
);

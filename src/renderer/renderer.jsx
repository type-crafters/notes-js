import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import HomeView from "./views/HomeView";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
            </Routes>
        </HashRouter>
    </StrictMode>
);
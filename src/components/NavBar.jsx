import {NavLink, Route, Routes} from "react-router-dom";
import {Anat} from "../views/Anat/Anat.jsx";
import {Pat} from "../views/Pat/Pat.jsx";

import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar-list">
                <li className="navbar-list-item"><NavLink to="/anat">Анатомия</NavLink></li>
                <li className="navbar-list-item"><NavLink to="/pat">Патология</NavLink></li>
            </ul>
            <Routes>
                <Route path="*" element={<Anat />} />
                <Route path="/anat" element={<Anat />} />
                <Route path="/pat" element={<Pat />} />
            </Routes>
        </div>
    );
};

export {NavBar};
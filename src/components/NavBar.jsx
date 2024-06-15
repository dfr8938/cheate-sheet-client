import {NavLink, Route, Routes} from "react-router-dom";    
import Micra from "../views/Micra.jsx";
import Farma from "../views/Farma.jsx";
import Recipe from "../views/Recipe.jsx";

import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar-list">
                <li className="navbar-list-item"><NavLink to="/micra">Микра</NavLink></li>
                <li className="navbar-list-item"><NavLink to="/farma">Фарма</NavLink></li>
                <li className="navbar-list-item"><NavLink to="/recipe">Recipe</NavLink></li>
            </ul>
            <Routes>
                <Route path="/micra" element={<Micra />} />
                <Route path="/farma" element={<Farma />} />
                <Route path="/recipe" element={<Recipe />} />
                <Route path="*" element={<Micra />} />
            </Routes>
        </div>
    );
};

export default NavBar;
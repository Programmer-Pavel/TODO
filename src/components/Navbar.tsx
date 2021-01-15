import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
    return <nav>
        <div className="nav-wrapper cyan lighten-2">
            <NavLink to="/" className="brand-logo logo">React TODO</NavLink>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Список дел</NavLink></li>
                <li><NavLink to="/about">О стеке</NavLink></li>
            </ul>
        </div>
    </nav>
}
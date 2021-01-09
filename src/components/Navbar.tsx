import React from "react";

export const Navbar: React.FunctionComponent = () => {
    return <nav>
        <div className="nav-wrapper blue lighten-4 px1">
            <a href="/" className="brand-logo">React Список дел</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">Список дел</a></li>
                <li><a href="/">О нас</a></li>
            </ul>
        </div>
    </nav>
}
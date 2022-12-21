import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar() {
    return (
        <header>
            <h2><em>OS</em></h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events">Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/interest">Interest</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq">FAQ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/quotes">Quotes</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;

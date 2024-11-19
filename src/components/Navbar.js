import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul>
        <li>
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "purple" : "black",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/professional"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "purple" : "black",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Professional
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "purple" : "black",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/non-tech"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "purple" : "black",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Non-Tech
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
import "./LayoutCSS/Nav.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <Link to="/">
        <h3>Octo-Trainer</h3>
      </Link>
      <div className="nav-links">
        <Link to="/workouts">Workouts</Link>
        <Link to="/foods">Food Tracker</Link>
        <Link to="/login">login/Register?</Link>
      </div>
    </header>
  );
}

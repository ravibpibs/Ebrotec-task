import React from "react";
import logo from "../assets/image/logo.png"
import "../assets/css/sidebar.css"
const Sidebar = () => {
    const menuItems = [
        "Invite Visitor",
        "Invitation List",
        "Book Meeting Room",
        "Calendar View",
        "Meeting Room View",
        "Settings",
        "Emergency Alert",
        "Helpdesk",
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-title">
                <img src={logo} alt="logo" />
                <h3>Entra</h3>
            </div>

            <ul className="sidebar-list">
                {menuItems.map((item) => (
                <li key={item} className="sidebar-item">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;

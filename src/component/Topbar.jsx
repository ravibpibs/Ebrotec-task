import React from "react";
import profile from "../assets/image/profile.png"
import "../assets/css/topbar.css";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar-buttons">
                <button className="topbar-btn">Single Invite</button>
                <button className="topbar-btn">Bulk Invite</button>
                <button className="topbar-btn">Meeting Invite</button>
            </div>
            <div className="topbar-profile">
                EN | <img className="profile-image" src={profile} alt="Profile" />
            </div>
        </div>
    );
};

export default Topbar;

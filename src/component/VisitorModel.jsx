import React from "react";
import "../assets/css/VisitorModal.css";
import profile from "../assets/image/modelProfile.png"

const VisitorModal = ({ isOpen, onClose, visitor }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-card">
                <button className="modal-close" onClick={onClose}>×</button>
                <div className="modal-header">
                    <img src={profile} alt={visitor.name} className="visitor-image" />
                    <div className="visitor-info">
                        <h2>{visitor.fullName}</h2>
                        <p>Visiting: {visitor.host}</p>
                        <p>Official Meeting: {visitor.purpose}</p>
                    </div>
                    <div className="status-badge approved">Approved</div>
                </div>

                <div className="modal-body">
                    <p><strong>Email ID:</strong> {visitor.email}</p>
                    <p><strong>Mobile Number:</strong> {visitor.mobileNumber}</p>
                    <p><strong>Date of Meet:</strong> {visitor.date}</p>
                    <p><strong>Time:</strong> {visitor.time}</p>
                    <p><strong>Meeting Room:</strong> {visitor.meetingRoom}</p>
                    <p><strong>Vehicle Number</strong> {visitor.vehicleNumber}</p>

                </div>
            </div>
        </div>
    );
};

export default VisitorModal;
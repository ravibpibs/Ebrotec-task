import React, { useState } from "react";
import "../assets/css/inviteform.css";
import VisitorModal from "./VisitorModel";
import trash from "../assets/image/trash.png"
import add from "../assets/image/add.png"


const InviteForm = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        mobileNumber: "",
        fullName: "",
        email: "",
        purpose: "",
        entryPoint: "",
        host: "",
        branch: "",
        vehicle: "",
        vehicleNumber: "",
        date: "",
        visitDay: "",
        time: "",
        meetingRoom: "",
        recurrence: false,
        recurrenceDetails: [
            {
                recurrenceDate: "",
                recurrenceVisitDay: "",
                recurrenceTime: "",
                recurrenceMeetingRoom: "",
            },
        ],
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleRecurrenceFieldChange = (index, name, value) => {
        const updatedRecurrenceDetails = [...formData.recurrenceDetails];
        updatedRecurrenceDetails[index] = {
            ...updatedRecurrenceDetails[index],
            [name]: value,
        };
        setFormData({
            ...formData,
            recurrenceDetails: updatedRecurrenceDetails,
        });
    };
    
    const addRecurrenceRow = () => {
        setFormData((prevState) => ({
            ...prevState,
            recurrenceDetails: [
                ...prevState.recurrenceDetails,
                {
                    recurrenceDate: "",
                    recurrenceVisitDay: "",
                    recurrenceTime: "",
                    recurrenceMeetingRoom: "",
                },
            ],
        }));
    };

    const removeRecurrenceRow = (index) => {
        const updatedRecurrenceDetails = formData.recurrenceDetails.filter(
            (_, i) => i !== index
        );
        setFormData({
            ...formData,
            recurrenceDetails: updatedRecurrenceDetails,
        });
    };

    const handleRecurrenceCheckboxChange = (e) => {
        setFormData({
            ...formData,
            recurrence: e.target.checked,
        });
    };

    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleReset = (e) => {
        e.preventDefault();
        setOpen(false);
        setFormData({
            mobileNumber: "",
            fullName: "",
            email: "",
            purpose: "",
            entryPoint: "",
            host: "",
            branch: "",
            vehicle: "",
            vehicleNumber: "",
            date: "",
            visitDay: "",
            time: "",
            meetingRoom: "",
            recurrence: false,
            recurrenceDetails: [
                {
                    recurrenceDate: "",
                    recurrenceVisitDay: "",
                    recurrenceTime: "",
                    recurrenceMeetingRoom: "",
                },
            ],
        })
    }

    console.log("for",formData)

    return (
        <form onSubmit={handleOpen} className="invite-form">
            <h2 className="form-title">Please fill in these details</h2>
            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input
                        id="mobileNumber"
                        name="mobileNumber"
                        className="form-input"
                        placeholder="Mobile Number"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        id="fullName"
                        name="fullName"
                        className="form-input"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email ID</label>
                    <input
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="purpose">Purpose</label>
                    <input
                        id="purpose"
                        name="purpose"
                        className="form-input"
                        placeholder="Purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="entryPoint">Entry Point</label>
                    <input
                        id="entryPoint"
                        name="entryPoint"
                        className="form-input"
                        placeholder="Entry Point"
                        value={formData.entryPoint}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="host">Host</label>
                    <input
                        id="host"
                        name="host"
                        className="form-input"
                        placeholder="Host"
                        value={formData.host}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="branch">Branch</label>
                    <select
                        id="branch"
                        name="branch"
                        className="form-input"
                        value={formData.branch}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Branch</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        {/* Add other options here */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="vehicle">Vehicle</label>
                    <input
                        id="vehicle"
                        name="vehicle"
                        className="form-input"
                        placeholder="Vehicle"
                        value={formData.vehicle}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="vehicleNumber">Vehicle Number</label>
                    <input
                        id="vehicleNumber"
                        name="vehicleNumber"
                        className="form-input"
                        placeholder="Vehicle Number"
                        value={formData.vehicleNumber}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        className="form-input"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="visitDay">Visit Day</label>
                    <input
                        id="visitDay"
                        name="visitDay"
                        className="form-input"
                        placeholder="Visit Day"
                        value={formData.visitDay}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input
                        id="time"
                        name="time"
                        type="time"
                        className="form-input"
                        value={formData.time}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="meetingRoom">Meeting Room</label>
                    <input
                        id="meetingRoom"
                        name="meetingRoom"
                        className="form-input"
                        placeholder="Meeting Room"
                        value={formData.meetingRoom}
                        onChange={handleInputChange}
                    />
                </div>

            </div>
            <label>
                Recurrence
                <input
                    type="checkbox"
                    checked={formData.recurrence}
                    onChange={handleRecurrenceCheckboxChange}
                />
            </label>
            {formData.recurrence && (
                <div className="recurrence-section">
                    <div className="recurrence-grid">
                        {formData.recurrenceDetails.map((recurrence, index) => (
                            <div className="recurrence-row" key={index}>
                                <div className="form-group">
                                    <label htmlFor={`recurrenceDate-${index}`}>Date</label>
                                    <input
                                        id={`recurrenceDate-${index}`}
                                        type="date"
                                        className="form-input"
                                        value={recurrence.recurrenceDate}
                                        onChange={(e) =>
                                            handleRecurrenceFieldChange(index, "recurrenceDate", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor={`recurrenceVisitDay-${index}`}>Visit Day</label>
                                    <input
                                        id={`recurrenceVisitDay-${index}`}
                                        className="form-input"
                                        placeholder="Visit Day"
                                        value={recurrence.recurrenceVisitDay}
                                        onChange={(e) =>
                                            handleRecurrenceFieldChange(index, "recurrenceVisitDay", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor={`recurrenceTime-${index}`}>Time</label>
                                    <input
                                        id={`recurrenceTime-${index}`}
                                        type="time"
                                        className="form-input"
                                        value={recurrence.recurrenceTime}
                                        onChange={(e) =>
                                            handleRecurrenceFieldChange(index, "recurrenceTime", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor={`recurrenceMeetingRoom-${index}`}>Meeting Room</label>
                                    <input
                                        id={`recurrenceMeetingRoom-${index}`}
                                        className="form-input"
                                        placeholder="Meeting Room"
                                        value={recurrence.recurrenceMeetingRoom}
                                        onChange={(e) =>
                                            handleRecurrenceFieldChange(index, "recurrenceMeetingRoom", e.target.value)
                                        }
                                    />
                                </div>
                                {
                                    index !== 0 &&
                                    <div
                                        onClick={() => removeRecurrenceRow(index)}
                                        className="remove-recurrence-btn"
                                    >
                                        <img src={trash} alt="trash" />
                                    </div>
                                }

                            </div>
                        ))}
                    </div>

                    <img style={{ cursor: "pointer" }} onClick={addRecurrenceRow} src={add} alt="add" />

                </div>
            )}


            <div className="form-actions">
                <button
                    onClick={(e) => handleOpen(e)}
                    className="submit-btn"
                    type="submit"
                >
                    Invite
                </button>
                <button
                    onClick={(e) => handleReset(e)}
                    className="submit-btn" type="reset">
                    Reset
                </button>
            </div>
            <VisitorModal isOpen={open} onClose={handleReset} visitor={formData} />
        </form>
    );
};

export default InviteForm;

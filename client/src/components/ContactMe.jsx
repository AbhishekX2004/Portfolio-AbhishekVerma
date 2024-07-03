import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const URL = process.env.REACT_APP_API_URL;

function ContactMe() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        subject: "",
        body: ""
    });

    const [responseMessage, setResponseMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${URL}/contact`, formData);
            setResponseMessage(response.data.message);
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 2000);
            setFormData({
                email: "",
                name: "",
                subject: "",
                body: ""
            });
        } catch (error) {
            setResponseMessage("Error submitting the form");
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 2000);
            console.error("Error submitting the form", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="input-container">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-style" />
                </div>
                <div className="input-container">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-style" />
                </div>
                <div className="input-container">
                    <label>Subject:</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="input-style" />
                </div>
                <div className="input-container">
                    <label>Body:</label>
                    <textarea name="body" value={formData.body} onChange={handleChange} required className="textarea-style" />
                </div>
                <button type="submit" className="button-style">Submit</button>
            </form>

            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="popup-style"
                    >
                        {responseMessage}
                        <motion.div
                            initial={{ width: "100%" }}
                            animate={{ width: 0 }}
                            transition={{ duration: 2, ease: "linear" }}
                            className="time-bar-style"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ContactMe;

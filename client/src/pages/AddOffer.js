import React, { useState } from "react";
import axios from "axios";
import "./AddOffer.css";

const AddOffer = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [platform, setPlatform] = useState("");
    const [message, setMessage] = useState("");

    const handleAddOffer = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/offers/addnew", {
                title,
                description,
                price,
                platform,
            });

            setMessage(response.data.message);
            setTitle("");
            setDescription("");
            setPrice("");
            setPlatform("");
        } catch (error) {
            setMessage("❌ Error adding offer");
        }
    };

    return (
        <div className="offer-container">
            <h2>Add New Offer</h2>
            <form onSubmit={handleAddOffer}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <input type="text" placeholder="Platform" value={platform} onChange={(e) => setPlatform(e.target.value)} required />
                <button type="submit">Add Offer</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default AddOffer;

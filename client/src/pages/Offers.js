import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Offers.css"; // استيراد ملف الـ CSS

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/offers");
                setOffers(response.data);
            } catch (err) {
                setError("خطأ في جلب العروض");
            } finally {
                setLoading(false);
            }
        };

        fetchOffers();
    }, []);

    if (loading) return <p className="offers-container">جارٍ تحميل العروض...</p>;
    if (error) return <p className="offers-container">{error}</p>;

    return (
        <div className="offers-container">
            <h2>العروض المتاحة</h2>
            {offers.map((offer) => (
                <div key={offer._id} className="offer-card">
                    <p className="offer-title">{offer.title}</p>
                    <p className="offer-description">{offer.description}</p>
                    <p className="offer-price">السعر: {offer.price} جنيه</p>
                    <p className="offer-platform">المنصة: {offer.platform}</p>
                </div>
            ))}
        </div>
    );
};

export default Offers;

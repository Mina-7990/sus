const Offer = require('../models/offerModel');

// جلب جميع العروض
const getOffers = async (req, res) => {
    try {
        const offers = await Offer.find();
        res.json(offers);
    } catch (error) {
        res.status(500).json({ message: 'خطأ في جلب العروض', error });
    }
};

// إضافة عرض جديد
const addOffer = async (req, res) => {
    try {
        const { title, description, price, platform } = req.body;
        if (!title || !description || !price || !platform) {
            return res.status(400).json({ message: 'يرجى ملء جميع الحقول' });
        }

        const newOffer = new Offer({ title, description, price, platform });
        await newOffer.save();

        res.status(201).json({ message: 'تمت إضافة العرض بنجاح', offer: newOffer });
    } catch (error) {
        res.status(500).json({ message: 'خطأ في إضافة العرض', error });
    }
};

module.exports = { getOffers, addOffer };

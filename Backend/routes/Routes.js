const express = require('express');
const router = express.Router();
const { addOffer, getOffers } = require('../controllers/offerController'); 

router.get('/', getOffers);   // جلب العروض
router.post('/addnew', addOffer);   // إضافة عرض جديد

module.exports = router;

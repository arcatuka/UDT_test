const express = require('express')
const router = express.Router();

const agencyController = require('../controller/agency.controller')
router.post('/personal',agencyController.postPersonal)
router.post('/billing',agencyController.postBilling)
router.post('/product',agencyController.postProduct)
router.post('/transaction',agencyController.postTransaction)
module.exports = router;
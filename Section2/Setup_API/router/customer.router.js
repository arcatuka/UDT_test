const express = require('express')
const router = express.Router();

const customerController = require('../controller/customer.controller')
router.post('/personal',customerController.postPersonal)
router.post('/billing',customerController.postBilling)
router.post('/cart',customerController.postCart)
router.post('/transaction',customerController.postTransaction)

module.exports = router;
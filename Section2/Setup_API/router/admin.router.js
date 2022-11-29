const express = require('express')
const router = express.Router();

const adminController = require('../controller/admin.controller')
router.get('/',adminController.readAgency)
router.post('/',adminController.createAgency)
router.patch('/',adminController.updateAgency)
router.delete('/:id',adminController.deleteAgency)

module.exports = router;
const express = require('express')
const router = express.Router();

const agencyController = require('../controller/admin.controller')
router.get('/',agencyController.getAllAgency)
router.post('/',agencyController.postAgency)
router.patch('/',agencyController.patchAgency)
router.delete('/:id',agencyController.deleteAgency)

module.exports = router;
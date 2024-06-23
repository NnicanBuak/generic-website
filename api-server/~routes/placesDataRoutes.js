const express = require('express');
const router = express.Router();
const dataController = require('../~controllers/placesDataController');
const authToken = require('../~middleware/authToken');

router.get('/data', dataController.getData);
router.post('/data', authToken, dataController.saveData);

module.exports = router;

const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const authenticateToken = require('../middleware/authenticateToken');

router.get('/data', dataController.getData);
router.post('/data', authenticateToken, dataController.saveData);

module.exports = router;

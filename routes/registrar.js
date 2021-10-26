var express = require('express');
var router = express.Router();
const registrarController = require('../controllers/registrarController');

/* GET registrar page. */
router.get('/',  registrarController.viewForm)

module.exports = router;
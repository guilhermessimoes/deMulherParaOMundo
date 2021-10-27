var express = require('express');
var router = express.Router();
const cadastroMulherController = require('../controllers/cadastroMulherController');

/* GET registrar page. */
router.get('/',  cadastroMulherController.viewForm);

module.exports = router;
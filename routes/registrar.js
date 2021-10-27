var express = require('express');
var router = express.Router();
const registrarController = require('../controllers/registrarController');
const { loginValidator, esqueceuLoginValidator, createLoginValidator } = require('../middlewares/registrarMiddleware');

/* GET registrar page. */
router.get('/',  registrarController.viewForm)
router.post('/', loginValidator, registrarController.loginPost)


module.exports = router;
var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');
const { loginValidator, esqueceuLoginValidator, createLoginValidator } = require('../middlewares/loginMiddleware');

/* GET registrar page. */
router.get('/', loginController.viewLogin)
router.post('/', loginValidator, loginController.login)
router.get('/registrar', loginController.viewRegistrar)
router.post('/registrar', createLoginValidator, loginController.registrar)


module.exports = router;
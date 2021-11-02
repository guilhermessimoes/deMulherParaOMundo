
var express = require('express');
var router = express.Router();
const multer  = require('multer');
const mulherController = require('../controllers/mulherController');
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, res, cb) =>{
        cb(null, "./public/data/uploads")
    },
    filename:  (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })
const { cadastrarMulherValidator} = require('../middlewares/cadastrarMulherMiddleware');

router.get('/', mulherController.listarMulheres)
router.post('/cadastroMulher', upload.single('imagem'), cadastrarMulherValidator, mulherController.cadastrarMulher)
router.get('/cadastroMulher', mulherController.viewForm)

module.exports = router;

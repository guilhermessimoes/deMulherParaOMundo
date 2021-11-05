var { check } = require("express-validator");

const cadastrarMulherValidator = [
    check("nome").isLength({min:3, max:40}).withMessage("O campo nome tem que conter no mínimo 3 carcterer."),
    check("data_nascimento").notEmpty().withMessage("O campo data de nascimento é obrigatório."),
    check("descricao").notEmpty().withMessage("O campo descricao é obrigatório."),
    check("link").notEmpty().withMessage("O campo link é obrigatório."),
    check("genero").notEmpty().withMessage("O campo genero é obrigatório."),
    check("pais").notEmpty().withMessage("O campo pais é obrigatório."),
    check("imagem").notEmpty().withMessage("O campo imagem é obrigatório."),
   // check("email").notEmpty().withMessage("O campo imagem é obrigatório."),
]

module.exports = {cadastrarMulherValidator}
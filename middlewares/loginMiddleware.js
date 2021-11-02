var { check } = require("express-validator");

const loginValidator = [
    check("email").isEmail().notEmpty().withMessage("O campo email é obrigatório."),
    check("senha").notEmpty().withMessage("O campo senha é obrigatório.")
];

const esqueceuLoginValidator = [
    check("email").isEmail().notEmpty().withMessage("O campo email é obrigatório.")
];

const createLoginValidator = [
    check("nome").isLength({min:3, max:40}).withMessage("O campo nome tem que conter no mínimo 3 carcterer."),
    check("email").isEmail().notEmpty().withMessage("O campo email é obrigatório."),
    check("senha").notEmpty().withMessage("O campo senha é obrigatório."),
]

module.exports = {loginValidator, createLoginValidator, esqueceuLoginValidator}
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const db = require("../models");

const registrarController = {
    viewLogin: (req, res) => {      
        res.render('login')
    },

    login: (req, res) => {
        let listaDeErros = validationResult(req)
        if(!listaDeErros.isEmpty()){
            const alert = listaDeErros.array()
            res.render("login", {alert: alert})
        }
        const email = req.body.email;
        const senha = req.body.senha;

        const usuarioLogado = db.Usuario.findAll((Usuario)=>Usuario.email == email && bcrypt.compareSync(senha, Usuario.senha)) 
        if (usuarioLogado != null) {
            req.session.usuario_logado= true
            res.redirect("/")
            console.log(usuarioLogado)
        }else{
            res.render("login")
        }
    },

    viewRegistrar: (req, res) => {      
        res.render('registrar')
    },

    registrar: async function(req, res){
        let listaDeErros = validationResult(req)
        if(!listaDeErros.isEmpty()){
            const alert = listaDeErros.array()
            res.render("registrar", {alert: alert})
        }

        const nomeUsuario = req.body.nome
        const emailUsuario = req.body.email
        const senhaUsuario = req.body.senha

        console.log(req)

        await db.Usuario.create({
            nome: nomeUsuario,
            email: emailUsuario,
            senha: senhaUsuario
        })

        await req.flash('success', 'Cadastrado com sucesso')

        res.redirect("login")
    },
}

module.exports = registrarController
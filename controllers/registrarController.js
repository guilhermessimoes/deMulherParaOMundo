const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const registrarController = {
    viewForm: (req, res) => {      
        res.render('registrar')
    },

    loginPost: (req, res) => {
        let listaDeErros = validationResult(req)
        if(!listaDeErros.isEmpty()){
            const alert = listaDeErros.array()
            res.render("registrar", {alert: alert})
        }
        const email = req.body.email;
        const password = req.body.password;

        const usuarioLogado = usuarios.find((usuario)=>usuario.email == email && bcrypt.compareSync(password, usuario.password)) 
        if (usuarioLogado != null) {
            req.session.usuario_logado= true
            res.redirect("/")
            console.log(usuarioLogado)
        }else{
            res.render("registrar")
        }
    },
}

module.exports = registrarController
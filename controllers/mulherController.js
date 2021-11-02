const {validationResult} = require("express-validator");
const db = require("../models")

const mulherController = {
    viewForm: (req, res)=>{      
         res.render("cadastroMulher")
    },

    listarMulheres: async function(req, res){
        const cadastroMulherRows = await db.Mulher.findAll();
        const messages = await req.consumeFlash('success')
        console.log(messages)
         res.render("index", {
             mulheres: cadastroMulherRows,
             messages: messages
         })
    },

    cadastrarMulher: async function(req, res){
        let listaDeErros = validationResult(req)
        if(!listaDeErros.isEmpty()){
            const alert = listaDeErros.array()
            console.log(alert)
            res.render("cadastroMulher", {alert: alert})
            return
            
        }
        const nomeMulher = req.body.nome
        const sobrenomeMulher = req.body.sobrenome
        const paisMulher = req.body.pais
        const generoMulher = req.body.genero
        const linkMulher = req.body.link
        const descricaoMulher = req.body.descricao
        const imagemMulher = req.file.filename
        const data_nascimentoMulher = req.body.data_nascimento

        await db.Mulher.create({
            nome: nomeMulher,
            sobrenome: sobrenomeMulher,
            pais: paisMulher,
            genero: generoMulher,
            link: linkMulher,
            descricao: descricaoMulher,
            imagem: imagemMulher,
            data_nascimento: data_nascimentoMulher
        })

        await req.flash('success', "Registro criado com sucesso")

        res.redirect("/")
    },

    editar: async function (req, res) {
        const idMulher = req.params.id;
        const mulherEncontrada = await db.Usuario.findByPk(idMulher)
        const formUrl = `/editar/${idMulher}`
    },

    excluir: async function (req, res) {
        const idMulher = req.params.id;
        
        await db.Mulher.destroy({where: {id: idMulher}})
        res.redirect("/")
    }

    
}

module.exports = mulherController;
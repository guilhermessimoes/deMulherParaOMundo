const {validationResult} = require("express-validator");
const db = require("../models")

const mulherController = {
    listarMulheres: async (req, res)=>{        
        const cadastroMulherRows = await db.Mulher.findAll();   
        const messages = await req.consumeFlash('success')
        console.log(messages)
         res.render("index", {
             mulheres: cadastroMulherRows,
             messages: messages
         })
    },

    cadastrarMulher: (req,res) => {
        res.render("cadastroMulher", {formAction:"/cadastroMulher", buttonMessage: "Cadastrar", mulher:{}})
    },

    acaoCadastrarMulher: async (req, res)=>{
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

    editar: async (req, res)=> {
        const mulherEncontrada = await db.Mulher.findByPk(req.params.id);

        mulherEncontrada.dataFormatada = `${mulherEncontrada.data_nascimento.getFullYear()}-${('0' + mulherEncontrada.data_nascimento.getMonth() + 1).slice(-2)}-${('0' + (mulherEncontrada.data_nascimento.getDate())).slice(-2)}`;
        console.log(mulherEncontrada);

        res.render("cadastroMulher", {
            formAction:`/alterar/${req.params.id}`,
            buttonMessage: "Salvar",
            mulher: mulherEncontrada
        });

    },

    acaoEditar: async (req,res) =>{
        let listaDeErros = validationResult(req)
        if(!listaDeErros.isEmpty()){
            const mulherEncontrada = await db.Mulher.findByPk(req.params.id);
            mulherEncontrada.dataFormatada = `${mulherEncontrada.data_nascimento.getFullYear()}-${('0' + mulherEncontrada.data_nascimento.getMonth() + 1).slice(-2)}-${('0' + (mulherEncontrada.data_nascimento.getDate())).slice(-2)}`;

            const alert = listaDeErros.array()
            console.log(alert)

            res.render("cadastroMulher", {alert: alert, formAction:`/alterar/${req.params.id}`,
            buttonMessage: "Salvar", mulher: mulherEncontrada})
            return            
        }

        const mulherObj = { 
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            pais: req.body.pais,
            genero: req.body.genero,
            link: req.body.link,
            descricao: req.body.descricao,
            data_nascimento: req.body.data_nascimento
        }

        await db.Mulher.update(mulherObj, {where: {id: req.params.id}})

        await req.flash('success', "Registro editado com sucesso")

        res.redirect("/")
    },

    excluir: async (req, res)=> {
        const idMulher = req.params.id;
        
        await req.flash('success', "Registro excluido com sucesso")
        await db.Mulher.destroy({where: {id: idMulher}})
        res.redirect("/")
    }

    
}

module.exports = mulherController;
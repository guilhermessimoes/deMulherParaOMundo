
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('mulheres', { 
            id: {type: Sequelize.DataTypes.INTERGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false},
            nome: {type: Sequelize.DataTypes.STRING(40), allowNull: false},
            sobrenome: {type: Sequelize.DataTypes.STRING(400), allowNull: false},
            data_nascimento: {type: Sequelize.DataTypes.DATE, allowNull: false},
            link: {type: Sequelize.DataTypes.STRING(250), allowNull: true},
            descricao: {type: Sequelize.DataTypes.STRING(400), allowNull: false},
            genero: {type: Sequelize.DataTypes.STRING(40), allowNull: false},
            pais: {type: Sequelize.DataTypes.STRING(20), allowNull: false},
            imagem: {type: Sequelize.DataTypes.STRING(400), allowNull: false},
            createdAt: {type: Sequelize.DataTypes.DATE},
            updatedAt: {type: Sequelize.DataTypes.DATE},
            deletedAt: {type: Sequelize.DataTypes.DATE}
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('mulheres')
    }
}

//Comando para exetuar no terminal UP criar o down dropa a tabela. O migrations cria a estrutura. 
//Digite esse comando no terminal para dar o UP-> sequelize db:migrate
//Digite esse comando no terminal para dar o down -> sequelize db:migrate:undo
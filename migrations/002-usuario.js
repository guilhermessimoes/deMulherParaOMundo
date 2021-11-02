module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('usuarios', { 
            id: {type: Sequelize.DataTypes.INTERGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false},
            nome: {type: Sequelize.DataTypes.STRING(40), allowNull: false},
            email: {type: Sequelize.DataTypes.STRING(40), allowNull: false},
            senha: {type: Sequelize.DataTypes.STRING(400), allowNull: false},
            createdAt: {type: Sequelize.DataTypes.DATE},
            updatedAt: {type: Sequelize.DataTypes.DATE},
            deletedAt: {type: Sequelize.DataTypes.DATE}
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('usuarios')
    }
}
//Comando para exetuar no terminal UP criar o down dropa a tabela. O migrations cria a estrutura. 
//Digite esse comando no terminal para dar o UP-> sequelize db:migrate
//Digite esse comando no terminal para dar o down -> sequelize db:migrate:undo

module.exports = (sequelize, DataTypes) =>{
    const Mulher = sequelize.define("Mulher", {
        nome: DataTypes.STRING(40),
        sobrenome: DataTypes.STRING(40),
        pais: DataTypes.STRING(20),
        genero: DataTypes.STRING(40),
        link: DataTypes.STRING(250),
        descricao: DataTypes.STRING(400),
        imagem: DataTypes.STRING(400),
        data_nascimento: DataTypes.DATE
    },{
        tableName: "mulheres",
        timestamps: true,
        paranmoid: true
    });
    return Mulher
}
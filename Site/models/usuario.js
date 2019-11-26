'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idCliente: {
			field:"idUsuario",
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeUsuario: {
			field:"nomeUsuario",
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field:"email",
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field:"senha",
			type: DataTypes.INTEGER,
			allowNull: false
		},
		dataNascimento: {
			field:"dataNascimento",
			type: DataTypes.DATE,
			allowNull: false
		},
		estiloFavorito: {
			field:"estiloFavorito",
			type: DataTypes.STRING,
			allowNull: false
		},
		imgUsuario: {
			field:"imgUsuario",
			type: DataTypes.STRING,
			allowNull: false
		},
	}, 
	{
		tableName: 'Usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};

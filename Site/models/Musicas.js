'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Musicas',{	
		idMusica: {
			field:"idMusica",
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		fkUsuario: {
			field:"fkUsuario",
			type: DataTypes.STRING,
			allowNull: false
		},
		nomeMusica: {
			field:"nomeMusica",
			type: DataTypes.STRING,
			allowNull: false
		},
		estiloMusica: {
			field:"estiloMusica",
			type: DataTypes.STRING,
			allowNull: false
		},
		album: {
			field:"album",
			type: DataTypes.STRING,
			allowNull: false
		},
		genero: {
			field:"genero",
			type: DataTypes.STRING,
			allowNull: false
		},
		Musica: {
			field:"Musica",
			type: DataTypes.STRING,
			allowNull: false
		},
	}, 
	{
		tableName: 'Musicas', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Musicas;
};

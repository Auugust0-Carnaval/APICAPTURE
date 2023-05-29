const { Model, DataTypes } = require('sequelize');
const sequelize = require('./Server.js'); // Importe a instância do Sequelize já configurada

class Photo extends Model {}

Photo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Img: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
  },
  {
    sequelize,
    modelName: 'Photo'
  }
);

Photo.sync()
  .then(() => {
    console.log('Tabela de fotos criada com sucesso.');
  })
  .catch((error) => {
    console.error('Falha na criação da tabela de fotos:', error);
  });

module.exports = Photo;

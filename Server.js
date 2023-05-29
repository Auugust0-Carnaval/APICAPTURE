const Sequelize = require('sequelize');

const sequelize = new Sequelize('Capture', null, null, {
  dialect: 'sqlite',
  storage: './data/database.sqlite'
});

// Testar a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Falha na conexão com o banco de dados:', error);
  });

module.exports = sequelize;

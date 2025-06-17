require('dotenv').config()

const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
     dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    }
})


sequelize.authenticate()
    .then(() => console.log("Conectado ao banco de dados"))
    .catch((error) => console.log("Erro ao conectar ao banco de dados " + error))

module.exports = { Sequelize, sequelize }
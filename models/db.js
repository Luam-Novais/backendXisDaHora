require('dotenv').config()

const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("postgresql://xis-da-hora-db_owner:npg_pjY4JXztEF1w@ep-damp-wildflower-acjs20qd-pooler.sa-east-1.aws.neon.tech/xis-da-hora-db?sslmode=require", {
    dialect: "postgres",
     dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
})


sequelize.authenticate()
    .then(() => console.log("Conectado ao banco de dados"))
    .catch((error) => console.log("Erro ao conectar ao banco de dados " + error))

module.exports = { Sequelize, sequelize }
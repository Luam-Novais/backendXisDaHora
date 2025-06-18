require('dotenv').config()

const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("postgresql://postgres:Luampabl014!@db.szxieyvbgmyhvbzakgev.supabase.co:5432/postgres", {
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
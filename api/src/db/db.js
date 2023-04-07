import { Sequelize } from 'sequelize'
import 'dotenv/config'
//puerto, pass, 
// variables de entonrno

const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUserName = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

// coneecion  a BD
// instancia deu na clse sequelize
const conn = new Sequelize(dbName, dbUserName, dbPassword, {
    host: dbHost,
    dialect: "mysql",
    port: dbPort
})

// autentica la coneccion si no da  error
try {
    await conn.authenticate()
    console.log('conexion establecida correctamente')
} catch (error) {
    console.log('error', error)
}

export default conn
import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";
import conn from "./db/db.js";
const app = express(); // te trae todos los metodos de espress
app.use(express.json()) //es un middleware peticiones se leen en formt json
app.use((express.urlencoded({ extend: true }))) // te permite interpretar los datos de los formularios los decodifica y los lee 
app.use(morgan("tiny")) // te da la info de las peticiones que estas haciedno el tiny es el formato, post, crete.....
    // app.use('/api', (req, res) => {
    // res.send("holaaaa mundi")
    // }) // es mi ruta  para los endpoints req= solicitudes  ()convenciones
    //llama al index de mis rutas
app.use('/api', routes)
    // metodo de la conn que se va sincornizar
    // metdoo de instancia
    // force buscar en sequelize

await conn.sync({ force: false }).then(() => {
    app.listen(8080, () => { console.log("server listo") })
})
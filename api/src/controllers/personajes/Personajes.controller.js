// import modelo aqui(uso de los modelos de sequelize)
import { Personaje } from "../../models/index.js"
class Personajes {

    static obtenerPersonajes(req, res) {
        res.status(200).send('Obtener todos los personajes')
    }
    static obtenerPersonajeEspecifico(req, res) {
        res.status(200).send('Personaje Especifico')
    }
    static crearPersonajess(req, res) {
        res.status(201).send('crear Personajes')
    }
    static actualizarPersonajes(req, res) {
        res.status(200).send('Actualizar Personajes')
    }
    static eliminarPersonajes(req, res) {
        res.status(200).send('Eliminar Personajes')
    }



}

export default Personajes
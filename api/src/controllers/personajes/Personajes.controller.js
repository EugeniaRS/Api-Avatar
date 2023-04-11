// import modelo aqui(uso de los modelos de sequelize)
import { Personaje } from "../../models/index.js"
class Personajes {

    static obtenerPersonajes(req, res) {
        res.status(200).send('Obtener todos los personajes')
    }
    static obtenerPersonajeEspecifico(req, res) {
            res.status(200).send('Personaje Especifico')
        }
        // se crear con la documentacion de sequelize
    static async crearPersonajess(req, res) {
        /*   res.status(201).send('crear Personajes') */
        console.log('RESUKTADOS', req.body)
        try {
            const { nombre, biografia, imagen, idClase } = req.body
                // campos
            const results = await Personaje.create({
                nombre,
                biografia,
                imagen,
                idClase
            })
            if (!results) throw new Error("La clase Personaje no ha sido creada", { code: 500 })





            res.status(201).send({
                success: true,
                message: 'Operacion exitosa',
                results
            })

        } catch (error) {
            res.status(error.code || 500).send({
                success: false,
                message: error.message,
            })

        }

    }
    static actualizarPersonajes(req, res) {
        res.status(200).send('Actualizar Personajes')
    }
    static eliminarPersonajes(req, res) {
        res.status(200).send('Eliminar Personajes')
    }



}

export default Personajes
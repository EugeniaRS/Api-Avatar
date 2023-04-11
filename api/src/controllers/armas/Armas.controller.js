// import moduls
import { Arma } from "../../models/index.js"


class Armas {

    static obtnerArma(req, res) {
        res.status(200).send('Obtener Arma')
    }

    static obtenerPorArma(req, res) {
        res.status(200).send('Obtener por Arma especifica')
    }
    static async crearArma(req, res) {
        /*  res.status(201).send('Crear arma') */
        try {
            const { nombre, descripcion } = req.body
            const results = await Arma.create({
                nombre,
                descripcion
            })
            if (!results) throw new Error("La clase no ha sido creada", { code: 500 })
            console.log(results)
            res.status(201).send({
                // success
                success: true,
                message: 'operacion exitosa',
                results
            })


        } catch (error) {
            res.status(error.code || 500).send({
                success: false,
                message: error.message,
            });
        }
    }
    static actualizarArma(req, res) {
        res.status(200).send('Actualizar arma')
    }
    static eliminarArma(req, res) {
        res.status(200).send('Eliminar arma')
    }

}

export default Armas
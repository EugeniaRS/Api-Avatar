// import moduls
import { Arma } from "../../models/index.js"


class Armas {

    static async obtnerArma(req, res) {
        /*     res.status(200).send('Obtener Arma') */
        try {
            const results = await Arma.findAll({
                attributes: [
                    'nombre'
                ]
            });
            // ==0 es igual al length sin negacion 
            if (!results.length) throw new Error('No existen Armas')
            res.status(200).send({
                success: true,
                message: 'Se obtuvieron todas las Armas',
                results
            })

        } catch (error) {
            res.status(400).send({
                success: false,
                message: error.message
            })

        }
    }

    static async obtenerPorArma(req, res) {
        /*      res.status(200).send('Obtener por Arma especifica') */
        try {
            const { id } = req.params
            const results = await Arma.findOne({
                where: {
                    id
                }

            });
            if (!results) throw new Error('No se encontro por arma')
            res.status(200).send({
                success: true,
                message: 'Arma especifica',
                results
            })
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error
            })
        }

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
    static async actualizarArma(req, res) {
        // res.status(200).send('Actualizar arma')

        try {
            const { id } = req.params
            const { nombre, descripcion } = req.body
            const results = await Arma.update({
                    nombre,
                    descripcion
                }, {
                    // es una condicion 
                    where: {
                        id
                    },
                }

            );
            res.status(200).send({
                success: true,
                message: 'Arma actualizada',
                results
            })
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error
            })
        }
    }
    static async eliminarArma(req, res) {
        // res.status(200).send('Eliminar arma')
        try {
            const { id } = req.params
            const results = await Arma.destroy({

                where: {
                    id
                },
            })
            res.status(200).send({
                success: true,
                message: 'Se elimino el arma',
                results
            })
        } catch (error) {
            res.status(400).send({
                success: false,
                message: error
            })
        }
    }

}

export default Armas
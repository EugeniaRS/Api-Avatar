// import modelo aqui(uso de los modelos de sequelize)
import { Arma, Clase, Personaje, PersonajeArma } from "../../models/index.js"
class Personajes {

    static async obtenerPersonajes(req, res) {


        try {
            const results = await Personaje.findAll({

                attributes: [
                    'nombre',
                    'biografia',
                    'imagen'
                ],

                include: [{
                        model: Clase,
                        attributes: [
                            'id',
                            'nombre'
                        ]
                    },

                    {

                        model: Arma,
                        attributes: [
                            'nombre'
                        ],
                        through: { attributes: [] }


                    }
                ]
            });
            res.status(200).send({
                message: 'Obtener todos los personajes',
                results
            })
            console.log(results)
        } catch (error) {
            res.status(400).send({
                    success: false,
                    message: error
                }


            )
        }

    }

    static async obtenerPersonajeEspecifico(req, res) {

            try {

                const { id } = req.params

                const results = await Personaje.findOne({
                    //    que significa el wheere
                    where: {
                        id
                    },

                    attributes: [
                        'id',
                        'nombre',
                        'biografia',
                        'imagen'
                    ],
                    include: [{
                        model: Clase,
                        attributes: [
                            'nombre'
                        ]
                    }, {
                        model: Arma,
                        attributes: [
                            'nombre'
                        ],
                        through: { attributes: [] }
                        // es la relacion , atravez de 
                    }, ],







                })


                res.status(200).send({ success: true, message: 'personaje especifico', results })
            } catch (error) {
                res.status(400).send({
                    success: false,
                    message: error
                })
            }


        }
        // se crear con la documentacion de sequelize
    static async crearPersonajess(req, res) {
        /*   res.status(201).send('crear Personajes') */
        console.log('RESUKTADOS', req.body)
        try {
            const { nombre, biografia, imagen, idClase, armas } = req.body
                // campos mi instancia results
                // await por que es asincrono
            const results = await Personaje.create({
                // le mandas los atributos
                nombre,
                biografia,
                imagen,
                idClase
            })

            if (!results) throw new Error("La clase Personaje no ha sido creada", { code: 500 })
                //  esmi instancia de ese personaje o objeto

            for (const arma of armas) {

                const personajeArma = await PersonajeArma.create({
                    // asigna un arma
                    idPersonaje: results.id,
                    idArma: arma
                })
                if (!personajeArma) throw new Error("no se pudo asignar")

            }


            console.log("armas", armas)
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
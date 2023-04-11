// import modelo aqui(uso de los modelos de sequelize)
//  si se exporta como objeto se importa destructurado
import { Clase } from "../../models/index.js"

// metodos de clase

class ClassPersonaje {
    //metodos de clase son los pasos 
    //clase Perrito tiene atributos
    //metodos son acciones

    //crear  acciones para dar de alta un personaje
    // static indica que son metodos de clase

    static ObtenerClasesPersonajes(req, res) {
        res.status(200).send('Obtener clasesPersonajes')
    }

    static ObtenerPorId(req, res) {
        res.status(200).send('Obtener por Id')
    }
    static async crearClase(req, res) {
        //  cuandos ea un insert, o update, o traer atributo, tiene que ser igual ala BD el nombre de los atributos
        try {
            const { nombre, descripcion } = req.body
                //   acceder alos campos
            const results = await Clase.create({
                    // respetar los nombres delos modelos
                    // esto es un atajo de javascript es lo mismo, trabjando ocn objetos
                    nombre,
                    descripcion: descripcion

                })
                // throw genera un error
            if (!results) throw new Error("La clase no ha sido creada", { code: 500 })
            console.log('Resultados', results)
            res.status(201).send({
                // success
                // me va mandar sucess para indicar el exito del mensaje
                success: true,
                message: 'operacion exitosa',
                results
            })

        } catch (error) {
            // controlar errores
            res.status(error.code || 500).send({
                success: false,
                message: error.message,
            });

        }



    }
    static ActualizarPersonajes(req, res) {
        res.status(200).send('Actualizar clases personajes')
    }
    static EliminarPersonajes(req, res) {
        res.status(200).send('Eliminar clase de personajess')
    }



}

export default ClassPersonaje
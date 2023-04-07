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
    static crearClase(req, res) {
        res.status(201).send('Crear Clase')
    }
    static ActualizarPersonajes(req, res) {
        res.status(200).send('Actualizar clases personajes')
    }
    static EliminarPersonajes(req, res) {
        res.status(200).send('Eliminar clase de personajess')
    }



}

export default ClassPersonaje
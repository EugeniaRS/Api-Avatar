// import moduls
import { Arma } from "../../models/index.js"


class Armas {

    static obtnerArma(req, res) {
        res.status(200).send('Obtener Arma')
    }

    static obtenerPorArma(req, res) {
        res.status(200).send('Obtener por Arma especifica')
    }
    static crearArma(req, res) {
        res.status(201).send('Crear arma')
    }
    static actualizarArma(req, res) {
        res.status(200).send('Actualizar arma')
    }
    static eliminarArma(req, res) {
        res.status(200).send('Eliminar arma')
    }

}

export default Armas
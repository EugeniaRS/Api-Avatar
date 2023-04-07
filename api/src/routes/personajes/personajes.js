import { Router } from "express"
import Personajes from "../../controllers/personajes/Personajes.controller.js";

const personajesRoutes = Router();
personajesRoutes.get('/', Personajes.obtenerPersonajes)
personajesRoutes.get('/:id', Personajes.obtenerPersonajeEspecifico)

// (req, res) => {
//     const { id } = req.params
//     console.log('este es el parametro', id);
//     res.status(200).send("< h1 > GetById < /h1>  ")
// }


personajesRoutes.post('/', Personajes.crearPersonajess)
personajesRoutes.put("/:id", Personajes.actualizarPersonajes)
personajesRoutes.delete('/:id', Personajes.eliminarPersonajes)


export default personajesRoutes;
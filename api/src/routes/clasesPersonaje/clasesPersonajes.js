// clase mago, guerrero, herrero, carpintero, alquimista,
// Siempre que se trabaje con MODULOS SIEMPRE SE PONE LA EXTENCION .JS
import { Router } from "express";
import ClassPersonaje from "../../controllers/classPersonajes/ClassPersonajes.controller.js";

const clasesPersonajes = Router();
//  encapsulamiento, No puedo acceder al metodo sin acceder ala clase
// Metodo de clase. para acceder a el llamas ala clase
clasesPersonajes.get("/", ClassPersonaje.ObtenerClasesPersonajes);
clasesPersonajes.get("/:id", ClassPersonaje.ObtenerPorId);
/* clasesPersonajes.get("/by_name/work/:name", (req, res) => {
    res.status(200).send('getBy name by_name')
}) */
clasesPersonajes.post("/", ClassPersonaje.crearClase)
clasesPersonajes.put("/:id", ClassPersonaje.ActualizarPersonajes)
clasesPersonajes.delete("/:id", ClassPersonaje.EliminarPersonajes)


export default clasesPersonajes
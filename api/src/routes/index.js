import { Router } from "express";
import personajesRoutes from "./personajes/personajes.js";
import armasRouter from "./armas/armas.js";
import clasesPersonajes from "./clasesPersonaje/clasesPersonajes.js";

//  
const routes = Router();
// 
routes.use('/personajes', personajesRoutes)
routes.use('/armas', armasRouter)
routes.use('/clases', clasesPersonajes)
export default routes;
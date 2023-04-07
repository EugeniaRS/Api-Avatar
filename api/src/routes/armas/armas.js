import { Router } from "express"
import Armas from "../../controllers/armas/Armas.controller.js";

const armasRouter = Router();

armasRouter.get("/", Armas.obtnerArma)
armasRouter.get("/:id", Armas.obtenerPorArma)
armasRouter.post("/", Armas.crearArma)
armasRouter.put("/:id", Armas.actualizarArma)
armasRouter.delete("/:id", Armas.eliminarArma)

export default armasRouter
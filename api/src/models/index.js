import Clase from "./clase/Clase.model.js";
import Arma from "./arma/Arma.model.js";
import PersonajeArma from "./personajeArma/PersonajeArma.model.js";
import Personaje from "./personaje/personaje.model.js";

// encapsula mis modelos
// provedor, contenedor
// Relacionar Clase con Personaje

// Relacion Personaje con clase
Personaje.belongsTo(Clase, {
    // CASCADE  recorre todos los registros alos que esten asociados al id
    // setnull solo el unico id que elimino
    // restict 

    foreignKey: 'idClase',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
        // restriccione
        // NonNull
        // onDelete, onUpdate
})

Clase.hasMany(Personaje, {
    foreignKey: 'idClase'
})


// relacion perosnaje con personajearma
// pertenece
PersonajeArma.belongsTo(Personaje, {
    foreignKey: 'idPersonaje',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Personaje.hasMany(PersonajeArma, {
    foreignKey: 'idPersonaje'

})


// Relacion Arma con  personajeArma
PersonajeArma.belongsTo(Arma, {
    foreignKey: 'idArma',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'

})
Arma.hasMany(PersonajeArma, {
    foreignKey: 'idArma'
})





export { Clase, Arma, PersonajeArma, Personaje }
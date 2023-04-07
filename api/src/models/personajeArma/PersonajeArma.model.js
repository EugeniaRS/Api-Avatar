import { DataTypes as Dt, Model } from 'sequelize'
import conn from '../../db/db.js'

class PersonajeArma extends Model {}

PersonajeArma.init({
    idPersonaje: {
        type: Dt.INTEGER
    },
    idArma: {
        type: Dt.INTEGER
    }
}, {
    sequelize: conn,
    modelName: 'PersonajeArma',
    timestamps: false


})

export default PersonajeArma
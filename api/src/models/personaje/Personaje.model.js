import { DataTypes as Dt, Model } from 'sequelize'
import conn from '../../db/db.js'

class Personaje extends Model {

}

Personaje.init({

    nombre: {
        type: Dt.STRING(20)
    },
    biografia: {
        type: Dt.TEXT,
        allowNull: true
    },
    imagen: {
        type: Dt.TEXT
    },
    idClase: {
        type: Dt.INTEGER
    }
    // llave forania siempre debe ser igual al id primary




}, {

    sequelize: conn,
    modelName: 'Personaje',
    timestamps: false

})


export default Personaje
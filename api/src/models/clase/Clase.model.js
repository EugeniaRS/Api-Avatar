// crear mi modelo 
import { DataTypes as Dt, Model } from 'sequelize'
import conn from '../../db/db.js'

// tabla
// 
class Clase extends Model {}


// llamar un metodod de clase
//  timestamps:false : no te va crear la hora del sys de cuando se crean etc
// metodo init me esta creando un modelo 
// text es para mayor de 250 

Clase.init({
    // definir campos de modelo
    nombre: {
        type: Dt.STRING(20),
        allowNull: false
    },
    descripcion: {
        type: Dt.TEXT,

    }

}, {
    sequelize: conn,
    modelName: 'Clase',
    timestamps: false
})


export default Clase
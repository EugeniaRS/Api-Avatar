import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class Arma extends Model {}

Arma.init({

    nombre: {
        type: Dt.STRING(20)
    },
    descripcion: {
        type: Dt.TEXT,
        allowNull: true
    }

}, {
    sequelize: conn,
    modelName: 'Arma',
    timestamps: false
})


export default Arma
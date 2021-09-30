function medio_Pago(sequelize, Datatypes){

    alias = 'medio_Pago';
  
    cols = {
      id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true},
      tipo: {type: Datatypes.STRING(50)},
    }
    
    config = {camelCase: false, timestamps: false, tableName:"medio_Pago"}; 
  
    const pago = sequelize.define(alias,cols,config)
  
    pago.associate = function (modelos){

      pago.hasMany(modelos.usuarios_Cursos, {   
        as: "usuarios_Cursos",
        foreignKey: "Medio_PagoFK"
      });
    }

    return pago;
  }
  
  
  module.exports = medio_Pago;
function uscursosData(sequelize, Datatypes){

    alias = 'usuarios_Cursos';
  
    cols = {
      id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true},
      UsuarioFK: {type: Datatypes.INTEGER(11)},
      CursosFK: {type: Datatypes.INTEGER(11)},
      Fecha: {type: Datatypes.DATE},
      Precio: {type: Datatypes.INTEGER(40)},
      Medio_PagoFK: {type: Datatypes.INTEGER(11)},
    }
  
    config = {camelCase: false, timestamps: false}; 
  
    const uscursos = sequelize.define(alias,cols,config)
  
    uscursos.associate = function (modelos){

    uscursos.belongsTo(modelos.medio_Pago, {
      as: "medio_Pago",
      foreignKey: "Medio_PagoFK"
      });
    }

    return uscursos;
    }
  
  
  module.exports = uscursosData;
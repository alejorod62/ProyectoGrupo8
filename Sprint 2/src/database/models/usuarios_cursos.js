function uscursosData(sequelize, Datatypes){

    alias = 'usuarios_Cursos';
  
    cols = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      UsuarioFK: {type: Datatypes.INTEGER(50)},
      CursosFK: {type: Datatypes.INTEGER},
      Fecha: {type: Datatypes.DATE},
      Precio: {type: Datatypes.INTEGER},
      Medio_PagoFK: {type: Datatypes.INTEGER},
    }
  
    config = {camelCase: false, timestamps: false}; 
  
    const uscursosData = sequelize.define(alias,cols,config)
  
    return uscursosData;
    }
  
  
  module.exports = uscursosData;
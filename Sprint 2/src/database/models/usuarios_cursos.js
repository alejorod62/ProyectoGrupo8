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
  
    const usarioscursos = sequelize.define(alias,cols,config)
  
    return usuarioscursos;
    }
  
  
  module.exports = uscursosData;
function profcursoData(sequelize, Datatypes){

    alias = 'profesor_Curso';
  
    cols = {
      id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true},
      UsuarioFK: {type: Datatypes.INTEGER(11)},
      CursosFK: {type: Datatypes.INTEGER(11)}
    }
  
    config = {camelCase: false, timestamps: false}; 
  
    const profcursoData = sequelize.define(alias,cols,config)
  
    return profcursoData;
    }
  
  
  module.exports = profcursoData;
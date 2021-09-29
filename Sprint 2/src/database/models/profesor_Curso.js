function profesor_Curso(sequelize, Datatypes){

    alias = 'profesor_Curso';
  
    cols = {
      id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true},
      UsuarioFK: {type: Datatypes.INTEGER(11)},
      CursosFK: {type: Datatypes.INTEGER(11)}
    }
  
    config = {camelCase: false, timestamps: false}; 
  
    const profesor_Curso = sequelize.define(alias,cols,config)
  
    return profesor_Curso;
    }
  
  
  module.exports = profesor_Curso;
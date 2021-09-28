function temas(sequelize, Datatypes){

    alias = 'temas';
  
    cols = {
      id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true},
      titulo: {type: Datatypes.STRING(50)},
      CursosFK: {type: Datatypes.INTEGER(11)},
    }
  
    config = {camelCase: false, timestamps: false}; 
  
    const temas = sequelize.define(alias,cols,config)


    temas.associate = function (modelos){

      temas.hasMany(modelos.cursos, {   
        as: "cursos",
        foreignKey: "TemasFK"
      });
    }

    return temas;
    }
  
  
  module.exports = temas;
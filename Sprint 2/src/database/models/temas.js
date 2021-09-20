function temasData(sequelize, Datatypes){

    alias = 'temas';
  
    cols = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      titulo: {type: Datatypes.STRING(50)},
      CursosFK: {type: Datatypes.INTEGER},
    }
  
    config = {camelCase: false, timestamps: false}; 
  
    const temas = sequelize.define(alias,cols,config)

    /*
    temas.associate = function (modelos){

      temas.hasMany(modelos.cursos, {   
        as: "cursos",
        foreignKey: "CursosFK"
      });
    }
  */
    return temas;
    }
  
  
  module.exports = temasData;
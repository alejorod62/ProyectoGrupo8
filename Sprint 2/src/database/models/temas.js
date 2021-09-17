function temasData(sequelize, Datatypes){

    alias = 'temas';
  
    cols = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      titulo: {type: Datatypes.STRING(50)},
      CursosFK: {type: Datatypes.INTEGER},
    }
  
    config = {camelCase: false, timestamps: false}; 
  
    const temas = sequelize.define(alias,cols,config)
  
    return temas;
    }
  
  
  module.exports = temasData;
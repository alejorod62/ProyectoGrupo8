function pagosData(sequelize, Datatypes){

    alias = 'medio_Pago';
  
    cols = {
      id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true},
      tipo: {type: Datatypes.STRING(50)},
    }
    
  
    config = {camelCase: false, timestamps: false}; 
  
    const pagos = sequelize.define(alias,cols,config)
  
    return pagos;
  }
  
  
  module.exports = pagosData;
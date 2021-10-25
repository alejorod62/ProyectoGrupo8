function cursos(sequelize, Datatypes){

    alias = 'cursos';
  
    cols = {
      id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true},
      nombre: {type: Datatypes.STRING(50)},
      precio: {type: Datatypes.INTEGER(40)},
      nombreImagen: {type: Datatypes.STRING(100)},
      descripcion: {type: Datatypes.TEXT},
      horarios: {type: Datatypes.STRING(100)},
      duracion: {type: Datatypes.STRING(50)},
      requisitos: {type: Datatypes.STRING(200)},
      cuotas: {type: Datatypes.STRING(100)},
    }
    
  
    config = {camelCase: false, timestamps: false}; 
  
    const cursos = sequelize.define(alias,cols,config)

  cursos.associate = function (modelos){

    cursos.hasMany(modelos.temas, {
      as: "temas",
      foreignKey: "CursosFK"
      });

      cursos.belongsToMany(modelos.usuarios, {
        as: "usuarios",
        through: "usuarios_Cursos",   // tabla intermedia
        foreignKey: "UsuarioFK",  // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
        otherKey: "CursosFK",    // es el FK del otro modelo (en la tabla intermedia de la bd)
        timestamps: false
      });

      cursos.belongsToMany(modelos.usuarios, {
        as: "usuariosP",
        through: "profesor_Curso",   // tabla intermedia
        foreignKey: "UsuarioFK",  // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
        otherKey: "CursosFK",    // es el FK del otro modelo (en la tabla intermedia de la bd)
        timestamps: false
      });
    }    

    return cursos;
  }
  
  
  module.exports = cursos;
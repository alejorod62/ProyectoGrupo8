function usuariosData(sequelize, Datatypes){

    alias = 'usuarios';
  
    cols = {
      id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true},
      nombre: {type: Datatypes.STRING(30)},
      apellido: {type: Datatypes.STRING(50)},
      email: {type: Datatypes.STRING(50)},
      clave: {type: Datatypes.STRING(20)},
      telefono: { type: Datatypes.STRING(50)},
      direccion: {type: Datatypes.STRING(40)},
      ciudad: {type: Datatypes.STRING(40)},
      pais: {type: Datatypes.STRING(40)},
      nombreImagen: {type: Datatypes.STRING(100)},
      profesor: {type: Datatypes.DOUBLE(1)},
     }
  
    config = {camelCase: false, timestamps: false}; 
  
    const usuarios = sequelize.define(alias,cols,config)

    usuarios.associate = function (modelos){

      usuarios.belongsToMany(modelos.cursos, {
        as: "cursos",
        through: "cursos_usuarios",   // tabla intermedia
        foreignKey: "CursosFK",  // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
        otherKey: "usuarioFK",    // es el FK del otro modelo (en la tabla intermedia de la bd)
        timestamps: false
      });
      usuarios.belongsToMany(modelos.cursos, {
        as: "cursosP",
        through: "profesor_Curso",   // tabla intermedia
        foreignKey: "CursosFK",  // es el FK del modelo en el que estas (en la tabla intermedia de la bd)
        otherKey: "UsuarioFK",    // es el FK del otro modelo (en la tabla intermedia de la bd)
        timestamps: false
      });
    }
  
    return usuarios;
  }
  
  
  module.exports = usuariosData;
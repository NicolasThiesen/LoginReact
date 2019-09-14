
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users',{
      id:{
        allowNull:false,
        autoIncrement: true, 
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome:{
        allowNull:false,
        type: DataTypes.STRING,
      },
      email:{
        allowNull:false,
        type: DataTypes.STRING,
        unique: true,
      },
      senha:{
        allowNull:false,
        type: DataTypes.STRING,
      },
      createdAt:{
        allowNull:false, 
        type: DataTypes.DATE,
      },
      updatedAt:{
        allow:false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};

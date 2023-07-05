import { Sequelize, DataTypes as SequelizeDataTypes } from 'sequelize';

// const sequelize = require('./index');
export default (sequelize:Sequelize,dataTypes:typeof SequelizeDataTypes)=>{
  const User = sequelize.define(
    'User',
    {
      id: {
        autoIncrement: true,
        type: dataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      // Model attributes are defined here
      email: {
        type: dataTypes.STRING(20),
        allowNull: true,
      },
      phone: {
        type: dataTypes.STRING(255),
        allowNull: true,
      },
      otp: {
        type: dataTypes.STRING(5),
        allowNull: false
      },
      
    },
    {
      // Other model options go here
      // sequelize, // We need to pass the connection instance
      modelName: 'User', // We need to choose the model na
    //   timestamps: false,
    },
  );
  return User;
};

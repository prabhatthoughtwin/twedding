import { Sequelize, DataTypes as SequelizeDataTypes } from 'sequelize';

// const sequelize = require('./index');
export default (sequelize:Sequelize,dataTypes:typeof SequelizeDataTypes)=>{


    const request_status = sequelize.define('request_status', {
      id: {
        autoIncrement: true,
        type: dataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      sender_id: {
        type: dataTypes.INTEGER,
        allowNull: true,
      
      },
      reciever_id: {
        type: dataTypes.INTEGER,
        allowNull: true,
       
      },
      // Model attributes are defined here
    
      request_status: {
        type: dataTypes.ENUM('accepted','rejected','blocked','pending'),
        defaultValue: 'pending'
      },
      
      status: {
        type: dataTypes.ENUM('active','incactive'),
        allowNull: false
      },
     
    }, {
      // Other model options go here
      // sequelize, // We need to pass the connection instance
      modelName: 'request_status', // We need to choose the model na
    //   timestamps: false
   
    });
    return request_status;
    }
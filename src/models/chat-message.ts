import { Sequelize, DataTypes as SequelizeDataTypes } from 'sequelize';

// const sequelize = require('./index');
export default (sequelize:Sequelize,dataTypes:typeof SequelizeDataTypes)=>{

    const chat_message = sequelize.define('chat_message', {
      id: {
        autoIncrement: true,
        type: dataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      sender_id: {
        type: dataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      reciever_id: {
        type: dataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      // Model attributes are defined here
      body: {
        type: dataTypes.TEXT,
        allowNull: false
      },
     
      
      status: {
        type: dataTypes.ENUM('active','incactive'),
        allowNull: false
      },
     
    }, {
      // Other model options go here
      // sequelize, // We need to pass the connection instance
      modelName: 'chat_message', // We need to choose the model na
    //   timestamps: false
   
    });
    return chat_message;
    }
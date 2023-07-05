import { Sequelize, DataTypes as SequelizeDataTypes } from 'sequelize';

// const sequelize = require('./index');
export default (sequelize:Sequelize,dataTypes:typeof SequelizeDataTypes)=>{


    const chat_attachment = sequelize.define('chat_attachment', {
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
      attachment_url: {
        type: dataTypes.STRING(200),
        allowNull: false
      },
      photo: {
        type: dataTypes.STRING(200),
        // allowNull defaults to true
      },
      
      status: {
        type: dataTypes.ENUM('active','incactive'),
        allowNull: false
      },
     
    }, {
      // Other model options go here
      // sequelize, // We need to pass the connection instance
      modelName: 'chat_attachment', // We need to choose the model na
    //   timestamps: false
   
    });
    return chat_attachment;
    }
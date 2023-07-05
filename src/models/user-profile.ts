import { Sequelize, DataTypes as SequelizeDataTypes } from 'sequelize';

// const sequelize = require('./index');
export default (sequelize:Sequelize,dataTypes:typeof SequelizeDataTypes)=>{

const user_profile = sequelize.define('user_profile', {
  id: {
    autoIncrement: true,
    type: dataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
 
  // Model attributes are defined here
  name: {
    type: dataTypes.STRING(20),
    allowNull: false
  },
  dob: {
    type: dataTypes.DATE,
    // allowNull defaults to true
  },
  gender: {
    type: dataTypes.ENUM('Male','Female','Other'),
    allowNull: false
  },
  
  is_divorced: {
    type: dataTypes.BOOLEAN,
    defaultValue: false,
  },
  address: {
    type: dataTypes.STRING(200),
    allowNull: false
  },
  profile_pic: {
    type: dataTypes.STRING(255),
    allowNull: false
  },
  religion: {
    type: dataTypes.STRING(20),
    allowNull: false
  },
  education: {
    type: dataTypes.STRING(20),
    allowNull: false
  },
  country: {
    type: dataTypes.STRING(20),
    allowNull: false
  },
  status: {
    type: dataTypes.ENUM('active','incactive'),
    allowNull: false
  },
 
}, {
  // Other model options go here
  // sequelize, // We need to pass the connection instance
  modelName: 'user_profile', // We need to choose the model na
//   timestamps: false
indexes: [
  {
    name: "PRIMARY",
    unique: true,
    using: "BTREE",
    fields: [
      { name: "id" },
    ]
  },
  {
    name: "user_id",
    using: "BTREE",
    fields: [
      { name: "userId" },
    ]
  },
]
});
return user_profile;
}
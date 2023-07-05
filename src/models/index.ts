import { Sequelize, DataTypes, Model } from 'sequelize';
import createUserModel from './user';
import createUserProfileModel from './user-profile';
import createReqStsModel from './request-status';
import createChatMsgModel from './chat-message';
import createChatAttachModel from './chat-attachment';
import { host, user_name, password, database } from '../utils/constant';


const sequelize = new Sequelize(
  database as string,
  user_name as string,
  password,
  {
    dialect: 'postgres',
    timezone: '+05:30',
     host,

    logging: false, // Disable Query log in the console during development.
  },
//   {
//     pool: {
//       max: 1000,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   },
);

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


const db: { sequelize: Sequelize; [key: string]: any } = { sequelize };

db.user = createUserModel(sequelize, DataTypes);
db.user_profile = createUserProfileModel(sequelize, DataTypes);
db.request_status = createReqStsModel(sequelize, DataTypes);
db.chat_message = createChatMsgModel(sequelize, DataTypes);
db.chat_attachment = createChatAttachModel(sequelize, DataTypes);

db.user.hasOne(db.user_profile, { as: 'profile', foreignKey: 'userId' });
db.user_profile.belongsTo(db.user, { as: 'user', foreignKey: 'userId' });

db.sequelize.sync();
export default db;



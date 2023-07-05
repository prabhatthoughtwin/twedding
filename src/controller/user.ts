import { QueryTypes } from 'sequelize';
import db from '../models';
import {jwtService} from '../services/index';

export default {
  // eslint-disable-next-line consistent-return
  getAllUser: async () => {
    try {
       const User = db.user;
      const users = await User.findAll();
    const userData = []
    for (let i = 0; i < users.length; i++) {
        
        let usr = {
             id : users[i].dataValues.id,
             email : users[i].dataValues.email,
             phone : users[i].dataValues.phone,
        }
       userData.push(usr)
        // const id = users[i].dataValues.status;
        
    }

      return userData;
    } catch (error) {
      console.log('sqerror', error);
    }
  },
  loginUser: async (data:any) => {
    try {
       
       const User = db.user;
      const users = await User.findAll({
        where: {
          phone: data.request.phone,
          otp: data.request.otp
        }
      });
      const token = jwtService.signToken(users[0].dataValues.id);
        
        let userData = {
             id : users[0].dataValues.id,
             email : users[0].dataValues.email,
             phone : users[0].dataValues.phone,
             token:token
        }
    
        // const id = users[i].dataValues.status;
     
        
  

      return userData;
    } catch (error) {
      console.log('sqerror', error);
    }
  },
 
  
  signupUser: async (data:any) => {
    try {
        // console.log(data.request);
        const email = data.request.email;
        const phone = data.request.phone;
        const name = data.request.name;
        const dob = data.request.dob;
        const gender = data.request.gender;
        const otp = data.request.otp;
        const is_divorced = data.request.is_divorced;
        const address = data.request.address;
        const profile_pic = data.request.profile_pic;
        const religion = data.request.religion;
        const education = data.request.education;
        const country = data.request.country;
        const status = data.request.status;
        const User = db.user;
        const UserProfile = db.user_profile;
        const user = await User.create(
            {
                email,phone,
              profile: {
                name,
                dob,
                gender,
                otp,
                is_divorced,
                address,
                profile_pic,
                religion,
                education,
                country,
                status
              },
            },
            {
              include: [{ model: UserProfile, as: 'profile' }],
            }
          );
      console.log(user);
      
        
      return user;
    } catch (error) {
      console.log('sqerror', error);
    }
  },

  // eslint-disable-next-line consistent-return
//   updateTask: async (request) => {
//     try {
//       console.log(request);
//       //  const Task = db.task;
//       // const users = await Task.findAll();
//       const data = await db.sequelize.query(
//         'UPDATE "Tasks" SET name=?,description=?,isactive=? WHERE id=?',
//         {
//           replacements: [
//             request.name,
//             request.description,
//             request.isActive,
//             request.id,
//           ],
//           type: QueryTypes.UPDATE,
//         },
//       );
//       //  console.log("users",users);

//       return true;
//     } catch (error) {
//       console.log('sqerror', error);
//     }
//   },
  // eslint-disable-next-line consistent-return
//   removeTask: async (request) => {
//     try {
//       //  const Task = db.task;
//       // const users = await Task.findAll();
//       const data = await db.sequelize.query('DELETE FROM "Tasks" WHERE id=?', {
//         replacements: [request.id],
//         type: QueryTypes.DELETE,
//       });
//       //  console.log("users",users);

//       return true;
//     } catch (error) {
//       console.log('sqerror', error);
//     }
//   },
};

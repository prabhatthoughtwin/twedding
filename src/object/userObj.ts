
import userController from '../controller/user';

export default{
getAllObj:async (_:null, callback:Function) => {
    try {
      
        const tasks3:any = await userController.getAllUser();
        console.log(tasks3);
        
        if (tasks3.length > 0) {
          callback(null, { users: tasks3 });
        } else {
          callback({
            Message: 'Not found',
          });
        }
      } catch (err) {
        console.log(err);
      }
},
createUser: async (call:Object, callback:Function) => {
        try {
            const tasks3:any = await userController.signupUser(call);
            // console.log(tasks3);
            
            if (tasks3) {
              callback(null, { User: tasks3 });
            } else {
              callback({
               
                details: 'Not found',
              });
            }
          } catch (err) {
            console.log(err);
          }
    },
    getObj: async (call:Object, callback:Function) => {
      try {

          const User:any = await userController.loginUser(call);
          // console.log(User);
          
          if (User) {
            callback(null,  User);
          } else {
            callback({
             
              details: 'Not found',
            });
          }
        } catch (err) {
          console.log(err);
        }
  },

}

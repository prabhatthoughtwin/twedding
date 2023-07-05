import userFunction from '../object/userObj'

const userObj = {
    getAll:userFunction.getAllObj,
    get:userFunction.getObj,
    insert:userFunction.createUser,
   

   

    // update: (call:Object, callback:Function) => {
       
    //     try {
    //         const tasks3 = await getAllTask();
    //         if (tasks3.length > 0) {
    //           console.log('task1', tasks3);
    //           callback(null, { tasks1: tasks3 });
    //         } else {
    //           callback({
    //             code: grpc.status.NOT_FOUND,
    //             details: 'Not found',
    //           });
    //         }
    //       } catch (err) {
    //         console.log(err);
    //       }
       
    // },

    // remove: (call:Object, callback:Function) => {
    //     try {
    //         const tasks3 = await getAllTask();
    //         if (tasks3.length > 0) {
    //           console.log('task1', tasks3);
    //           callback(null, { tasks1: tasks3 });
    //         } else {
    //           callback({
    //             code: grpc.status.NOT_FOUND,
    //             details: 'Not found',
    //           });
    //         }
    //       } catch (err) {
    //         console.log(err);
    //       }
    // }
}
export default userObj
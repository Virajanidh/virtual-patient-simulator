import {historyTakingQTypes} from '../../Reducers/types';

// export const historyTakingActions = {
//     createTest
// };

export const createTest = (data) =>{

    return  (dispatch, getState, {getFirestore}) => {
        console.log('hi')
        const firestore =getFirestore();
        firestore.collection('test').add({
            ...data
        }).then(()=>{
            dispatch({ type: historyTakingQTypes.CREATE_CASE_Q,data })
        }).catch((err)=> {
            console.log('err')
        })
        
    }
}

// function createTest(data) {
//     return async (dispatch, getState, {getFirebase, getFirestore}) => {
//         try {
//             const firestore =getFirestore();
//                     firestore.collections('test').add({
//                         ...data
//                     }).then(()=>{
//                         dispatch({ type: historyTakingQTypes.CREATE_CASE_Q,data })
//                     }).catch((err)=> {
//                         console.log('err')
//                     })
//         } catch (error) {
//             dispatch(failure(error));
//         }
//     };

//     function success() {
//         return {type: historyTakingQTypes.CREATE_CASE_Q, data}
//     }

//     function failure(error) {
//        console.log("error at action")
//     }

// }
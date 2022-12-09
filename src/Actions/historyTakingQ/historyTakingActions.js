import {historyTakingQTypes} from '../../Reducers/types';

export const historyTakingActions = {
    addselectedQdata
};

// export const addselectedQdata = (data) =>{

//     return  (dispatch, getState, {getFirestore}) => {
//         console.log('hi')
//         const firestore =getFirestore();
//         firestore.collection('test').add({
//             ...data
//         }).then(()=>{
//             dispatch({ type: historyTakingQTypes.CREATE_CASE_Q,data })
//         }).catch((err)=> {
//             console.log('err')
//         })
        
//     }
// }

function  addselectedQdata(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: historyTakingQTypes.CREATE_CASE_Q,data}
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
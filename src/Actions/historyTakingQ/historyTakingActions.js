import {historyTakingQTypes} from '../../Reducers/types';

export const historyTakingActions = {
    addselectedQdata,
    addAllHTQdata,
    setSelectionOrder
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

function  addAllHTQdata(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
            dispatch(setCount(data))
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: historyTakingQTypes.ALLHISTORYTAKINGQ,data}
    }
    function setCount(data) {
        return {type: historyTakingQTypes.SETCOUNT,data}
    }

}

function  setSelectionOrder(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
           
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: historyTakingQTypes.SECTIONORDER,data}
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
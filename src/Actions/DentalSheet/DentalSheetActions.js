import {DentalSheetTypes} from '../../Reducers/types';

export const DentalSheetActions = {
    setcariesMarkDetails,
    setrestorationMarkDetails
};

function  setcariesMarkDetails(data){
    return async dispatch => {
        try {
            console.log('at cariesActions',data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: DentalSheetTypes.CARIES,data}
    }

}
function  setrestorationMarkDetails(data){
    return async dispatch => {
        try {
            console.log('at setrestorationMarkDetails',data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: DentalSheetTypes.RESTORATION,data}
    }

}




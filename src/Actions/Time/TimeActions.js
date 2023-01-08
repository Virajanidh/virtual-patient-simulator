import {timeTypes} from '../../Reducers/types';

export const TimeActions = {
    setStartTime
};

function  setStartTime(){
    return async dispatch => {
        try {
            
            let data=new Date()
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: timeTypes.STARTTIME,data}
    }

}






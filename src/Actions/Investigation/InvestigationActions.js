import {investTypes} from '../../Reducers/types';

export const InvestigationActions = {
   setRadioSelection
};

function  setRadioSelection(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: investTypes.RADIOSELECTION,data}
    }

}






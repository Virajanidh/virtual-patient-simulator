import {diagnosisTypes} from '../../Reducers/types';

export const DiagnosisActions = {
    setCorrectDiagnosisQ,
    setSelectedAnsForDQ,
    setDiagnosisAllQ,
    setWrongDiagnosisQ,
    setDiagnosisSubmit
};

function  setDiagnosisAllQ(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: diagnosisTypes.SETDIAGNOSISQ,data}
    }

}

function setSelectedAnsForDQ(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: diagnosisTypes.SELECTEDANSFORDQ,data}
    }
}

function setDiagnosisSubmit(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: diagnosisTypes.ISSUBMITDIAGNOSIS,data}
    }
}


function  setCorrectDiagnosisQ(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: diagnosisTypes.SETCORRECTDIAGNOSISQ,data}
    }

}

function  setWrongDiagnosisQ(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: diagnosisTypes.SETWRONGDIAGNOSISQ,data}
    }

}




import {scoreTypes} from '../../Reducers/types';

export const ScoreActions = {
    setDiagScore,
    setExamScore,
    setHisScore,
    setInvestScore
};

function  setDiagScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.DIAG_SCORE,data}
    }

}

function  setHisScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.HIST_SCORE,data}
    }

}
function  setExamScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.EXAM_SCORE,data}
    }

}
function  setInvestScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.INVEST_SCORE,data}
    }

}



import {examTypes} from '../../Reducers/types';

export const ExaminationActions = {
    setPerodetanlTools,
    setSubmitPerodetanlTools,
    setHardTissueTools,
    setSubmithardTissueTools,
    setSelectedRestorations,
    setSelectedCaries,
    clearCaries,
    clearResto,
    setPlaqueValue,
    setBleedingVal
};

function  setPerodetanlTools(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: examTypes.PERIODENTALTOOLS,data}
    }

}

function  setSubmitPerodetanlTools(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: examTypes.PERIO_SUBMIT,data}
    }

}

function  setHardTissueTools(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: examTypes.HARDTISSUETOOLS,data}
    }

}

function  setSubmithardTissueTools(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: examTypes.HARDTISSUE_SUBMIT,data}
    }

}

function  setSelectedCaries(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: examTypes.SELECTEDCARIES,data}
    }

}

function  setSelectedRestorations(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: examTypes.SELECTEDRESTORATIONS,data}
    }

}

function  clearCaries(){
    return async dispatch => {
        try {
            dispatch(success());
        } catch (error) {
            console.log(error)
        }
    };

    function success() {
        return {type: examTypes.CLEARCARIES}
    }

}


function  clearResto(){
    return async dispatch => {
        try {
            dispatch(success());
        } catch (error) {
            console.log(error)
        }
    };

    function success() {
        return {type: examTypes.CLEARRESTO}
    }

}

function  setPlaqueValue(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success() {
        return {type: examTypes.PLAQUEVAL,data}
    }

}


function  setBleedingVal(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success() {
        return {type: examTypes.BLEEDINGVAL,data}
    }

}






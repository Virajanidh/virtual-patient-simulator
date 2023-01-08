import { examTypes } from '../types';
const initialState = {
  selectedPerodentalTools: [],
  submit_perio_tools: false,
  submitedHardTissueTools: [],
  submit_hard_tools: false,
  cariesSelected: [],
  restorationsSelected: [],
  plaqueValue: '',
  bleedingValue: ''
};


const setCaries = (array2, item) => {
  console.log(array2)
  if (array2.length != 0) {
    for (let i = 0; i < array2.length; i++) {
      if (array2[i] == item) {
        return array2;
      }
    }
    return array2.concat(item)
  }
  else {
    return array2.concat(item)
  }

}

const setResto = (array2, item) => {
  console.log(array2)
  if (array2.length != 0) {
    for (let i = 0; i < array2.length; i++) {
      if (array2[i] == item) {
        return array2;
      }
    }
    return array2.concat(item)
  }
  else {
    return array2.concat(item)
  }

}


const ExaminationReducer = (state = initialState, action) => {
  switch (action.type) {
    case examTypes.PERIODENTALTOOLS:
      return {
        ...state,
        selectedPerodentalTools: action.data

      };
    case examTypes.PERIO_SUBMIT:
      return {
        ...state,
        submit_perio_tools: action.data

      };
    case examTypes.HARDTISSUETOOLS:
      return {
        ...state,
        submitedHardTissueTools: action.data

      };
    case examTypes.HARDTISSUE_SUBMIT:
      return {
        ...state,
        submit_hard_tools: action.data

      };
    case examTypes.SELECTEDCARIES:
      return {
        ...state,
        cariesSelected: setCaries(state.cariesSelected, action.data)

      };
    case examTypes.SELECTEDRESTORATIONS:
      return {
        ...state,
        restorationsSelected: setResto(state.restorationsSelected, action.data)

      };
    case examTypes.CLEARCARIES:
      return {
        ...state,
        cariesSelected: []

      };
    case examTypes.CLEARRESTO:
      return {
        ...state,
        restorationsSelected: []

      };
    case examTypes.PLAQUEVAL:
      return {
        ...state,
        plaqueValue: action.data

      };
    case examTypes.BLEEDINGVAL:
      return {
        ...state,
        bleedingValue:action.data

      };


    default:
      return state;
  }
}
export default ExaminationReducer;
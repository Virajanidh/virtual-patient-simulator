import {scoreTypes} from '../types'; 
  const initialState = {
    histScore:0,
    diagScore:0,
    examScore:0,
    investScore:0
  };

  const ScoreReducer = (state = initialState, action)=> {
    switch (action.type) {
        case scoreTypes.DIAG_SCORE :
            return {
                ...state,
                diagScore : action.data
            
          };
        case scoreTypes.EXAM_SCORE:
            return {
              ...state,
              examScore : action.data
              
            };
        case scoreTypes.INVEST_SCORE:
            return {
             ...state,
            investScore : action.data
                  
            }; 
        case scoreTypes.HIST_SCORE:
            return {
            ...state,
            histScore : action.data
                      
            };
      
      default:
        return state;
    }
  }
export default ScoreReducer;
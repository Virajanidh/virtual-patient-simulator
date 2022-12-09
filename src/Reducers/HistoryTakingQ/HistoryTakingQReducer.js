import {historyTakingQTypes} from '../types'; 
  const initialState = {
    selectedQdata:[]
  };

  const HistoryTakingQReducer = (state = initialState, action)=> {
    switch (action.type) {
      case historyTakingQTypes.CREATE_CASE_Q:
          return {
            selectedQdata : [...state.selectedQdata, action.data]
            
          };
      
      
      default:
        return state;
    }
  }
export default HistoryTakingQReducer;
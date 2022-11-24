import {historyTakingQTypes} from '../types'; 
  const initialState = {
    data:{}
  };

  const HistoryTakingQReducer = (state = initialState, action)=> {
    switch (action.type) {
      case historyTakingQTypes.CREATE_CASE_Q:
          return {
            data : action.data
            
          };
      
      
      default:
        return state;
    }
  }
export default HistoryTakingQReducer;
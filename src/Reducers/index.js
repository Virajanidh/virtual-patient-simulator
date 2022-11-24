import { combineReducers } from 'redux';
import userReducer from './Users/UserReducer';
import { firestoreReducer } from 'redux-firestore';
import HistoryTakingQReducer from './HistoryTakingQ/HistoryTakingQReducer';

import {
  firebaseReducer
} from 'react-redux-firebase'

const rootReducer = combineReducers({
  user: userReducer,
  historyQ : HistoryTakingQReducer,
  firestore: firestoreReducer
  
});
export default rootReducer;

// export default combineReducers({
//   user: userReducer,
//   firestore: firestoreReducer,
//   historyQ : HistoryTakingQReducer
  
// });


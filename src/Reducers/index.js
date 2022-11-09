import { combineReducers } from 'redux';
import userReducer from './Users/UserReducer';




export default combineReducers({
  user: userReducer,
});
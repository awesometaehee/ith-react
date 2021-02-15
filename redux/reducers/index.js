import { combineReducers } from 'redux';
import actions from './actions';

// 여러개의 reducer를 합친 reducer를 만듬
const rootReducer = combineReducers({
  actions,
});

export default rootReducer;

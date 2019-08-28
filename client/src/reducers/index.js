import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import debt from './debt';

const rootReducer = combineReducers({
  user,
  flash,
  debt,
});

export default rootReducer;


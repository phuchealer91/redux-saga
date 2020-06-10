import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import uiReducer from './uiReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  ui: uiReducer,
  modal: modalReducer,
});

export default rootReducer;

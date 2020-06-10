import * as taskContants from '../../contants/task';
import { toastError, toastSuccess } from '../../helpers/toastHelpers';

const initalState = {
  listTask: [],
};

const taskReducer = (state = initalState, action) => {
  switch (action.type) {
    case taskContants.FETCH_TASK:
      return { ...state, listTask: [] };
    case taskContants.FETCH_TASK_SUCCESS:
      // toastSuccess(action.payload.data);
      return { ...state, listTask: action.payload.data };
    case taskContants.FETCH_TASK_FAILED:
      toastError(action.payload.error);
      return { ...state, listTask: [] };
    case taskContants.FILTER_TASK_SUCCESS:
      return {
        ...state,
        listTask: action.payload.data,
      };
    default:
      return state;
  }
};

export default taskReducer;

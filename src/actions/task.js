import * as taskApi from '../apis/task';
import * as taskContants from '../contants/task';

export const fetchListTask = () => {
  return { type: taskContants.FETCH_TASK };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskContants.FETCH_TASK_SUCCESS,
    payload: data,
  };
};

export const fetchListTaskfailed = (error) => {
  return {
    type: taskContants.FETCH_TASK_FAILED,
    payload: error,
  };
};

export const filterTask = (keyword) => {
  return {
    type: taskContants.FILTER_TASK,
    payload: { keyword },
  };
};

export const filterTaskSuccess = (data) => {
  return {
    type: taskContants.FILTER_TASK_SUCCESS,
    payload: { data },
  };
};

// export const fetchListTasks = () => async (dispatch) => {
//   try {
//     dispatch(fetchListTask());
//     const { data } = await taskApi.getList();
//     dispatch(fetchListTaskSuccess({ data }));
//   } catch (error) {
//     dispatch(fetchListTaskfailed({ error }));
//   }
// };

import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
} from 'redux-saga/effects';
import * as taskContants from '../contants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../contants';
import {
  fetchListTaskSuccess,
  fetchListTaskfailed,
  filterTaskSuccess,
} from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';

function* whatFetchListTaskACtion() {
  try {
    // Blocking lắng nghe action khi nào action đc dispatch thì mới chạy câu lệnh típ theo
    yield take(taskContants.FETCH_TASK);
    // show loading
    yield put(showLoading());
    // call api = call
    const resp = yield call(getList);
    const { status, data } = resp;

    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess({ data }));
      yield delay(1000);
      yield put(hideLoading());
    }
  } catch (error) {
    yield put(fetchListTaskfailed({ error }));
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  if (keyword) {
    const list = yield select((state) => state.tasks.listTask);
    const newArr = [...list];

    const filterTask = newArr.filter((task) => {
      return task.title.toLowerCase().includes(keyword.toLowerCase().trim());
    });
    yield put(filterTaskSuccess(filterTask));
  }
}

function* rootSaga() {
  // none-blocking
  yield fork(whatFetchListTaskACtion);
  yield takeLatest(taskContants.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;

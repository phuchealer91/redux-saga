import * as uiContants from '../../contants/ui';

const initalState = {
  showLoading: false,
};

const uiReducer = (state = initalState, action) => {
  switch (action.type) {
    case uiContants.SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case uiContants.HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      };

    default:
      return state;
  }
};

export default uiReducer;

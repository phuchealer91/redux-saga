import * as modalContants from '../../contants/modal';

const initalState = {
  showModal: false,
  title: '',
  component: null,
};

const modalReducer = (state = initalState, action) => {
  switch (action.type) {
    case modalContants.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case modalContants.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case modalContants.CHANGE_MODAL_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    case modalContants.CHANGE_MODAL_CONTENT:
      return {
        ...state,
        component: action.payload.component,
      };

    default:
      return state;
  }
};

export default modalReducer;

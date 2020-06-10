import * as modalContants from '../contants/modal';

export const showModal = () => {
  return {
    type: modalContants.SHOW_MODAL,
  };
};

export const hideModal = () => {
  return {
    type: modalContants.HIDE_MODAL,
  };
};
export const changeModalTitle = (title) => {
  return {
    type: modalContants.CHANGE_MODAL_TITLE,
    payload: { title },
  };
};
export const changeModalContent = (component) => {
  return {
    type: modalContants.CHANGE_MODAL_CONTENT,
    payload: { component },
  };
};

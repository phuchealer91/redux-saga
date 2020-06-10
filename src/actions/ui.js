import * as uiContants from '../contants/ui';

export const showLoading = () => {
  return {
    type: uiContants.SHOW_LOADING,
  };
};

export const hideLoading = () => {
  return {
    type: uiContants.HIDE_LOADING,
  };
};

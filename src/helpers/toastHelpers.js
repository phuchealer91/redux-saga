import { toast } from 'react-toastify';

export const toastError = (error) => {
  let message = null;
  // check error
  if (typeof error === 'object' && error.message) {
    message = error.message;
  }
  // check message
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.error(`💩 ${message}`);
  }
};

export const toastSuccess = (data) => {
  let message = null;
  if (typeof data === 'object') {
    message = '🚀 Success !';
  }
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.success(message);
  }
};

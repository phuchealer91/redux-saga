import axios from 'axios';

class AxiosServices {
  constructor() {
    const instance = axios.create();
    axios.interceptors.response.use(this.handleSuccess, this.handleFail);

    this.instance = instance;
  }

  handleSuccess = (response) => {
    return response;
  };

  handleFail = (error) => {
    return Promise.reject(error);
  };

  get(url) {
    return this.instance.get(url);
  }
}

export default new AxiosServices();

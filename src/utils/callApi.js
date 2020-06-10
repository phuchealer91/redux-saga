import axios from 'axios';

const callApi = () => {
  return axios.create({
    baseURL: 'http://localhost:3001',
  });
};

export default callApi;

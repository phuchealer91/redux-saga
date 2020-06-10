import axiosServices from '../commons/axiosServices';
import { API_ENDPOINT } from '../contants';

const url = 'tasks';

export function getList() {
  return axiosServices.get(`${API_ENDPOINT}/${url}`);
}

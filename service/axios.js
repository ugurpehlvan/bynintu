import axios from 'axios';
import { customResponse } from '../service/interceptors';

const createAxiosClient = () => {
  const axiosClient = axios.create({
    withCredentials: true,
    validateStatus: () => true,
  });
  axiosClient.interceptors.response.use(customResponse);
  return axiosClient;
};

const axiosClient = createAxiosClient();

export default axiosClient;

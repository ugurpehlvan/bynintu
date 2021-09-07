import axios from 'axios';
import { customResponse } from '../service/interceptors';

const createAxiosClient = () => {
  const axiosClient = axios.create({
    withCredentials: true,
    validateStatus: () => true,
  });
  axiosClient.interceptors.request.use(config => {
    const countryId = localStorage.getItem('countryId');
    const languageId = localStorage.getItem('appLanguageId');

    config.headers.common['languageid'] = languageId;
    config.headers.common['countryid'] = countryId;
    return config;
  });

  axiosClient.interceptors.response.use(customResponse);
  return axiosClient;
};

const axiosClient = createAxiosClient();

export default axiosClient;

import axios from "axios";

const defaultConfig = {
  baseURL: process.env.REACT_APP_API,
  headers: { "Content-Type": "application/json" }
};

const axiosUnprotected = axios.create(defaultConfig);
const axiosProtected = axios.create(defaultConfig);

axiosProtected.interceptors.request.use(config => {
  const user = localStorage.getItem('user');
  const newConfig = config;

  if (user.token) newConfig.headers.Authorization = `Token ${user.token}`;
  return newConfig;
});

export { axiosProtected };

export default axiosUnprotected;

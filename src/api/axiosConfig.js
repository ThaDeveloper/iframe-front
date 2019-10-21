import axios from "axios";

const defaultConfig = {
  baseURL: process.env.REACT_APP_API,
  headers: { "Content-Type": "application/json" }
};

const axiosUnprotected = axios.create(defaultConfig);
const axiosProtected = axios.create(defaultConfig);

axiosProtected.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  const newConfig = config;

  if (token) newConfig.headers.Authorization = `Bearer ${token}`;
  return newConfig;
});

export { axiosProtected };

export default axiosUnprotected;

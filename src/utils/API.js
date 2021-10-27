import axios from "axios";

const axiosConfig = {
  baseURL: "http://localhost:3001/",
};
const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error && error.response && error.response.status === 400) {
      localStorage.clear();
    } else {
      return Promise.reject(error.response);
    }
  }
);

export default instance;

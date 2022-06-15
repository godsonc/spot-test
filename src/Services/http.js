import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.terawork.com/service-categories/sellers-services/",
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/type";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const handleSuccess = (res) => {
  return res;
};

const handleError = (error) => {
  return Promise.reject(error);
};

instance.interceptors.response.use(
  (response) => {
    return handleSuccess(response);
  },
  (error) => handleError(error)
);

export default instance;

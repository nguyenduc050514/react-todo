import axios from "axios";
// Set config defaults when creating the instance
const instance = axios.create({
   baseURL: import.meta.env.VITE_URL_BACKEND,
});
// Alter defaults after instance has been created
// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

instance.interceptors.request.use(
   function (config) {
      // Do something before request is sent
      return config;
   },
   function (error) {
      // Do something with request error
      return Promise.reject(error);
   }
);

// Add a response interceptor
instance.interceptors.response.use(
   function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      // Nếu status trạng thái là từ 200 trở lên thì sẽ chạy vào
      if (response?.data?.data) return response.data;
      return response;
   },
   function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      // debugger
      // Nếu status trạng thái là từ 400 trở lên thì sẽ chạy vào
      if (error?.response?.data) return error?.response?.data;
      return Promise.reject(error);
   }
);

export default instance;

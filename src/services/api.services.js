// src/services/api.services.js (hoặc file tương tự)
import axios from "./api.customize"; // đường dẫn tới file bạn tạo instance
const createUser = (fullName, password, email, phone) => {
   const URL_BACKEND = "/api/v1/user";
   const data = {
      fullName,
      password,
      email,
      phone,
   };
   return axios.post(URL_BACKEND, data); // Dùng instance, không phải axios
};
const getUsers = () => {
   const URL_BACKEND = "/api/v1/user";
   return axios.get(URL_BACKEND);
};
const updateUser = (_id, fullName, phone) => {
   const URL_BACKEND = "/api/v1/user";
   const data = {
      _id,
      fullName,
      phone,
   };
   return axios.put(URL_BACKEND, data);
};
const deleteUser = (id) => {
   const URL_BACKEND = `/api/v1/user/${id}`;
   return axios.delete(URL_BACKEND);
};
const registerUser = (fullName, email, password, phone) => {
   // http://localhost:8080/api/v1/user/register
   const URL_BACKEND = "/api/v1/user/register";
   const data = {
      fullName,
      email,
      password,
      phone,
   };
   return axios.post(URL_BACKEND, data);
};
export { createUser, updateUser, getUsers, deleteUser, registerUser };

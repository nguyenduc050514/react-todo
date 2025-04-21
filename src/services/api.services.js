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
const updateUser = () => {};
export { createUser, updateUser };

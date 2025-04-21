import axios from "axios";
const createUser = (fullName, password, email, phone) => {
   const URL_BACKEND = "http://localhost:8080/api/v1/user";
   const data = {
      fullName,
      password,
      email,
      phone,
   };
   return axios.post(URL_BACKEND, data);
};
const updateUser = () => {};
export { createUser, updateUser };

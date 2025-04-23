import UsersForm from "../components/users/UsersForm";
import { useEffect, useState } from "react";
import { getUsers } from "../services/api.services";
import UsersTable from "../components/users/UsersTable";
const UsersPage = () => {
   const [dataUsers, setDataUsers] = useState([]);
   const getAllUsers = async () => {
      try {
         const response = await getUsers();
         setDataUsers(response?.data);
      } catch (error) {
         console.error("Failed to fetch users", error);
      }
   };
   useEffect(() => {
      getAllUsers();
   }, []);
   return (
      <>
         <UsersForm getAllUsers={getAllUsers} />
         <div className="px-15 mt-14">
            <UsersTable dataUsers={dataUsers} />
         </div>
      </>
   );
};
export default UsersPage;

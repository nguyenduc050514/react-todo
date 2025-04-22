import { Table } from "antd";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/api.services";
const UsersTable = () => {
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
   const columns = [
      {
         title: "Id",
         dataIndex: "_id",
      },
      {
         title: "full Name",
         dataIndex: "fullName",
      },
      {
         title: "Role",
         dataIndex: "role",
      },
      {
         title: "Email",
         dataIndex: "email",
      },
      {
         title: "Phone",
         dataIndex: "phone",
      },
   ];
   return <Table columns={columns} rowKey={"_id"} dataSource={dataUsers} />;
};
export default UsersTable;

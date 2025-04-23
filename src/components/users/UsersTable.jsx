import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import UsersUpdate from "./UsersUpdate";
import { useState } from "react";
import DetailUser from "./DetailUser";

const UsersTable = ({ dataUsers, getAllUsers }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [dataUpdate, setDataUpdate] = useState(null);
   const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);
   const columns = [
      {
         title: "Id",
         dataIndex: "_id",
         render: (id, record) => (
            <a
               href="#!"
               onClick={() => {
                  setIsModalOpenDetail(true);
                  setDataUpdate(record);
               }}
            >
               {id}
            </a>
         ),
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
      {
         title: "Action",
         key: "action",
         render: (_, record) => (
            <div className="flex gap-3">
               <EditOutlined
                  style={{ color: "orange", cursor: "pointer" }}
                  onClick={() => {
                     setIsModalOpen(true);
                     setDataUpdate(record);
                  }}
               />
               <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
            </div>
         ),
      },
   ];
   return (
      <>
         <Table columns={columns} rowKey={"_id"} dataSource={dataUsers} />
         <UsersUpdate
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            getAllUsers={getAllUsers}
         />
         <DetailUser
            isModalOpen={isModalOpenDetail}
            setIsModalOpen={setIsModalOpenDetail}
            dataUpdate={dataUpdate}
         />
      </>
   );
};
export default UsersTable;

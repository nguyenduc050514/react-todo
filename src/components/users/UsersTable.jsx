import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, Table } from "antd";
import UsersUpdate from "./UsersUpdate";
import { useMemo, useState } from "react";
import DetailUser from "./DetailUser";
import DeleteUser from "./DeleteUser";

const UsersTable = ({ dataUsers, getAllUsers }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [dataUpdate, setDataUpdate] = useState(null);
   const [isModalOpenDetail, setIsModalOpenDetail] = useState(false);
   const [deleteUserId, setDeleteUserId] = useState(null);
   const [pagination, setPagination] = useState({
      current: 1,
      pageSize: 5,
   });
   const columns = useMemo(
      () => [
         {
            title: "STT",
            render: (_, __, index) =>
               (pagination.current - 1) * pagination.pageSize + index + 1,
            width: 80,
            align: "center",
         },
         {
            title: "Id",
            dataIndex: "_id",
            render: (id, record) => (
               <a
                  href="#"
                  onClick={(e) => {
                     e.preventDefault();
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
                  <Popconfirm
                     title="Delete the user"
                     description="Are you sure to delete this user?"
                     onConfirm={() => setDeleteUserId(record._id)}
                     okText="Yes"
                     cancelText="No"
                     placement="left"
                  >
                     <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                     />
                  </Popconfirm>
               </div>
            ),
         },
      ],
      [setIsModalOpen, setDataUpdate, setDeleteUserId, pagination]
   );
   const handleModalClose = () => {
      setIsModalOpen(false);
      setDataUpdate(null);
   };

   const handleDetailModalClose = () => {
      setIsModalOpenDetail(false);
      setDataUpdate(null);
   };
   return (
      <>
         <Table
            columns={columns}
            rowKey={"_id"}
            dataSource={dataUsers}
            onChange={(p) => setPagination(p)}
            pagination={pagination}
         />
         <UsersUpdate
            isModalOpen={isModalOpen}
            setIsModalOpen={handleModalClose}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            getAllUsers={getAllUsers}
         />
         <DetailUser
            isModalOpen={isModalOpenDetail}
            setIsModalOpen={handleDetailModalClose}
            dataUpdate={dataUpdate}
         />
         <DeleteUser
            deleteUserId={deleteUserId}
            getAllUsers={getAllUsers}
            setDeleteUserId={setDeleteUserId}
         />
      </>
   );
};
export default UsersTable;

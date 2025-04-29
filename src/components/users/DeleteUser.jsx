import { useEffect } from "react";
import { deleteUser } from "../../services/api.services";
import { notification } from "antd";
const DeleteUser = ({ deleteUserId, getAllUsers, setDeleteUserId }) => {
   const [api, contextHolder] = notification.useNotification();
   useEffect(() => {
      if (deleteUserId) {
         const deleteData = async () => {
            const response = await deleteUser(deleteUserId);
            const statusCode = response?.statusCode;
            if (statusCode === 200) {
               api.success({
                  message: "Delete user",
                  description: "Delete thành công",
               });
               await getAllUsers();
            } else if (statusCode === 404) {
               api.error({
                  message: "Delete user",
                  description: "User not found",
               });
            } else if (statusCode === 400) {
               api.error({
                  message: "Delete user",
                  description: "Not delete admin user",
               });
            } else if (statusCode === 500) {
               api.error({
                  message: "Delete user",
                  description: "Server error",
               });
            } else if (statusCode === 403) {
               api.error({
                  message: "Delete user",
                  description: "Permission denied",
               });
            }
         };
         deleteData();
         setDeleteUserId(null);
      }
   }, [deleteUserId, api, getAllUsers, setDeleteUserId]);

   return <>{contextHolder}</>;
};
export default DeleteUser;

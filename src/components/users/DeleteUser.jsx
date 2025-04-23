import { useEffect } from "react";
import { deleteUser } from "../../services/api.services";
import { notification } from "antd";
const DeleteUser = ({ deleteUserId, getAllUsers, setDeleteUserId }) => {
   const [api, contextHolder] = notification.useNotification();
   useEffect(() => {
      if (deleteUserId) {
         const deleteData = async () => {
            try {
               const response = await deleteUser(deleteUserId);
               if (response?.statusCode < 400) {
                  api.success({
                     message: "Delete user",
                     description: "Delete thành công",
                  });
                  await getAllUsers();
               } else {
                  const message = err?.message;
                  api.error({
                     message: "message",
                     description: message,
                  });
               }
            } catch (err) {
               const message = err?.message;
               api.error({
                  message: "message",
                  description: message,
               });
            } finally {
               setDeleteUserId(null);
            }
         };
         deleteData();
      }
   }, [deleteUserId]);

   return <>{contextHolder}</>;
};
export default DeleteUser;

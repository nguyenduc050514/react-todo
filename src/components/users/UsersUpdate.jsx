import { Modal, notification } from "antd";
import FormField from "./FormField";
import { useCallback, useEffect, useMemo, useState } from "react";
import { updateUser } from "../../services/api.services";
const UsersUpdate = ({
   getAllUsers,
   isModalOpen,
   setIsModalOpen,
   dataUpdate,
   setDataUpdate,
}) => {
   const [api, contextHolder] = notification.useNotification();
   const [formData, setFormData] = useState({
      id: "",
      fullName: "",
      phone: "",
   });
   const handleOnChange = useCallback(
      (type) => (e) =>
         setFormData((prev) => ({ ...prev, [type]: e.target.value })),
      []
   );
   useEffect(() => {
      if (dataUpdate) {
         setFormData({
            id: dataUpdate._id,
            fullName: dataUpdate.fullName,
            phone: dataUpdate.phone,
         });
      }
   }, [dataUpdate]);
   const fields = useMemo(
      () => [
         {
            id: "id",
            label: "ID",
            value: formData.id,
            onChange: handleOnChange("id"),
            placeholder: "Update id...",
            disabled: true,
         },
         {
            id: "FullName",
            label: "FullName",
            value: formData.fullName,
            onChange: handleOnChange("fullName"),
            placeholder: "Update Full name...",
         },
         {
            id: "Phone",
            label: "Phone",
            value: formData.phone,
            onChange: handleOnChange("phone"),
            placeholder: "Update phone...",
         },
      ],
      [formData, handleOnChange]
   );
   const handleSubmit = async (e) => {
      e.preventDefault();
      const { id, fullName, phone } = formData;
      if (!fullName || !phone) {
         api.warning({
            message: "Validation error",
            description: "Full name và phone không được để trống.",
         });
         return;
      }
      setIsModalOpen(false);
      try {
         const response = await updateUser(id, fullName, phone);
         if (response?.data) {
            api.success({
               message: "Update user",
               description: "Update thành công",
            });
            await getAllUsers();
         } else {
            throw new Error(response?.message || "Unknown error");
         }
      } catch (error) {
         api.error({
            message: "Error user",
            description: error.message,
         });
      }
   };
   const handleCancel = () => {
      setIsModalOpen(false);
      setFormData({ id: "", fullName: "", phone: "" });
   };
   return (
      <>
         {contextHolder}
         <form action="" className="max-w-7xl mx-auto mt-4">
            <Modal
               title="Update user"
               open={isModalOpen}
               onOk={handleSubmit}
               onCancel={handleCancel}
               maskClosable={false}
               okText="Save"
            >
               {fields.map((field) => (
                  <FormField key={field.id} {...field} />
               ))}
            </Modal>
         </form>
      </>
   );
};
export default UsersUpdate;

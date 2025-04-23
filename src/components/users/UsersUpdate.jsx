import { Button, Modal, notification } from "antd";
import FormField from "./FormField";
import { useEffect, useState } from "react";

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
   const handleOnChange = (type) => {
      return (e) => setFormData({ ...formData, [type]: e.target.value });
   };
   useEffect(() => {
      console.log(dataUpdate);
      if (dataUpdate) {
         setFormData({
            id: dataUpdate._id,
            fullName: dataUpdate.fullName,
            phone: dataUpdate.phone,
         });
      }
   }, [dataUpdate]);
   const fields = [
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
   ];
   //    const handleSubmit = async (e) => {
   //       e.preventDefault();
   //       setIsModalOpen(false);
   //       const { fullName, password, email, phone } = formData;
   //       // if (!fullName || !password || !email || !phone) return;
   //       const response = await createUser(fullName, password, email, phone);
   //       if (response?.data) {
   //          api.success({
   //             message: "Update user",
   //             description: "Update thành công",
   //          });
   //       } else {
   //          api.error({
   //             message: "Error user",
   //             description: JSON.stringify(response?.message),
   //          });
   //       }
   //    };
   return (
      <>
         {contextHolder}
         <form action="" className="max-w-7xl mx-auto mt-4">
            <Modal
               title="Update user"
               open={isModalOpen}
               //    onOk={handleSubmit}
               onCancel={() => setIsModalOpen(false)}
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

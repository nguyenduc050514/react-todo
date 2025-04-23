import { Button, Modal, notification } from "antd";
import { useState } from "react";
import FormField from "./FormField";
import { createUser } from "../../services/api.services";
const UsersForm = ({ getAllUsers }) => {
   const [api, contextHolder] = notification.useNotification();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [formData, setFormData] = useState({
      fullName: "",
      password: "",
      email: "",
      phone: "",
   });
   const handleOnChange = (type) => {
      return (e) => setFormData({ ...formData, [type]: e.target.value });
   };
   const fields = [
      {
         id: "FullName",
         label: "FullName",
         value: formData.fullName,
         onChange: handleOnChange("fullName"),
         placeholder: "Enter Full name...",
      },
      {
         id: "Password",
         label: "Password",
         type: "password",
         value: formData.password,
         onChange: handleOnChange("password"),
         placeholder: "Enter password...",
      },
      {
         id: "Email",
         label: "Email",
         value: formData.email,
         onChange: handleOnChange("email"),
         placeholder: "Enter email...",
      },
      {
         id: "Phone",
         label: "Phone",
         value: formData.phone,
         onChange: handleOnChange("phone"),
         placeholder: "Enter phone...",
      },
   ];
   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsModalOpen(false);
      const { fullName, password, email, phone } = formData;
      // if (!fullName || !password || !email || !phone) return;
      const response = await createUser(fullName, password, email, phone);
      if (response?.data) {
         api.success({
            message: "create user",
            description: "Tạo user thành công",
         });
      } else {
         api.error({
            message: "Error user",
            description: JSON.stringify(response?.message),
         });
      }
      await getAllUsers();
      // setFormData({ fullName: "", password: "", email: "", phone: "" });
   };
   return (
      <>
         {contextHolder}
         <form action="" className="mx-auto mt-4 px-7">
            <Modal
               title="Create user"
               open={isModalOpen}
               onOk={handleSubmit}
               onCancel={() => setIsModalOpen(false)}
               maskClosable={false}
            >
               {fields.map((field) => (
                  <FormField key={field.id} {...field} />
               ))}
            </Modal>
            <div className="flex justify-between w-full">
               <h3 className="font-bold text-gray-950">Table Users</h3>
               <Button type="primary" onClick={() => setIsModalOpen(true)}>
                  Create User
               </Button>
            </div>
         </form>
      </>
   );
};
export default UsersForm;

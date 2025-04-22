import { Button, message, notification } from "antd";
import { useState } from "react";
import FormField from "./FormField";
import { createUser } from "../../services/api.services";
const UsersForm = () => {
   const [api, contextHolder] = notification.useNotification();
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
      console.log("User response:", response.message);
   };
   return (
      <>
         {contextHolder}
         <form
            action=""
            onSubmit={handleSubmit}
            className="max-w-5xl mx-auto mt-8"
         >
            {fields.map((field) => (
               <FormField key={field.id} {...field} />
            ))}
            <Button type="primary" htmlType="submit" className="mt-4">
               Create User
            </Button>
         </form>
      </>
   );
};
export default UsersForm;

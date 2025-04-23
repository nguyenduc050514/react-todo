import { Button, Modal } from "antd";
import { useEffect, useMemo, useState } from "react";
import FormField from "./FormField";
const DetailUser = ({ isModalOpen, setIsModalOpen, dataUpdate }) => {
   const [formData, setFormData] = useState({
      id: "",
      fullName: "",
      password: "",
      email: "",
      phone: "",
   });
   useEffect(() => {
      if (dataUpdate) {
         const { _id, fullName, password, email, phone } = dataUpdate;
         setFormData({
            id: _id,
            fullName: fullName,
            password: password,
            email: email,
            phone: phone,
         });
      }
   }, [dataUpdate]);
   const fields = useMemo(
      () => [
         {
            id: "id",
            label: "ID",
            value: formData.id,
            placeholder: "Update id...",
            disabled: true,
         },
         {
            id: "FullName",
            label: "FullName",
            value: formData.fullName,
            placeholder: "Update Full name...",
         },
         {
            id: "Password",
            label: "Password",
            value: formData.password,
            placeholder: "Update password...",
         },
         {
            id: "Email",
            label: "Email",
            value: formData.email,
            placeholder: "Update email...",
         },
         {
            id: "Phone",
            label: "Phone",
            value: formData.phone,
            placeholder: "Update phone...",
         },
      ],
      [formData]
   );
   return (
      <>
         <form action="" className="max-w-7xl mx-auto mt-4">
            <Modal
               title="Detail user"
               open={isModalOpen}
               closable={false}
               onCancel={() => setIsModalOpen(false)}
               footer={[
                  <Button key="cancel" onClick={() => setIsModalOpen(false)}>
                     Cancel
                  </Button>,
               ]}
            >
               {fields.map((field) => (
                  <FormField key={field.id} {...field} />
               ))}
            </Modal>
         </form>
      </>
   );
};
export default DetailUser;

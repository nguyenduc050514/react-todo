import { useMemo } from "react";
import { Button, Form, Input, notification } from "antd";
import { registerUser } from "../services/api.services";
import { useNavigate } from "react-router-dom";
// form để render chung để hiển thị ra giao diện
const FORM_FIELDS = [
   {
      id: "fullName",
      label: "Full Name",
      placeholder: "Enter full name...",
      rules: [{ required: true, message: "Please enter your full name" }],
      autoComplete: "off", // Tắt tự động điền
   },
   {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password...",
      rules: [
         { required: true, message: "Please enter your password" },
         { min: 6, message: "Password must be at least 6 characters" },
      ],
      autoComplete: "new-password", // Mật khẩu mới cho đăng ký
   },
   {
      id: "email",
      label: "Email",
      placeholder: "Enter email...",
      rules: [
         { required: true, message: "Please enter your email" },
         { type: "email", message: "Please enter a valid email" },
      ],
      autoComplete: "email", // Hỗ trợ tự động điền email
   },
   {
      id: "phone",
      label: "Phone",
      placeholder: "Enter phone...",
      rules: [
         { message: "Please enter your phone number" },
         {
            pattern: new RegExp(/\d+/g),
            message: "Please enter a valid phone number!",
         },
      ],
      autoComplete: "tel", // Hỗ trợ số điện thoại
   },
];
const RegisterPage = () => {
   const [form] = Form.useForm();
   const navigate = useNavigate();
   const fields = useMemo(() => FORM_FIELDS, []);
   const [api, contextHolder] = notification.useNotification();
   // const [loading, setLoading] = useState(false); // Thêm loading
   const onFinish = async ({ fullName, email, password, phone }) => {
      // setLoading(true);
      const response = await registerUser(fullName, email, password, phone);
      const statusCode = response?.statusCode;
      if (statusCode === 201) {
         api.success({
            message: "Register user",
            description: "Register thành công",
            duration: 2,
         });
         setTimeout(() => {
            navigate("/login");
         }, 1500);
      } else if (statusCode === 400) {
         api.error({
            message: "Register user",
            description: response.message,
         });
      } else if (statusCode === 500) {
         api.error({
            message: "Register user",
            description: "Server error",
         });
      }
   };
   return (
      <>
         {contextHolder}
         <div className="mx-auto max-w-[50vw] mt-4 px-7">
            <Form form={form} onFinish={onFinish} layout="vertical">
               {fields.map(
                  ({ id, placeholder, type, label, rules, autoComplete }) => (
                     <Form.Item key={id} name={id} label={label} rules={rules}>
                        {type === "password" ? (
                           <Input.Password
                              placeholder={placeholder}
                              autoComplete={autoComplete}
                           />
                        ) : (
                           <Input
                              placeholder={placeholder}
                              autoComplete={autoComplete}
                           />
                        )}
                     </Form.Item>
                  )
               )}
               <Form.Item>
                  <Button
                     type="primary"
                     onClick={() => form.submit()}
                     // loading={loading}
                  >
                     Register
                  </Button>
               </Form.Item>
            </Form>
         </div>
      </>
   );
};

export default RegisterPage;

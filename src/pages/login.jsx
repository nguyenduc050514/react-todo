import { Button, Checkbox, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";

const LoginPage = () => {
   const [form] = useForm();
   const itemsLogin = [
      {
         id: "email",
         content: "Email",
         type: "email",
         rules: [
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
         ],
         placeholder: "Enter email...",
         autoComplete: "email", // Thêm autoComplete
      },
      {
         id: "password",
         content: "Password",
         type: "password",
         rules: [{ required: true, message: "Please enter your password" }],
         placeholder: "Enter password...",
         autoComplete: "current-password", // Thêm autoComplete
      },
   ];

   const onFinish = (values) => {
      console.log(values);
   };

   return (
      <div className="max-w-md mx-auto mt-10">
         <h2 className="font-bold text-2xl text-center">Đăng Nhập</h2>
         <Form form={form} name="basic" layout="vertical" onFinish={onFinish}>
            {itemsLogin.map(
               ({ content, type, id, rules, placeholder, autoComplete }) => (
                  <Form.Item key={id} label={content} name={id} rules={rules}>
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
               <Button type="primary" onClick={() => form.submit()}>
                  Login
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default LoginPage;

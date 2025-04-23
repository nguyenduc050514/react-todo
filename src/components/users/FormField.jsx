import { Input, Button, message } from "antd";
const FormField = ({
   id = "",
   label = "",
   value = "",
   type = "text",
   onChange = () => {},
   placeholder = "",
   disabled = false,
}) => {
   return (
      <div>
         <label htmlFor={id}>{label}</label>
         {type === "password" ? (
            <Input.Password
               id={id}
               value={value}
               onChange={onChange}
               placeholder={placeholder}
            />
         ) : (
            <Input
               id={id}
               disabled={disabled}
               value={value}
               onChange={onChange}
               placeholder={placeholder}
            />
         )}
      </div>
   );
};
export default FormField;

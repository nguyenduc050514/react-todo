import { Input, Button, message } from "antd";
const FormField = ({ id, label, value, onChange, placeholder }) => {
   return (
      <div>
         <label htmlFor={id}>{label}</label>
         <Input
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
         />
      </div>
   );
};
export default FormField;

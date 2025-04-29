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
      avatar: "",
   });
   useEffect(() => {
      if (dataUpdate) {
         const { _id, fullName, password, email, phone, avatar } = dataUpdate;
         setFormData({
            id: _id,
            fullName: fullName,
            password: password,
            email: email,
            phone: phone,
            avatar: avatar,
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
            disabled: true,
         },
         {
            id: "Email",
            label: "Email",
            value: formData.email,
            placeholder: "Update email...",
            disabled: true,
         },
         {
            id: "Phone",
            label: "Phone",
            value: formData.phone,
            placeholder: "Update phone...",
            disabled: true,
         },
      ],
      [formData]
   );
   const [selectedFile, setSelectedFile] = useState(null);
   const [preview, setPreview] = useState(null);
   const onSelectFile = (e) => {
      if (!e.target.files || e.target.files.length === 0) {
         setSelectedFile(null);
         setPreview(null);
         return;
      }
      setSelectedFile(e.target.files[0]);
   };
   useEffect(() => {
      if (!selectedFile) {
         setPreview(null);
         return;
      }
      setPreview(URL.createObjectURL(selectedFile));
      return () => URL.createObjectURL(selectedFile);
   }, [selectedFile]);
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
               <p className="mt-7 ">Avatar</p>
               <div className="flex gap-5">
                  <div className="flex justify-center">
                     <img
                        className="w-42 h-42 object-cover "
                        src={`${
                           import.meta.env.VITE_URL_BACKEND
                        }/images/avatar/${formData.avatar}`}
                        alt=""
                     />
                  </div>
                  {preview && (
                     <div className="flex justify-end">
                        <img
                           className="w-42 h-42 object-cover "
                           src={`${preview}`}
                           alt=""
                        />
                     </div>
                  )}
               </div>
               <div className="mt-5">
                  <label
                     className="w-auto bg-blue-600 px-4 py-2 text-white rounded cursor-pointer"
                     htmlFor="avatar"
                  >
                     Upload Avatar
                  </label>
                  <input
                     type="file"
                     name=""
                     id="avatar"
                     hidden
                     onChange={onSelectFile}
                  />
               </div>
            </Modal>
         </form>
      </>
   );
};
export default DetailUser;

/*
import { Button, Modal } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import FormField from "./FormField";

const DetailUser = ({ isModalOpen, setIsModalOpen, dataUpdate }) => {
  // Sử dụng initialState function để tránh tính toán không cần thiết khi component re-render
  const [formData, setFormData] = useState(() => ({
    id: "",
    fullName: "",
    email: "",
    phone: "",
    avatar: "",
  }));

  const [preview, setPreview] = useState(null);
  
  // Memoize backendUrl để tránh tính toán lại giữa các render
  const backendUrl = useMemo(() => import.meta.env.VITE_URL_BACKEND, []);
  
  // Reset form data khi dataUpdate thay đổi
  useEffect(() => {
    if (!dataUpdate) return;
    
    const { _id, fullName, email, phone, avatar } = dataUpdate;
    setFormData({
      id: _id,
      fullName,
      email,
      phone,
      avatar,
    });
    
    // Reset preview khi dataUpdate thay đổi
    setPreview(null);
  }, [dataUpdate]);
  
  // Cleanup preview URL khi component unmount hoặc khi preview thay đổi
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  // Memoize fields để tránh tính toán lại các field không cần thiết
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
        id: "fullName",
        label: "Full Name",
        value: formData.fullName,
        placeholder: "Update Full name...",
        disabled: true,
      },
      {
        id: "email",
        label: "Email",
        value: formData.email,
        placeholder: "Update email...",
        disabled: true,
      },
      {
        id: "phone",
        label: "Phone",
        value: formData.phone,
        placeholder: "Update phone...",
        disabled: true,
      },
    ],
    [formData]
  );

  // Sử dụng useCallback để tránh tạo lại hàm xử lý khi component re-render
  const handleFileSelect = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
      return;
    }
    
    // Tạo URL cho preview
    const objectUrl = URL.createObjectURL(file);
    
    // Nếu có preview cũ, giải phóng bộ nhớ trước
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    
    setPreview(objectUrl);
  }, [preview]);

  // Memoize handleCloseModal
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  // Tránh tính toán trong render
  const avatarUrl = useMemo(() => 
    formData.avatar ? `${backendUrl}/images/avatar/${formData.avatar}` : "",
  [backendUrl, formData.avatar]);

  // Tái cấu trúc render để tăng khả năng đọc
  const renderAvatarSection = () => (
    <>
      <p className="mt-7">Avatar</p>
      <div className="flex gap-5">
        {formData.avatar && (
          <div className="flex justify-center">
            <img
              className="w-42 h-42 object-cover"
              src={avatarUrl}
              alt="Current avatar"
              loading="lazy" // Tối ưu tải hình ảnh
            />
          </div>
        )}
        
        {preview && (
          <div className="flex justify-end">
            <img
              className="w-42 h-42 object-cover"
              src={preview}
              alt="New avatar preview"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </>
  );

  return (
    <Modal
      title="Detail user"
      open={isModalOpen}
      closable={false}
      onCancel={handleCloseModal}
      footer={[
        <Button key="cancel" onClick={handleCloseModal}>
          Cancel
        </Button>
      ]}
      destroyOnClose // Tối ưu bằng cách hủy Modal khi đóng
    >
      <div className="max-w-7xl mx-auto">
        {fields.map((field) => (
          <FormField key={field.id} {...field} />
        ))}
        
        {renderAvatarSection()}
        
        <div className="mt-5">
          <label
            className="w-auto bg-blue-600 px-4 py-2 text-white rounded cursor-pointer inline-block"
            htmlFor="avatar-upload"
          >
            Upload Avatar
          </label>
          <input
            type="file"
            id="avatar-upload"
            className="hidden"
            onChange={handleFileSelect}
            accept="image/*"
            aria-label="Upload avatar"
          />
        </div>
      </div>
    </Modal>
  );
};

// Đánh dấu component pure để tránh render không cần thiết
export default React.memo(DetailUser);

*/

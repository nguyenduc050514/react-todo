import UsersForm from "../components/users/UsersForm";
import UsersTable from "../components/users/userstable";
const UsersPage = () => {
   return (
      <>
         <UsersForm />
         <div className="px-20 mt-20">
            <UsersTable />
         </div>
      </>
   );
};
export default UsersPage;

import checkList from "../assets/images/businessman-checklist.jpg";
const EmptyTask = () => {
   return (
      <div className="flex items-center justify-center">
         <img src={checkList} alt="" />
      </div>
   );
};
export default EmptyTask;

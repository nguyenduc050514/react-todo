import AddNewTask from "./components/AddNewTask";
import EmptyTask from "./components/EmptyTask";
import RenderTodoTask from "./components/RenderTodoTask";
import { v4 as uuidv4 } from "uuid";
const App = () => {
   const RenderTaskItem = [
      {
         id: uuidv4(),
         content: "Hello World",
         buttonClose: "×",
         completed: false,
      },
      {
         id: uuidv4(),
         content: "Hello World 2",
         buttonClose: "×",
         completed: false,
      },
   ];
   const alertContent = (data) => {
      alert(data);
   };
   return (
      <div className="container mx-auto w-[50vw] max-w-3xl px-4">
         <h1 className="text-center text-2xl">Todo List </h1>
         <AddNewTask />
         {RenderTaskItem.length ? (
            <RenderTodoTask
               tasks={RenderTaskItem}
               alertContent={alertContent}
            />
         ) : (
            <EmptyTask />
         )}
      </div>
   );
};
export default App;

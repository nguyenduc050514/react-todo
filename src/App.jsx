import AddNewTask from "./components/AddNewTask";
import EmptyTask from "./components/EmptyTask";
import RenderTodoTask from "./components/RenderTodoTask";
import HandleTodoTask from "./components/HandleTodoTask";
import { useEffect } from "react";

const App = () => {
   const { tasks, error, addNewTask, deleteTask, setError } = HandleTodoTask();
   useEffect(() => {
      if (error) {
         const timer = setTimeout(() => {
            setError("");
         }, 4000);
         return () => clearTimeout(timer);
      }
   }, [error, setError]);
   return (
      <>
         <div className="container mx-auto w-[50vw] max-w-3xl px-4 mt-20">
            <h1 className="text-center text-2xl">Todo List</h1>
            <AddNewTask addNewTask={addNewTask} />
            {error && (
               <p className="text-red-500 text-sm bg-red-300 p-3">{error}</p>
            )}
            {tasks.length ? (
               <RenderTodoTask tasks={tasks} deleteTask={deleteTask} />
            ) : (
               <EmptyTask />
            )}
         </div>
      </>
   );
};
export default App;

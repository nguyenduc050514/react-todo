import AddNewTask from "./AddNewTask";
import EmptyTask from "./EmptyTask";
import RenderTodoTask from "./RenderTodoTask";
import HandleTodoTask from "./HandleTodoTask";
import { useEffect } from "react";
const TodoApp = () => {
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
export default TodoApp;

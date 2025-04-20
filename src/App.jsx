import { useState } from "react";
import AddNewTask from "./components/AddNewTask";
import EmptyTask from "./components/EmptyTask";
import RenderTodoTask from "./components/RenderTodoTask";
import { v4 as uuidv4 } from "uuid";
const App = () => {
   const renderTaskItem = [];
   const [tasks, setTasks] = useState(renderTaskItem);
   const addNewTask = (content) => {
      if (!content) return alert("New task do not empty ");
      setTasks((prev) => [
         ...prev,
         {
            id: uuidv4(),
            content,
            buttonClose: "×",
            completed: false,
         },
      ]);
   };
   return (
      <div className="container mx-auto w-[50vw] max-w-3xl px-4 mt-20">
         <h1 className="text-center text-2xl">Todo List</h1>
         <AddNewTask addNewTask={addNewTask} />
         {tasks.length ? <RenderTodoTask tasks={tasks} /> : <EmptyTask />}
      </div>
   );
};
export default App;
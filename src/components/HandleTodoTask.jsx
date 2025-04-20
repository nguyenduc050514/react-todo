import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
const HandleTodoTask = () => {
   const [tasks, setTasks] = useState([]);
   const [error, setError] = useState("");
   const addNewTask = (content) => {
      if (!content.trim()) {
         setError("Please enter a task!");
         return;
      }
      setError("");
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
   const deleteTask = (id) => {
      if (!id) return;
      setTasks((prev) => {
         return prev.filter((prev) => prev.id !== id);
      });
   };
   return {
      tasks,
      error,
      addNewTask,
      deleteTask,
      setError,
   };
};
export default HandleTodoTask;

import { useState } from "react";
const AddNewTask = ({ addNewTask }) => {
   const [content, setContent] = useState("");
   return (
      <div className="flex align-center gap-4 my-6">
         <input
            className="border-2 rounded border-gray-300 px-4 py-2 flex-grow focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Enter your new task..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
         />
         <button
            className="inline-block max-w-4xl cursor-pointer bg-blue-600 px-4 py-4 rounded text-white"
            type="submit"
            onClick={() => {
               addNewTask(content);
               setContent("");
            }}
         >
            Add Task
         </button>
      </div>
   );
};
export default AddNewTask;

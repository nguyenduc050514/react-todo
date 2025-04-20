const RenderTodoTask = ({ tasks, alertContent, deleteTask }) => {
   return (
      <ul className="space-y-2">
         {tasks.map((task) => (
            <li
               key={task.id}
               className="flex items-center justify-between p-3 rounded-lg bg-gray-200 hover:bg-gray-250"
               onClick={() => {
                  alertContent(task.content);
               }}
            >
               <span className="flex-grow text-gray-800">{task.content}</span>
               <button
                  className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded cursor-pointer text-3xl"
                  onClick={(e) => {
                     e.stopPropagation();
                     deleteTask(task.id);
                  }}
               >
                  {task.buttonClose}
               </button>
            </li>
         ))}
      </ul>
   );
};
export default RenderTodoTask;

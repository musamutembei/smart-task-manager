function TaskItem({ task, toggleTask, handleDeleteTask }) {
  return (
    <li className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-4 h-4"
        />
        <span
          className={`break-words ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-700"
          }`}
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => handleDeleteTask(task.id)}
        className="self-start sm:self-auto text-red-500 hover:text-red-700 font-semibold transition-colors"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
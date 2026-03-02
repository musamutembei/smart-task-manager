function TaskInput({ task, setTask, handleAddTask }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddTask();
        }}
        placeholder="Add a new task..."
        className="flex-1 p-3 border border-gray-300 rounded-lg sm:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-3 rounded-lg sm:rounded-r-lg hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;
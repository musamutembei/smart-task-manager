import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, handleDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <p className="text-gray-500 text-center py-4">
        No tasks yet. Add something productive to do!
      </p>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
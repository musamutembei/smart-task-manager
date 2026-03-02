import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const remainingTasks = tasks.filter((t) => !t.completed).length;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-white shadow-xl rounded-2xl p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Smart Task Manager
        </h1>

        <TaskInput
          task={task}
          setTask={setTask}
          handleAddTask={handleAddTask}
        />

        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          handleDeleteTask={handleDeleteTask}
        />

        {tasks.length > 0 && (
          <p className="text-sm text-gray-500 mt-6 text-center">
            {remainingTasks} task
            {remainingTasks !== 1 ? "s" : ""} remaining
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
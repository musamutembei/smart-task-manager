import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save dark mode
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleAddTask = () => {
    if (!input.trim()) {
      if (tasks.length > 0) {
        setError("Please write a task to add");
      }
      return;
    }

    setTasks([
      ...tasks,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);

    setInput("");
    setError("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors ${
        darkMode ? "bg-gray-900" : "bg-blue-50"
      }`}
    >
      <div
        className={`w-full max-w-md shadow-lg rounded-lg p-6 transition-colors ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">
            Smart Task Manager
          </h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        <TaskInput
          task={input}
          setTask={setInput}
          handleAddTask={handleAddTask}
        />

        {error && (
          <p className="text-red-500 text-sm mb-2 text-center">
            {error}
          </p>
        )}

        {tasks.length > 0 && (
          <p className="text-sm mb-3 text-center">
            {remainingTasks} task{remainingTasks !== 1 && "s"} remaining
          </p>
        )}

        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
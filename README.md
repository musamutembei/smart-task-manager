#  Smart Task Manager

A fully responsive task management application built with React and Tailwind CSS.

This project demonstrates modern React architecture, component-based design, state management, and persistent data handling using localStorage.

---

## Live Demo

Check out the live app here:
[Smart Task Manager](https://smart-task-manager-roan-pi.vercel.app/)


---

## Preview

![Smart Task Manager Screenshot](src/assets/Screenshot%20(2).png)

---

## Features
- Add and manage tasks efficiently
- Mark tasks as completed with automatic strike-through
- Delete tasks
- Task counter shows remaining tasks in real-time
- Persistent storage using the browser's LocalStorage API
- Fully responsive layout for mobile and desktop screens


---

## Tech Stack

- React (with Vite for fast development and bundling)
- Tailwind CSS for responsive and utility-first styling
- Modern JavaScript (ES6+)
- Browser LocalStorage API for data persistence


---

## Architecture & Concepts Used

- Functional components
- React Hooks (`useState`, `useEffect`)
- Controlled components pattern
- Immutable state updates
- Component reusability
- Clean folder structure
- Responsive UI design principles

---

## Project Structure

```
src/
│
├── components/ # Reusable UI components
│ ├── TaskInput.jsx # Handles adding new tasks
│ ├── TaskItem.jsx # Represents a single task (complete/delete)
│ └── TaskList.jsx # Renders the list of all tasks
│
├── App.jsx # Main app component (orchestrates all components)
└── main.jsx # React entry point, renders App to the DOM
```
### **Why This Structure**

- **components/**: Keeps UI modular, reusable, and easy to maintain  
- **App.jsx**: High-level orchestration, keeps logic centralized  
- **main.jsx**: Entry point, separates DOM mounting from app logic

---

## Installation & Setup (Optional,for Developers)

1. Clone the repository:

```
git clone https://github.com/musamutembei/smart-task-manager.git
```

2. Navigate into the folder:

```
cd smart-task-manager
```

3. Install dependencies:

```
npm install
```

4. Start development server:

```
npm run dev
```

---

## What This Project Demonstrates

This project showcases:

- Clean UI implementation
- Proper React state management
- Scalable component-based architecture
- Responsive design using Tailwind CSS
- Practical real-world frontend development workflow

---

##  Author

Musa Mutembei  
Frontend Developer  
React | Tailwind CSS | Modern Web Applications
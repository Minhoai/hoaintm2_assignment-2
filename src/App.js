import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const leftCount = todos.filter((t) => !t.completed).length;

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  return (
    <>
      <div className="container">
        <h2>My Todos</h2>

        <TodoInput onAdd={addTodo} />

        <TodoList items={todos} onToggle={toggleTodo} onRemove={removeTodo} />

        <TodoFooter leftCount={leftCount} />
      </div>
    </>
  );
}

export default App;

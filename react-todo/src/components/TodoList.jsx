import { useState } from "react";

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Master Vitest", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id, e) => {
    e.stopPropagation();
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={(e) => deleteTodo(todo.id, e)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

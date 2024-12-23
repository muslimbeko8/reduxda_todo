import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo, editTodo } from "./slece/todoslices";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      dispatch(editTodo({ id: editingId, text: input }));
      setEditingId(null);
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setInput(todo.text);
    setEditingText(todo.text);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder={editingId ? "update todo..." : "add todo..."}
          />
        </div>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 border rounded"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="h-5 w-5"
              />
              <span
                className={todo.completed ? "line-through text-gray-500" : ""}
              >
                {todo.text}
              </span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => startEditing(todo)} className="px-3">
                <i className="fa fa-pen-to-square"></i>
              </button>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className=" text-red-600"
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

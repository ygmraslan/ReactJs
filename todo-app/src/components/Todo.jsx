import React from "react";
import { CiBookmarkRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import "../App.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useState } from "react";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;

  const [editable, setEditTable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };
  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditTable(false);
  };

  return (
    <div className="todo">
      <div>
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            style={{ width: "500px" }}
            className="todo-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <CiBookmarkRemove className="todo-icons" onClick={removeTodo} />
        {editable ? (
          <IoCheckmarkCircleOutline
            className="todo-icons"
            onClick={updateTodo}
          />
        ) : (
          <CiEdit className="todo-icons" onClick={() => setEditTable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;

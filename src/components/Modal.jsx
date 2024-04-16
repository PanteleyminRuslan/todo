import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ onSubmit, onCancel, closeModal }) => {
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(todoText);
    setTodoText("");
    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Add canceled");
      }}
    >
      <div className="modal">
        <div className="modal-header" onClick={() => closeModal()}>
          <p className="close">&times;</p>
        </div>
        <div className="modal-content">
          <input
            type="text"
            value={todoText}
            onChange={handleChange}
            placeholder="Enter todo"
          />
        </div>
        <div className="modal-footer">
          <button
            type="submit"
            className="btn btn-submit"
            onClick={handleSubmit}
          >
            AddTodo
          </button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={() => {
              setTodoText("");
              onCancel();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Modal } from "./components/Modal";
import { createPortal } from 'react-dom';

import "./App.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [selectedTodos, setSelectedTodos] = useState([]);

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setTodos([...todos, { text: value, selected: false }]);
  };

  const handleClearList = () => {
    setTodos([]);
    setSelectedTodos([]);
  };

  const handleTodoClick = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].selected = !updatedTodos[index].selected;
    setTodos(updatedTodos);

    const selected = updatedTodos.filter((todo) => todo.selected);
    setSelectedTodos(selected);
  };

  const selectedCount = selectedTodos.length;

  return (
    <div className="makeCenter">
      <div className="mainContainer">
        <div className="blockInContainer">
          <div className="textContainer"> Hi! I'm To Do List </div>
          <button className="btnCreate" onClick={() => setModalOpen(true)}>
            <div className="btnText">Create Todo</div>
          </button>
          <ul>
            {todos.map((todo, index) => (
              <li
                key={index}
                onClick={() => handleTodoClick(index)}
                className={todo.selected ? "selected" : ""}
              >
                {todo.text}
              </li>
            ))}
          </ul>
          <p>Selected todos: {selectedCount}</p>
          <button className="btnClear" onClick={handleClearList}>
            Clear List
          </button>
          {modalOpen && (
            createPortal(
              <Modal
                closeModal={() => setModalOpen(false)}
                onSubmit={handleButtonClick}
                onCancel={() => setModalOpen(false)}
              />,
              document.body
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const handleTitleSubmit = (e) => {
    setTitle(e.target.value);
  };

  const handleContentSubmit = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Title :{" "}
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={handleTitleSubmit}
        ></input>
        Content :{" "}
        <input
          type="text"
          placeholder="내용"
          value={content}
          onChange={handleContentSubmit}
        ></input>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default TodoInput;

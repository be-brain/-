import React from "react";
import { v4 as uuidv4 } from "uuid";

const TodoItem = ({ item, isActive, setTodos }) => {
  const handleDeleteBtn = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };

  const handleSwitchBtn = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div key={uuidv4()}>
      <h4>{item.title}</h4>
      <p>{item.content}</p>
      <button onClick={handleSwitchBtn}>{isActive ? "완료" : "취소"}</button>
      <button onClick={handleDeleteBtn}>삭제</button>
    </div>
  );
};

export default TodoItem;

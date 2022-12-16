import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, isActive }) => {
  return (
    <div>
      <h2>{isActive ? "Do It!" : "Done"}</h2>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => (
          /* <div key={uuidv4()}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <button>{isActive ? "완료" : "취소"}</button>
            <button>삭제</button>
          </div> */
          <TodoItem item={item} isActive={isActive} setTodos={setTodos} />
        ))}
    </div>
  );
};

export default TodoList;

import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), title: "제목1", content: "내용1입니다", isDone: false },
    { id: uuidv4(), title: "제목2", content: "내용2입니다", isDone: true },
    { id: uuidv4(), title: "제목3", content: "내용3입니다", isDone: false },
  ]);

  return (
    <>
      <h1>My Todo-List</h1>
      <TodoInput setTodos={setTodos}></TodoInput>
      <main>
        {/* todolist가 들어가는 부분 */}
        <TodoList isActive={true} todos={todos} setTodos={setTodos}></TodoList>
        <TodoList isActive={false} todos={todos} setTodos={setTodos}></TodoList>
      </main>
    </>
  );
};

export default App;

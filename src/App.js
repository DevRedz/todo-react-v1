import logo from "./cat.svg";
import "./App.css";
import "./index.css";
import ToDoTemplate from "./components/ToDoTemplate.js";
import TodoInsert from "./components/TodoInsert.js";
import TodoList from "./components/TodoList.js";
import { useState, useRef, useCallback } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "예시- 이렇게 할 일을 입력하세요!",
      checked: true,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos]
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <ToDoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </ToDoTemplate>
  );
}

export default App;

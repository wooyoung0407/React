import { useState } from "react";
import TodoListItem from "./TodoListItem";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "공부", checked: true },
    { id: 2, text: "운동", checked: true },
    { id: 3, text: "명상", checked: false },
  ]);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoLigistItem todo={todo}/>
        ))}
      </ul>
    </>
  );
}

export default TodoList;

import { useRef, useState } from 'react';
import './App.css'
import TodoList from './components/TodoList'
import TodoInsert from './components/Todoinsert'



function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "공부",
      checked: true,
    },
    {
      id: 2,
      text: "운동",
      checked: true,
    },
    {
      id: 3,
      text: "명상",
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = (text) => {
    setTodos(
      todos.concat([{
        id: nextId.current,
        text: text,
        checked: false,
      }])
    );
    nextId.current++;
  };

  return (
    <div>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App

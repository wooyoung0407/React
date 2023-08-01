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
  setTodos;

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, checked : !todo.checked} :todo))
  }

  return (
    <div>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}

export default App

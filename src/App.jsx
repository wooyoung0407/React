import { useState } from 'react';
import './App.css'
import TodoList from './components/TodoList'
import TodoInsert from './components/Todoinsert'



function App() {

  const [todos, setTodos] = useState([
    { id: 1, text: "공부", checked: true },
    { id: 2, text: "운동", checked: true },
    { id: 3, text: "명상", checked: false },
  ]);


  return (
    <div>
      <TodoInsert />
      <TodoList todos={todos}/>
    </div>
  )
}

export default App

import './App.css';
import {useState} from 'react'
import Form from './Components/Form'
import TodoList from './Components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  
  const handleTodo = (todo) => {
      const handle = todos.filter(t => t !== todo)
      setTodos(handle)
  }

  return (
    <div className="App">
      <h2>Tarefas</h2>
      <Form addTodo={addTodo} />
      <TodoList handleTodo={handleTodo} todos={todos}/>
    </div>
  );
}

export default App;

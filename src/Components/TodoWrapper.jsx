import React,{useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoWrapper() {
    
  const [newTodo,setNewTodo] = useState("");
  const [todos,setTodos] = useState([]);
  
  function addTodo(todo) {
      if(todo) {
        setTodos([todo, ...todos]);
        setNewTodo("");
      }
  }

  function deleteTodo(todoToDelete) {
      const filteredTodos=todos.filter(function(todo) {
           return todo !== todoToDelete;
      });
      setTodos(filteredTodos);
  }
  return (
    <div className='TodoWrapper'>
        <div className="container TodoWrapper">
        <h1 className='text-center my-4'>Todo App</h1>
        <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} onAdd={addTodo}/>
        <TodoList todos={todos} onDelete={deleteTodo}/>
        </div>
    </div>
  )
}

export default TodoWrapper
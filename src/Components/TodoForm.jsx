import React,{useState} from 'react'

function TodoForm(props) {
//   Functions\
    function handleKeyPress(e) {
        if(e.key === 'Enter') {
            handleAdd();
        }
    }
    
    function handleAdd() {
        props.onAdd(props.newTodo);
    }
  return (
    <div className='TodoForm'>
      <div className='input-group mb-3'>
        <input
        className='form-control'
        type="text"
        value={props.newTodo}
        onKeyPress={handleKeyPress}
        onChange={function(e) { 
            props.setNewTodo(e.target.value); 
          }}
        placeholder="Enter a new task"
      />
      <button className='btn btn-primary' onClick={handleAdd} >Add</button> 
      </div>
    </div>
  )
}

export default TodoForm
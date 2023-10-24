import React from 'react'

function TodoList(props) {
//   Functions
  function handleDelete(todo) {
       props.onDelete(todo);
  }  
  return (
    <div className='TodoList'>
        <ul className='list-group'>
        {props.todos.map(function(todo,index) {
            return(
                <div className='card mb-2' key={index}>
                   <div className='card-body d-flex justify-content-between align-items-center'>
                    <input type='text' className='form-control flex-grow-1' value={todo} readOnly />
                   </div>
                   <button className='btn btn-danger btn-sm ml-2' onClick={() => { handleDelete(todo) }}>Delete</button>
                </div>
            );
        })}
        </ul>
    </div>
  )
}
  
export default TodoList
      

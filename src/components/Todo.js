import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>
      <div className='todo-text'>
        <p onClick={() => toggleComplete(task.id)} className={`todo-p ${task.completed ? 'completed' : 'incompleted'}`}>
          {task.task}
        </p>
        <span className='time'>{task.date.toLocaleTimeString()}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className='icon' onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} className='icon' onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}

export default Todo

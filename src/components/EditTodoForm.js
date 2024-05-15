import { faSave } from '@fortawesome/free-regular-svg-icons'
import { faCancel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const EditTodoForm = ({ editTodo, cancelEditing, task }) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault()

        editTodo(value, task.id)

        setValue('')
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' placeholder='Update task' value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>
                <FontAwesomeIcon icon={faSave} />
            </button>
            <button type='button' onClick={() => cancelEditing(task.id)} className='todo-btn'>
                <FontAwesomeIcon icon={faCancel} />
            </button>
        </form>
    )
}

export default EditTodoForm

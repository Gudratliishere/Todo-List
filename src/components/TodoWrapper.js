import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
uuidv4()

const TodoWrapper = () => {

  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos,
    {
      id: uuidv4(),
      task: todo,
      date: new Date(),
      completed: false,
      isEditing: false
    }])
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ?
      { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ?
      { ...todo, isEditing: true } : todo
    ))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? 
      {...todo, task, isEditing: false} : todo
    ))
  }

  const cancelEditing = id => {
    setTodos(todos.map(todo => todo.id === id ? 
      {...todo, isEditing: false} : todo
    ))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get things done!</h1>
      <TodoForm addTodo={addTodo} />
      {
        todos.map((todo, index) => (
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} cancelEditing={cancelEditing} task={todo}/>
          ) : (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
          )
        ))
      }
    </div>
  )
}

export default TodoWrapper

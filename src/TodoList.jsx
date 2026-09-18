import { useContext, useState } from 'react'
import TodoContext from './TodoContext'
import './TodoList.css'
import TodoEdit from './TodoEdit'

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext)
  const [editingId, setEditingId] = useState(null)

  const handleEdit = (id) => {
    setEditingId(id)
  }

  const handleCancel = () => {
    setEditingId(null)
  }

  return (
    <>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            {editingId === todo.id ? (
              <TodoEdit todo={todo} onCancel={handleCancel} />
            ) : (
              <>
                <span
                  className={`todo-text ${todo.completed ? 'completed' : ''}`}
                  onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
                  {todo.text}
                </span>
                <div className="todo-actions">
                  <button className="edit-btn" onClick={() => handleEdit(todo.id)}>
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch({
                        type: 'DELETE_TODO',
                        payload: todo.id
                      })}> X </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
export default TodoList
import { useContext } from 'react'
import TodoContext from './TodoContext'
import './TodoFooter.css'

function TodoFooter() {
  const { todos, dispatch } = useContext(TodoContext)
  const remaining = todos.filter(t => !t.completed).length

  return (
    <div className="todo-footer">
      <p className="items-left">{remaining} item{remaining !== 1 ? 's' : ''} left</p>
      <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })} className="clear-btn">
        Clear completed
      </button>
    </div>
  )
}
export default TodoFooter
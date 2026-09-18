import TodoProvider from './TodoProvider'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import './App.css'

function App() {
  return (
    <TodoProvider>
      <h1>Todo with Context + Reducer</h1>
      <AddTodo />
      <TodoList />
      <TodoFooter />
    </TodoProvider>
  )
}
export default App

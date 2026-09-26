import TodoProvider from './TodoProvider'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import './App.css'
import ExpensiveChild from './ExpensiveChild'
import SortedList from './SortedList'
import Counter from './Counter'
import ProductList from './ProductList'
import CartProvider from "./CartProvider";

function App() {
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grape'
  ]

  return (
    <TodoProvider>
      <div className="todo-container">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <TodoFooter />
      </div>
    </TodoProvider>
    // <ExpensiveChild />
    // <Counter />
    // < SortedList items={items} />
    // <CartProvider>
    //   <ProductList />
    // </CartProvider>
  )
}
export default App


// import { Routes, Route } from 'react-router-dom'
// import Navbar from './Navbar'

// function Home() {
//   return <h2>Home Page</h2>
// }

// function About() {
//   return <h2>About Us</h2>
// }

// function Contact() {
//   return <h2>Contact Page</h2>
// }

// function App() {
//   return (
//     <div>
//       <h1>My Website</h1>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   )
// }

// export default App
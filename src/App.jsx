// import TodoProvider from './TodoProvider'
// import AddTodo from './AddTodo'
// import TodoList from './TodoList'
// import TodoFooter from './TodoFooter'
// import './App.css'
// import ExpensiveChild from './ExpensiveChild'
// import SortedList from './SortedList'
// import Counter from './Counter'
// import ProductList from './ProductList'
// import CartProvider from "./CartProvider";
// import LoginForm from "./LoginForm"
// import SubscribeForm from "./SubscribeForm"
// import ContactForm from "./ContactForm"
// import Form from "./Form"
// import FeedbackForm from "./FeedbackForm"
// import LoginForm2 from "./LoginForm2"
import Comment from "./Comment"

function App() {
  // const items = [
  //   'Apple',
  //   'Banana',
  //   'Orange',
  //   'Mango',
  //   'Grape'
  // ]

  return (
    <>
    {/* <Form />
    <FeedbackForm />
    <LoginForm2 /> */}
    <Comment />
      {/* <LoginForm /> */}
      {/* <SubscribeForm /> */}
      {/* <ContactForm /> */}
      {/* <ExpensiveChild />
      <Counter />
      < SortedList items={items} />
      <CartProvider>
      <ProductList />
      </CartProvider> */}
    </>
  )
}
export default App


// import { Routes, Route } from 'react-router-dom'
// import Navbar from './Navbar'
// import LoginButton from './LoginButton'
// import PostsList from './pages/PostsList'
// import PostDetail from './pages/PostDetail'
// import ProductsPage from './pages/ProductsPage'
// import DashboardLayout from './layout/DashboardLayout'

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

//     // {/* <h1>My Website</h1>
//     // <Navbar />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       {/* <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} /> */}
//       <Route path="/posts" element={<PostsList />} />
//       <Route path="/posts/:postId" element={<PostDetail />} />
//       <Route path='/productspage' element={<ProductsPage />}></Route>

//       <Route path="/dashboard" element={<DashboardLayout />}>
//         <Route index element={<h2>Dashboard Home</h2>} />  {/* default when visiting /dashboard */}
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="*" element={<h2>Not found</h2>} />
//         {/*
//           /dashboard
//           /dashboard/about
//           /dashboard/contact
//           /dashboard/*
//           */}
//       </Route>
//     </Routes>
//     // <LoginButton />
//   )
// }

// export default App

// import { Routes, Route } from 'react-router-dom'
// import RootLayout from './layout/RootLayout'
// import Home from './pages/Home'
// import About from './pages/About'
// import PostsList from './pages/PostsList'
// import PostDetail from './pages/PostDetail'
// import NotFound from './pages/NotFound'

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<RootLayout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="posts" element={<PostsList />} />
//         <Route path="posts/:postId" element={<PostDetail />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   )
// }
// export default App

// import { Suspense, useState } from "react";
// import Post from "./Post";

// function App(){
//   const [postId, setPostId] = useState(1)

//   return(
//     <div>
//       <button onClick={()=> setPostId(1)}>Post 1</button>
//       <button onClick={()=> setPostId(2)}>Post 2</button>
//       <Suspense fallback={<p>Loading post ..</p>}>
//       <Post postId={postId} />
//       </Suspense>
//     </div>
//   )
// }

// export default App
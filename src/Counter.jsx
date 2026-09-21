import { useState, useCallback, memo } from 'react'

const Button = memo(function Button({ onClick, children }) {
  console.log('Button rendered:', children)
  return <button onClick={onClick}>{children}</button>
})

function Counter() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // Without useCallback, this would be a new function every render, causing Button to re-render even when count doesn't change
  const increment = useCallback(() => {
    setCount(c => c + 1)
  }, [])

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  )
}

export default Counter
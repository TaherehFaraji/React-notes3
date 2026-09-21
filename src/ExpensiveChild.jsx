// function ExpensiveChild({ count }) {
//   console.log('Child rendered')
//   return <p>{count}</p>
// }

// export default ExpensiveChild


import { memo } from 'react'

const ExpensiveChild = memo(function ExpensiveChild({ count }) {
  console.log('Child rendered')
  return <p>{count}</p>
})

export default ExpensiveChild
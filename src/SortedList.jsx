import { useMemo, useState } from 'react'

function SortedList({ items }) {
  const [sortOrder, setSortOrder] = useState('asc')

  const sortedItems = useMemo(() => {
    console.log('Sorting...')
    const sorted = [...items]
    sorted.sort((a, b) => sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a))
    return sorted
  }, [items, sortOrder])

  return (
    <div>
      <button onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}>
        Sort {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      </button>
      <ul>
        {sortedItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default SortedList
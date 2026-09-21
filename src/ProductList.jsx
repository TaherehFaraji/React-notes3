
import { useState, useMemo, useCallback, memo } from 'react'

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 79 },
  { id: 4, name: 'Monitor', price: 299 },
]

const ProductItem = memo(function ProductItem({ product, onAdd }) {
  console.log('Rendering product:', product.name)
  return (
    <div>
      <span>{product.name} - ${product.price}</span>
      <button onClick={() => onAdd(product)}>Add</button>
    </div>
  )
})

function ProductList() {
  const [search, setSearch] = useState('')
  const [sortAsc, setSortAsc] = useState(true)

  const filteredSorted = useMemo(() => {
    let filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    filtered.sort((a, b) => sortAsc ? a.price - b.price : b.price - a.price)
    return filtered
  }, [search, sortAsc])

  const handleAdd = useCallback((product) => {
    alert(`Added ${product.name} to cart`)
  }, [])

  return (
    <div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search products..."
      />
      <button onClick={() => setSortAsc(prev => !prev)}>
        Sort by price {sortAsc ? '↓' : '↑'}
      </button>
      {filteredSorted.map(product => (
        <ProductItem key={product.id} product={product} onAdd={handleAdd} />
      ))}
    </div>
  )
}
export default ProductList
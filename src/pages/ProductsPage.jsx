
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const allProducts = [
  { id: 1, name: 'Laptop', category: 'electronics' },
  { id: 2, name: 'Shirt', category: 'clothing' },
  { id: 3, name: 'Headphones', category: 'electronics' },
]

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFilter = searchParams.get('category') || ''

  const filteredProducts = categoryFilter
    ? allProducts.filter(p => p.category === categoryFilter)
    : allProducts

  return (
    <div>
      <h2>Products</h2>
      <div>
        <button onClick={() => setSearchParams({ category: 'electronics' })}>Electronics</button>
        <button onClick={() => setSearchParams({ category: 'clothing' })}>Clothing</button>
        <button onClick={() => setSearchParams({})}>All</button>
      </div>
      <ul>
        {filteredProducts.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link> - {p.category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage
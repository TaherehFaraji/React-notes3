import { useContext, useMemo, useCallback, memo } from "react"
import CartContext from "./CartContext"
import './ProductList.css'

const products = [
  { id: 1, name: 'Laptop', price: 999, quantity: 0, available: true },
  { id: 2, name: 'Mouse', price: 25, quantity: 0, available: true },
  { id: 3, name: 'Keyboard', price: 79, quantity: 0, available: false },
  { id: 4, name: 'Monitor', price: 299, quantity: 0, available: true },
  { id: 5, name: 'Headset', price: 345, quantity: 0, available: false }
]

const ProductItem = memo(function ProductItem({ product, onAdd }) {
  return (
    <div className="product-card">
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <p className={product.available ? "available" : "unavailable"}>
          {product.available ? "موجود" : "ناموجود"}
        </p>
        <button className="add-button" onClick={() => onAdd(product)} disabled={!product.available}>افزودن به سبد خرید</button>
      </div>
    </div>
  )
})

function ProductList() {
  const { state, dispatch } = useContext(CartContext)
  const { search, sortAsc, cart, availability } = state

  const filteredSorted = useMemo(() => {
    let filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    if (availability === 'available') {
      filtered = filtered.filter(p => p.available)
    }
    if (availability === 'unavailable') {
      filtered = filtered.filter(p => !p.available)
    }
    filtered.sort((a, b) => sortAsc ? a.price - b.price : b.price - a.price)
    return filtered
  }, [search, sortAsc, availability])

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }, [cart])

  const handleAdd = useCallback((product) => {
    dispatch({
      type: 'ADD',
      payload: product
    })
  }, [dispatch])

  const handleRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE',
      payload: id
    })
  }, [dispatch])

  const handleClear = useCallback(() => {
    dispatch({
      type: 'CLEAR'
    })
  }, [dispatch])

  return (
    <div className="product-page">
      <aside className="filter-sidebar">
        <h2>فیلتر محصولات</h2>
        <label>
          <input
            type="radio"
            name="availability"
            checked={availability === 'all'}
            onChange={() =>
              dispatch({
                type: 'SET_AVAILABILITY',
                payload: 'all'
              })
            }
          />
          همه محصولات
        </label>

        <label>
          <input
            type="radio"
            name="availability"
            checked={availability === 'available'}
            onChange={() =>
              dispatch({
                type: 'SET_AVAILABILITY',
                payload: 'available'
              })
            }
          />
          محصولات موجود
        </label>

        <label>
          <input
            type="radio"
            name="availability"
            checked={availability === 'unavailable'}
            onChange={() =>
              dispatch({
                type: 'SET_AVAILABILITY',
                payload: 'unavailable'
              })
            }
          />
          محصولات ناموجود
        </label>
      </aside>

      <main className="product-section">
        <div className="product-toolbar">
          <input
            className="search-input"
            value={search}
            onChange={(e) =>
              dispatch({
                type: "SET_SEARCH",
                payload: e.target.value,
              })
            }
            placeholder="جستجوی محصول..."
          />
          <button
            className="sort-button"
            onClick={() =>
              dispatch({
                type: "TOGGLE_SORT",
              })
            }>
            مرتب‌سازی قیمت {sortAsc ? "↑" : "↓"}
          </button>
        </div>

        <div className="product-grid">
          {filteredSorted.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onAdd={handleAdd}
            />
          ))}
        </div>
      </main>

      <aside className="cart-sidebar">
        <div className="cart-header">
          <h2>سبد خرید</h2>
        </div>
        {cart.length === 0 ? (
          <p className="empty-cart">
            سبد خرید خالی است
          </p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div>
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                    <span>
                      تعداد: {item.quantity}
                    </span>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="remove-button">
                    حذف
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <strong>مجموع:</strong>
              <span>${totalPrice}</span>
            </div>
            <button
              className="clear-button"
              onClick={handleClear}>
              خالی کردن سبد
            </button>
          </>
        )}
      </aside>
    </div>
  )
}
export default ProductList
import { useReducer } from "react";
import CartContext from "./CartContext";

const initialState = {
    cart: [],
    search: '',
    sortAsc: true,
    availability: 'all'
}

function CartReducer(state, action) {
    switch (action.type) {
        case 'SET_SEARCH':
            return { ...state, search: action.payload }
        case 'TOGGLE_SORT':
            return { ...state, sortAsc: !state.sortAsc }
        case 'SET_AVAILABILITY':
            return { ...state, availability: action.payload }
        case 'ADD':
            {
                const product = action.payload
                if (!product.available) {
                    return state
                }

                const existingItem = state.cart.find(item => item.id === product.id)
                if (existingItem) {
                    return {
                        ...state, cart: state.cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
                    }
                }

                return { ...state, cart: [...state.cart, { ...product, quantity: 1 }] }
            }
        case 'REMOVE':
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) }
        case 'UPDATE':
            return { ...state, cart: state.cart.map(item => item.id === action.payload.id ? { ...item, ...action.payload } : item) }
        case 'CLEAR':
            return { ...state, cart: [] }
        default:
            return state
    }
}

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(CartReducer, initialState)
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
import { createContext, ReactNode, useEffect, useState } from 'react'
import { MovieItem } from '../pages/Home'

export interface CartItem extends MovieItem {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCartItem: (CartItem: CartItem) => void
  changeQuantity: (id: number, type: 'increase' | 'decrease') => void
  removeCartItem: (id: number) => void
  quantityMovieSelected: (id: number) => number
  finishOrder: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(verifyLocalStorage())

  function verifyLocalStorage() {
    const storedCartItems = localStorage.getItem('@wefit:cartItems')
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  }

  const cartQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0)

  const cartItemsTotal = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  )

  const quantityMovieSelected = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function addCartItem(CartItem: CartItem) {
    const isItemAlreadyAdded = cartItems.findIndex(
      (item) => item.id === CartItem.id
    )

    if (isItemAlreadyAdded < 0) {
      setCartItems((prevState) => [...prevState, CartItem])
    } else {
      const updatedCartItems = cartItems.map((item, i) => {
        if (i === isItemAlreadyAdded) {
          return {
            ...item,
            quantity: item.quantity + CartItem.quantity,
          }
        }
        return item
      })

      setCartItems(updatedCartItems)
    }
  }

  function changeQuantity(id: number, type: 'increase' | 'decrease') {
    const isItemAlreadyAdded = cartItems.findIndex((item) => item.id === id)

    if (isItemAlreadyAdded >= 0) {
      const newCart = cartItems.map((item, i) => {
        if (i === isItemAlreadyAdded) {
          return {
            ...item,
            quantity:
              type === 'increase' ? item.quantity + 1 : item.quantity - 1,
          }
        }
        return item
      })

      setCartItems(newCart)
    }
  }

  function removeCartItem(id: number) {
    const isItemAlreadyAdded = cartItems.findIndex((item) => item.id === id)

    if (isItemAlreadyAdded >= 0) {
      const newCart = cartItems.filter((item) => item.id !== id)
      setCartItems(newCart)
    }
  }

  function finishOrder() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem('@wefit:cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCartItem,
        changeQuantity,
        removeCartItem,
        quantityMovieSelected,
        finishOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

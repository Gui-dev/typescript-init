import React, { useContext, createContext } from 'react'

interface ICartProps {
  id: number,
  name: string,
  price: number
}

interface ICart {
  products?: ICartProps[],
  shipping_value?: number,
}

export const CartContext = createContext<ICart>( { products: [], shipping_value: 0 } )

export const CartProvider: React.FC = ( { children } ) => {
  
  return (
    <CartContext.Provider value={ {} }>
      { children }
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext( CartContext )
  return context
}

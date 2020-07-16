import React, { useEffect, useCallback, useMemo, useRef, useState } from 'react'

import axios from 'axios'
import api from './services/api'
import User from './components/User'
import { CartProvider, useCart } from './contexts/CartContext'

interface IUser {
  name: string,
  email: string,
}

interface IData {
  name: string,
  login: string,
  avatar_url: string,
}

function App() {

  const inputRef = useRef<HTMLInputElement>( null )
  const [ users, setUsers ] = useState<IUser[]>( [] )
  const [ data, setData ] = useState<IData>()

  const { products } = useCart()

  useEffect( () => {
    api.get<IUser[]>( '/users' )
      .then( response => {
        setUsers( response.data )
      } )
  }, [] )

  useEffect( () => {
    async function loadData() {
      const response = await axios.get( 'https://api.github.com/users/diego3g' )
      setData( response.data )
    }
    loadData()
  }, [] )

  const names = useMemo( () => users?.map( user => user.name ).join( ', ' ), [] )

  const greeting = useCallback( 
    () => alert( `Hello ${ names }` ),
    [ names ]
  )

  inputRef.current?.focus()

  return (
    <CartProvider>
      <div>
        { users.map( user => (
          <User user={ user } key={ user.name }/>
        ) ) }
        <br/>
        <div>
          { data?.name }
        </div>
        <form>
          <input type="text" ref={ inputRef }/>
        </form>
        <br/>
        <ul>
        { products?.map( product => (
          <li>{ product.name }</li>  
        ) ) }
        </ul>
        <br/>
      </div>
    </CartProvider>
  )
}

export default App

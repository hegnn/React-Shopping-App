import React from 'react'
import Products from './components/Products/Products'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import CartLayout from './components/Cart/Layout/CartLayout'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/CheckoutForm/Checkout/Checkout'
import ProductDetail from './components/Products/ProductDetail/ProductDetail'


function App() {

  const [productList, setProductList] = useState([])
  const [cartItems, setCartItems] = useState([])
  
  const fetchProducts = async () => {
       await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProductList(json))
  }

  useEffect(()=>(
    fetchProducts()
  ),[])

  const getTotalItems = (items) => items.reduce((ack, item) => ack+ item.amount, 0) 

  const handleAddToCart = (clickedItem) => {
    setCartItems(prev =>{
      const isInTheCart = prev.findIndex((item)=> item.id === clickedItem.id )

      if(isInTheCart !== -1){
        return prev.map(item => (
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
        ))
      }

      return [...prev, {...clickedItem, amount: 1}]
    })
  }

  const handleRemoveFromCart = (id) => {
    setCartItems(prev => 
      prev.reduce((ack, item) => {
        if(item.id === id){
          if(item.amount === 1) 
            return ack
          else
            return [...ack, {...item, amount: item.amount -1}]
        } 
        else{
          return [...ack, item]
        }
      }, []
      )
    )
  }

  const deleteFromCart = (id) => (
    setCartItems(prev =>
      prev.filter((item) => item.id !== id)
    )  
)
  
  const deleteAllCart = () => (setCartItems([]))

  return (
    <Router>
      <div>
          <Navbar 
            totalItems={getTotalItems(cartItems)} 
            cartList={cartItems} 
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />

          <Switch>
            <Route exact path="/">
              <Products productList={productList} funcAddToCart={handleAddToCart} />
            </Route>

            <Route exact path="/cart">
              <CartLayout 
                cartItems={cartItems}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
                deleteFromCart={deleteFromCart}
                deleteAllCart={deleteAllCart}
              />
            </Route>

            <Route exact path="/checkout">
              <Checkout cartItems={cartItems} deleteAllCart={deleteAllCart}/>
            </Route>

            <Route exact path="/prod/:id" >
              <ProductDetail addToCart={handleAddToCart} />
            </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;

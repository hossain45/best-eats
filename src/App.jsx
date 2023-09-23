import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer"
import About from "./components/About"
import Home from "./components/Home"

function App() {
  // state for cart item handling 
  const [cart, setCart] = useState([])
  const [count, setCount] = useState({});
  const [price, setPrice] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCart = (food) => {
    let newCart = [...cart, food]
    const isAdded = cart.find((newCartItem) => food.id === newCartItem.id)
    if(isAdded){
      alert('already added to the cart')
      return
    } else {
      setCart(newCart)
      handleCountPlus(food.id)
      // localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
  
  const handleCountPlus = (id) => {
    let currentCount = count[id] || 0
    let newCount = currentCount + 1
    setCount((prevCount) => ({
      ...prevCount,
      [id]: newCount,
    }))
  }
  const handleCountMinus = (id) => {
    let currentCount = count[id] || 1
    if(currentCount === 1) {
      handleDelete(id)
    } else {
      let newCount = currentCount - 1
      setCount((prevCount) => ({
        ...prevCount,
        [id]: newCount,
      }))
    }
  }
  useEffect(() => {
    let newPrices = {}
    cart.forEach((item) => {
      const id = item.id 
      let newPrice = item.price * count[id]
      newPrices[id] = newPrice.toFixed(2)            
    })
    setPrice(newPrices)
  },[cart, count])

  useEffect(() => {
    let newTotalPrice = 0;
    Object.values(price).forEach((itemPrice) => {
      newTotalPrice += parseFloat(itemPrice);
    });
    setTotalPrice(newTotalPrice.toFixed(2));
  }, [price]);

  const handleDelete = (cartId) => {
    let newCart = [...cart]  
    newCart = newCart.filter((item) => item.id !== cartId)
    setCart(newCart)
  }

  return (
    <>
      <Navbar         
        cart={cart}
        count={count}
        price={price}
        totalPrice={totalPrice}
        handleCountPlus={handleCountPlus}
        handleCountMinus={handleCountMinus}
        handleDelete={handleDelete}
      />
      <Routes>                
        <Route 
          path='/'   
          
          element={<Home handleCart={handleCart}/>} />
        <Route path='/about' element={<About />}/>          
      </Routes>
      <Footer />
    </>
  )
}

export default App

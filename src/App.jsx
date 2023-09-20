import { useState, useEffect } from "react"
import FoodUI from "./components/FoodUI"
import HeadlineCards from "./components/HeadlineCards"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

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
    let currentCount = count[id] || 0
    if(currentCount === 0) return
    let newCount = currentCount - 1
    setCount((prevCount) => ({
      ...prevCount,
      [id]: newCount,
    }))
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
  return (
    <>
      <Navbar 
        
        cart={cart}
        count={count}
        price={price}
        totalPrice={totalPrice}
        handleCountPlus={handleCountPlus}
        handleCountMinus={handleCountMinus}
      />
      <Hero />
      <HeadlineCards />
      <FoodUI 
        handleCart={handleCart}
      />
    </>
  )
}

export default App

import { useState } from "react"
import FoodUI from "./components/FoodUI"
import HeadlineCards from "./components/HeadlineCards"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  // state for cart item handling 
  const [cart, setCart] = useState([])

  const handleCart = (food) => {
    let newCart = [...cart, food]
    const isAdded = cart.find((newCartItem) => food.id === newCartItem.id)
    if(isAdded){
      alert('already added to the cart')
      return
    } else {
      setCart(newCart)
    }
  }

  return (
    <>
      <Navbar 
        
        cart={cart}
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

import { useState, useEffect, createContext } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
export const HandleCartContext = createContext();

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
      // alert('already added to the cart')
      Toastify({
        text: "Already added to the cart",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} 
      }).showToast();
      return
    } else {
      Toastify({
        text: `${food.name} added to the cart`,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #FF6600, #FF9900)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      
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
      <HandleCartContext.Provider value={handleCart}>
        <Outlet />
      </HandleCartContext.Provider>
      <Footer />
    </>
  )
}

export default App

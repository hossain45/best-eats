import { useState, useEffect, createContext } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
export const HandleCartContext = createContext();
export const HandleFavouriteContext = createContext();
export const FavouriteItemsContext = createContext();

function App() {
  // state for cart item handling 
  const [cart, setCart] = useState([])
  const [favourite, setFavourite] = useState([])
  const [count, setCount] = useState({});
  const [price, setPrice] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
    
  const handleFavourite = (food) => {
 
    let newFavourite = [...favourite, food]
    const isAdded = favourite.find(
      (newFavouriteItem) => food.id === newFavouriteItem.id
    );
    if(isAdded){
      Toastify({
        text: "Already added to the FAVOURITES",
        duration: 1000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} 
      }).showToast();
      return
    } else {
      Toastify({
        text: `${food.name} added to the FAVOURITE`,
        duration: 1000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #FF6600, #FF9900)",
        },
        onClick: function(){} 
      }).showToast();
      
      setFavourite(newFavourite)
      localStorage.setItem("favItems", JSON.stringify(newFavourite));
    }
  }
  
  const handleCart = (food) => {
    let newCart = [...cart, food]
    const isAdded = cart.find((newCartItem) => food.id === newCartItem.id)
    if(isAdded){
      Toastify({
        text: "Already added to the cart",
        duration: 1000,
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
        duration: 1000,
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
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    }
  }
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(savedCartItems);
    const savedFavItems = JSON.parse(localStorage.getItem("favItems")) || [];
    setFavourite(savedFavItems);
    const savedTotalPrice = JSON.parse(localStorage.getItem("totalPrice")) || '';
    setTotalPrice(savedTotalPrice);
    const savedPrice = JSON.parse(localStorage.getItem("prices")) || "";
    setPrice(savedPrice);
    const savedCount = JSON.parse(localStorage.getItem("count")) || "";
    setCount(savedCount);

  }, []);

  const handleCountPlus = (id) => {
    let currentCount = count[id] || 0
    let newCount = currentCount + 1
    setCount((prevCount) => ({
      ...prevCount,
      [id]: newCount,
    }))
    const updatedCount = {
      ...count,
      [id]: newCount,
    };
    localStorage.setItem(
      "count",
      JSON.stringify(updatedCount)
    );
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
      const updatedCount = {
        ...count,
        [id]: newCount,
      };
      localStorage.setItem(
        "count",
        JSON.stringify(updatedCount)
      );
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
        localStorage.setItem(
          "totalPrice",
          JSON.stringify(newPrices)
        );
  },[cart, count])

  useEffect(() => {
    let newTotalPrice = 0;
    Object.values(price).forEach((itemPrice) => {
      newTotalPrice += parseFloat(itemPrice);
    });
    setTotalPrice(newTotalPrice.toFixed(2));
    localStorage.setItem("totalPrice", JSON.stringify(newTotalPrice.toFixed(2)));
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
      <FavouriteItemsContext.Provider value={favourite}>
        <HandleFavouriteContext.Provider value={handleFavourite} >
          <HandleCartContext.Provider value={handleCart}>
            <Outlet />
          </HandleCartContext.Provider>      
        </HandleFavouriteContext.Provider >
      </FavouriteItemsContext.Provider>
      <Footer />
    </>
  )
}

export default App

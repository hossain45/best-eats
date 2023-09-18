// import { useState } from "react"

import { useEffect, useState } from "react"

const Cart = ({ cart }) => {
  const [count, setCount] = useState({})
  console.log((count));

  const handleCountPlus = (id) => {
    let currentCount = count[id] || 1
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

  return (
    <div>
      {
        cart.map((cartItem) => (
          <div key={ cartItem.id } className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img className="h-[70px] w-[70px]" src={cartItem.image} alt={cartItem.name} />
              <div>
                <h2 className="text-xl font-bold">{cartItem.name}</h2>
                <p className="font-semibold">Price: $ {cartItem.price}</p>
              </div>
            </div>
            <div className="text-center ">
              <button onClick={() => handleCountPlus(cartItem.id)} className="border-none text-3xl px-1 py-1 hover:bg-slate-100 ">+</button>
              <p className="text-xl">{count[cartItem.id] !== undefined ? count[cartItem.id] : 1}</p>
              <button onClick={() => handleCountMinus(cartItem.id)} className="border-none text-3xl px-1 py-1 hover:bg-slate-100">-</button>
            </div>
          </div>          
        ))
      }
      {/* total price */}
      <div className="mt-20 flex justify-between items-center border-t-2 border-gray-700 text-xl">         
        <p>Total Price:</p>
        <p>0000</p>
      </div>
      {/* proceed to order btn */}
      <button className='border-2 border-orange-500 text-orange-500 p-1 rounded-lg hover:bg-orange-600 hover:text-white cursor-pointer w-full text-xl mt-5'>Confirm Order</button>
    </div>
  )
}

export default Cart
import {  useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const Cart = ({ cart, handleCountPlus, handleCountMinus, count, price, totalPrice }) => {
  
  
  


  return (
    <div>
      {
        cart.map((cartItem) => (
          <div key={ cartItem.id } className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img className="h-[70px] w-[70px]" src={cartItem.image} alt={cartItem.name} />
              <div>
                <h2 className="text-xl font-bold">{cartItem.name}</h2>
                {/* same result can be done by both ternary operaor and useEffect */}
                {/* {cartItem.price * (count[cartItem.id] !== undefined ? count[cartItem.id] : 1)} */}
                <p className="font-semibold item-price">Price: $ {price[cartItem.id]} </p>
              </div>
            </div>
            <div className="text-center ">
              <button onClick={() => handleCountPlus(cartItem.id)} className="border-none text-3xl px-1 py-1 hover:bg-slate-100 ">+</button>
              {/* <p className="text-xl ">{count[cartItem.id] !== undefined ? count[cartItem.id] : 1}</p> */}
              <p className="text-xl ">{count[cartItem.id]}</p>
              <button onClick={() => handleCountMinus(cartItem.id)} className="border-none text-3xl px-1 py-1 hover:bg-slate-100">-</button>
            </div>
          </div>          
        ))
      }
      {/* total price */}
      <div className="mt-20 flex justify-between items-center border-t-2 border-gray-700 text-xl">         
        <p>Total Price:</p>
        <p>{totalPrice}</p>
      </div>
      {/* proceed to order btn */}
      <button className='border-2 border-orange-500 text-orange-500 p-1 rounded-lg hover:bg-orange-600 hover:text-white cursor-pointer w-full text-xl mt-5'>Confirm Order</button>
    </div>
  )
}

export default Cart
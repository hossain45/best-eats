// import { useState } from "react"

const Cart = ({ cart }) => {
  // console.log(cart);
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
              <button className="border-none text-3xl px-1 py-1 hover:bg-slate-100 ">+</button>
              <p className="text-xl">5</p>
              <button className="border-none text-3xl px-1 py-1 hover:bg-slate-100">-</button>
            </div>
          </div>          
        ))
      }
      {/* total price */}
      <div className="flex justify-between items-center border-t-2 border-gray-700 text-xl">         
        <p>Total Price:</p>
        <p>0000</p>
      </div>
    </div>
  )
}

export default Cart
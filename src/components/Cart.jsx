
// eslint-disable-next-line react/prop-types
const Cart = ({ cart, handleCountPlus, handleCountMinus, count, totalPrice, handleDelete }) => {

  return (
    <div>
      {
        cart.map((cartItem) => (
          <div key={ cartItem.id } className="flex justify-between items-center p-1 border shadow-md rounded-lg">
            <div className="flex gap-3 items-center">
              <img className="h-[70px] w-[70px] object-cover" src={cartItem.image} alt={cartItem.name} />
              <div>
                {/* same result can be done by both ternary operaor and useEffect */}
                {/* {cartItem.price * (count[cartItem.id] !== undefined ? count[cartItem.id] : 1)} */}
                <h2 className="text-xl font-bold">{cartItem.name}</h2>
                <div className="flex justify-between items-center">
                  <p className="font-semibold item-price">{count[cartItem.id]} x <span  className="text-orange-500">$ {cartItem.price}</span></p>
                  <button onClick={() => handleDelete(cartItem.id)} className=" hover:bg-slate-100 border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30"  className="block m-0 p-0">
                      <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                    </svg>
                  </button>
                </div>
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
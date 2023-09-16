import React, { useState } from 'react'
import { data } from '../data/data'
const FoodUI = () => {
  const [foods, setFoods] = useState(data)

  return (
    <div className='max-w-[1640px] mx-auto flex flex-col justify-between items-center p-4'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items 
      </h1>
      {/* filter row */}
      <div className='flex flex-col items-center text-center lg:flex-row justify-between gap-10 w-full'>
        {/* filter type */}
        <div>
          <p className='font-bold text-gray-700 text-xl'>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All </button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Burgers</button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizza</button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Salad</button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Chicken</button>
          </div>
        </div>
        {/* filter row */}
        <div>
          <p className='font-bold text-gray-700 text-xl'>Filter Price</p>
          <div>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$</button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$</button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$</button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$$</button>
          </div>
        </div>
      </div>
      {/* display foods */}
      <div className='grid  grid-cols-2 lg:grid-cols-4 gap-6 pt-2'>
        {foods.map((food, index) => (
          <div key={index} className='border shadow-lg hover:scale-105'>
            <img src={food.image} alt={food.name} 
              className='w-full h-[200px] object-cover rounded-t-lg '
            />
            <div className='flex justify-between px-2 py-4 '>
              <p className='font-bold'>{food.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded'>{food.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodUI
import { useState } from 'react'
import { data } from '../data/data'

const FoodUI = ({ handleCart, foodsData }) => {
  const [foods, setFoods] = useState(data)
  console.log(foodsData);
  const filterType = (category) => {
    setFoods(
      data.filter((food) => {
        return food.category === category
      })
    )
  }
  const filterPrice = (price) => {
    setFoods(
      data.filter((food) => {
        return food.price <=price
      })
    )
  }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items 
      </h1>
      {/* filter row */}
      <div className='flex flex-col items-center text-center lg:flex-row justify-between gap-10 w-full'>
        {/* filter type */}
        <div>
          <p className='font-bold text-gray-700 text-xl'>Filter Type</p>
          <div className='flex justify-center flex-wrap'>
            <button onClick={() => setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All </button>
            <button onClick={() => filterType('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Burgers</button>
            <button onClick={() => filterType('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizza</button>
            <button onClick={() => filterType('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Salad</button>
            <button onClick={() => filterType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Chicken</button>
          </div>
        </div>
        {/* filter row */}
        <div>
          <p className='font-bold text-gray-700 text-xl'>Filter Price Under</p>
          <div>
            <button onClick={() => filterPrice(50)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$ 50</button>
            <button onClick={() => filterPrice(80)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$ 80</button>
            <button onClick={() => filterPrice(100)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$ 100</button>
            <button onClick={() => filterPrice(150)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$ 150</button>
          </div>
        </div>
      </div>
      {/* display foods */}
      <div className='grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4 rounded-lg'>
        {foods.map((food, index) => (
          <div key={index} className=' border shadow-lg hover:scale-105 duration-300'>
            <div className='relative'>
              <img src={food.image} alt={food.name} 
                className='w-full h-[200px] object-cover rounded-t-lg'
              />
              <p>
                <span className='absolute right-2 bottom-4  bg-orange-500 text-white p-1 rounded w-[50px] text-center'>$ {food.price}</span>
              </p>
            </div>
            <div className='flex justify-between px-2 py-4 '>
              <p className='font-bold'>{food.name}</p>
              <p>
                <span onClick={() => handleCart(food)} className='border-2 border-orange-500 text-orange-500 p-1 rounded-lg hover:bg-orange-600 hover:text-white cursor-pointer'>Order Now</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodUI
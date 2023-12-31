import { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillInfoSquareFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaUserFriends } from 'react-icons/fa'
import { BiLogIn } from 'react-icons/bi'
import Cart from './Cart'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Navbar = ({ cart, handleCountPlus, handleCountMinus, count, price, totalPrice, handleDelete }) => {
  // state for menu bar
  const [nav, setNav] = useState(false)
  // state for cart drawer
  const [section, setSection] = useState(false)
  

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 sticky top-0 z-10 bg-white/90'>
      {/* left side */}
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30}/>
        </div>
        <Link to='/'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 '>
            Best <span className='font-bold'>Eats</span>
          </h1>
        </Link>        
        <div className='hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery </p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      {/* right side */}
      {/* search input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[100px] sm:w-[300px] lg:w-[500px]'>
        <AiOutlineSearch size={20}/>
        <input type="text" placeholder='Search food...' className='bg-transparent p-2 focus:outline-none w-full'/>
      </div>
      {/* cart btn */}
      <button onClick={() => setSection(!section)} className='bg-black text-white sm:flex items-center py-2 rounded-full'>  
        <BsFillCartFill size={20} className='sm:mr-2'/> <span className='hidden sm:flex'> Cart</span>
      </button>

      {/* mobile menuu */}
        {/* overlay */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
        
        {/* left side drawer menu */}
        <div  className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white/90 z-10 duration-300' 
        : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white/90 z-10 duration-300'}>
          <AiOutlineClose 
            size={30} 
            className='absolute top-4 right-4 cursor-pointer hover:scale-110 hover:bg-black/5'
            onClick={() => setNav(!nav)}  
          />
          <h2 className='text-2xl p-4 '>
          Best <span className='font-bold '>Eats</span>
          </h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-900'>
              <Link to={'/login'}>
                <li onClick={() => setNav(!nav)} className='text-xl py-4 flex cursor-pointer hover:scale-110 hover:bg-black/5  '>
                  <BiLogIn size={25} className='mr-4'/> Login  
                </li>
              </Link>
              <li className='text-xl py-4 flex cursor-pointer hover:scale-110 hover:bg-black/5  '>
                <TbTruckDelivery size={25} className='mr-4'/> Orders
              </li>
              <Link to={'/favourite'}>
                <li onClick={() => setNav(!nav)} className='text-xl py-4 flex cursor-pointer hover:scale-110 hover:bg-black/5  '>
                  <MdFavorite size={25} className='mr-4'/> Favourites
                </li>              
              </Link>
              <li className='text-xl py-4 flex cursor-pointer hover:scale-110 hover:bg-black/5  '>
                <MdHelp size={25} className='mr-4'/> Help 
              </li>
              <li className='text-xl py-4 flex cursor-pointer hover:scale-110 hover:bg-black/5  '>
                <AiFillTag size={25} className='mr-4'/> Promotions 
              </li>
              <li className='text-xl py-4 flex cursor-pointer hover:scale-110 hover:bg-black/5  '>
                <BsFillSaveFill size={25} className='mr-4'/> Best Ones 
              </li>
              <li className='text-xl py-4 flex cursor-pointer hover:scale-110 hover:bg-black/5  '>
                <FaUserFriends size={25} className='mr-4'/> Invite Friends
              </li>
              <Link to='/about'>
                <li className='text-xl py-4 flex cursor-pointer hover:scale-110 hover:bg-black/5' onClick={() => setNav(!nav)}>
                  <BsFillInfoSquareFill size={25} className='mr-4 '/> About Us
                </li>
              </Link>
            </ul>
          </nav>
        </div> 

      {/* cart section */}
        {/* overlay */}
        {section ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 right-0'></div> : ''}
        
        {/* cart drawer menu */}
        <div  className={section ? 'fixed top-0 right-0 w-[300px] h-screen bg-white/90 z-10 duration-300' 
        : 'fixed top-0 right-[-100%] w-[300px] h-screen bg-white/90 z-10 duration-300'}>
          <AiOutlineClose 
            size={30} 
            className='absolute top-4 right-4 cursor-pointer hover:scale-110 hover:bg-black/5'
            onClick={() => setSection(!section)}  
          />
          <h2 className='text-2xl p-4 '>
            Your Cart 
          </h2>
          <div>
            <ul className='flex flex-col p-4 text-gray-900'>

              <Cart 
                cart={cart}
                count={count}
                price={price}
                totalPrice={totalPrice}
                handleCountPlus={handleCountPlus}
                handleCountMinus={handleCountMinus}
                handleDelete={handleDelete}
              />
            </ul>
          </div>
        </div>
           
    </div>
  )
}

export default Navbar
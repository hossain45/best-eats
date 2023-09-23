import { useLoaderData } from "react-router-dom";
import { HandleCartContext, HandleFavouriteContext } from '../App'
import { useContext } from "react";



const Food = () => {
  const food = useLoaderData();
  const handleCart = useContext(HandleCartContext)
  const handleFavourite = useContext(HandleFavouriteContext);
 
  return (
    <>
      <div className=" flex-col sm:flex justify-center items-center ">
        <div className=" border shadow-lg hover:scale-105 duration-300 my-5 sm:my-10 md:my-20 mx-2 sm:mx-auto">
          <div className="relative">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-[250px] sm:h-[400px] object-cover rounded-t-lg "
            />
            <p>
              <span className="absolute right-2 bottom-4  bg-orange-500 text-white p-1 rounded w-[50px] text-center">
                $ {food.price}
              </span>
            </p>
          </div>
          <div className="flex justify-between px-2 py-4 ">
            <p className="font-bold">{food.name}</p>
            <div className="flex justify-center items-center gap-2">
              <p>
                <span
                  onClick={() => handleCart(food)}
                  className="border-2 border-orange-500 text-orange-500 p-1 rounded-lg hover:bg-orange-600 hover:text-white cursor-pointer"
                >
                  Order Now
                </span>
              </p>
              <p>
                <span
                  onClick={() => handleFavourite(food)}
                  className="border-2 border-orange-500 text-orange-500 p-1 rounded-lg hover:bg-orange-600 hover:text-white cursor-pointer"
                >
                  Favourite
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food
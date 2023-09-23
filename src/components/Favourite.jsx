import { useContext } from "react";
import { HandleCartContext, FavouriteItemsContext } from "../App";
import { Link } from "react-router-dom";

const Favourite = () => {

  const handleCart = useContext(HandleCartContext);
  const favouriteItems = useContext(FavouriteItemsContext);

  return (
    <div className="max-w-[1640px] m-auto px-4 my-5 ">
      <p className="text-5xl text-center">Your Favourite FOODS!</p>
      <div className={favouriteItems.length !== 0 ? "my-5 sm:my-10 md:my-20 grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4 rounded-lg" : "mb-48"}>
        {favouriteItems.map((food, index) => (
          <div
            key={index}
            className=" border shadow-lg hover:scale-105 duration-300"
          >
            <div className="relative group">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-[200px] object-cover rounded-t-lg hover:opacity-80 "
              />
              <p>
                <span className="absolute right-2 bottom-4  bg-orange-500 text-white p-1 rounded w-[50px] text-center opacity-100 duration-300 group-hover:opacity-0">
                  $ {food.price}
                </span>
              </p>
              <p>
                <Link to={`/${food.id}`}>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ms-transform bg-orange-500 text-white p-1 rounded w-[50px] text-center opacity-0 duration-300 group-hover:opacity-100 hover:scale-110">
                    View
                  </span>
                </Link>
              </p>
            </div>
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold">{food.name}</p>
              <p>
                <span
                  onClick={() => handleCart(food)}
                  className="border-2 border-orange-500 text-orange-500 p-1 rounded-lg hover:bg-orange-600 hover:text-white cursor-pointer"
                >
                  Order Now
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;

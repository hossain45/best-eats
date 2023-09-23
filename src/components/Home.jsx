/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom"
import FoodUI from "./FoodUI"
import HeadlineCards from "./HeadlineCards"
import Hero from "./Hero"


const Home = () => {

  const foodsData = useLoaderData();
  return (
    <>
      <Hero />
      <HeadlineCards />
      <FoodUI 
        foodsData={foodsData}
        // handleCart={handleCart}
      />
    </>
  )
}

export default Home
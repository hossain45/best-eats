/* eslint-disable react/prop-types */
import FoodUI from "./FoodUI"
import HeadlineCards from "./HeadlineCards"
import Hero from "./Hero"


const Home = ({ handleCart }) => {
  return (
    <>
      <Hero />
      <HeadlineCards />
      <FoodUI 
        handleCart={handleCart}
      />
    </>
  )
}

export default Home
import { Link } from "react-router-dom"
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="p-10 bg-black text-white sm:py-20 px-16">
			<div>        
				<div className="mx-auto flex justify-center items-center">
          <h2 className='text-3xl p-4 '>
            Best <span className='font-bold '>Eats</span>
          </h2>				
        </div> 
			</div> 
			<div className="flex flex-wrap gap-7 justify-center items-center">        
				<a href="#">
					Home
				</a>
				<a href="#">
					About Us
				</a>
				<a href="#">
					Shop
				</a>
				<a href="#">
					Support
				</a>
				<a href="#">
					My Account
				</a>
			</div>
			<div>
				<div className="grid grid-flow-col gap-4 place-content-center my-5">
					<Link className="text-2xl"><AiFillInstagram /></Link>
					<Link className="text-2xl"><FaXTwitter /></Link>
					<Link className="text-2xl"><AiFillFacebook /></Link>          
				</div>
			</div>
      <p className="text-center text-gray-400 mt-4">
        &copy; All rights reserved @Hossain45
      </p>
		</footer>
  )
}

export default Footer
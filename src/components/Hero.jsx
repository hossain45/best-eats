

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      {/* overlay */}
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full bg-gradient-to-r from-black/60 to-black/10 text-gray-200 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg-text-7xl font-bold'>
            The <span className='text-orange-500 '>Best</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg-text-7xl font-bold'>
            Food <span className='text-orange-500 '>Delivered</span>
          </h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1998927/pexels-photo-1998927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />      
      </div>
    </div>
  )
}

export default Hero
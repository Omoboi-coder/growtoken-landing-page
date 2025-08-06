import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      {/* Nav bar container */}
      <nav className='bg-growtoken-dark'>
        {/* Flex container */}
        <div className="flex justify-center md:justify-between px-7 pt-8 mx-auto items-center md:items-end relative
         md:w-[1,440px] md:h-[80px] md:px-25 md:pt-0">
          
          {/* Logo */}
          <div className="flex">
            <Image
              src="/images/Growtoken.svg"
              alt="Logo"
              width={30}
              height={10}
              className="w-[166px] h-[36px] md:w-[174px] md:h-[20px]"
             />
          </div>
          
          {/* Mobile menu icon */}
          <div className='absolute right-7 md:hidden'>
            <Image
              src="/Images/MENU.svg"
              alt='menu icon'
              width="28"
              height="22"
            />
          </div>

          {/* Navigation links (Desktop) */}
          <div className="hidden md:flex gap-[24px] items-center text-[16px]">
            <a href="#" className="text-white hover:text-red-500">Home</a>
            <a href="#" className="text-white hover:text-red-500">Impact</a>
            <a href="#" className="text-white hover:text-red-500">Hashgraph</a>
            <a href="#" className="text-white hover:text-red-500">About Us</a>
          </div>
          <button className="hidden bg-white text-[var(--color-growtoken-orange)] px-6 py-1 rounded-md hover:bg-white 
             border-2 border-transparent cursor-pointer md:flex">
              Get Started
            </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
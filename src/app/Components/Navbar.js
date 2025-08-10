import React from 'react'
import Image from 'next/image'
import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      {/* Nav bar container */}
      <nav className='bg-growtoken-dark'>
        {/* Flex container */}
        <div className="flex justify-center relative md:justify-between px-7 pt-8 mx-auto items-center md:items-end 
         sm:w-[390px] md:w-[756px] lg:w-[84.4rem] 2xl:w-[90rem] md:h-[80px] md:px-10 lg:px-25 md:pt-0">
          
          {/* nav Logo */}
          <div className="flex">
            <Image
              src="/Images/Growtoken.svg"
              alt="Logo"
              width={30}
              height={10}
              className="w-[166px] h-[36px] md:w-[174px] md:h-[20px]"
             />
          </div>
          
         <HamburgerMenu />
            {/* Navigation links (Desktop) */}
            <div className="hidden md:flex gap-[24px] items-center text-[16px]">
              <Link href="#" className="text-white hover:text-red-500">Home</Link>
              <Link href="#" className="text-white hover:text-red-500">Impact</Link>
              <Link href="#" className="text-white hover:text-red-500">Hashgraph</Link>
              <Link href="#" className="text-white hover:text-red-500">About Us</Link>
            </div>
            <Link href="/home">
            <button className="hidden md:flex bg-white text-[var(--color-growtoken-orange)] px-6 py-1 rounded-md hover:bg-white 
               border-2 border-transparent cursor-pointer">
                Get Started
              </button>
            </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
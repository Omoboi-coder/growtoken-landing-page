"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  
  return (
    <>
      {/* Hamburger Icon */}
      <div className="md:hidden absolute right-7 bottom-[-1] z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          <Image src="/Images/MENU.svg" alt="Menu" width={24} height={24} />
        </button>
      </div>
      
      {/* Mobile menu dropdown - positioned independently */}
      {menuOpen && (
        <div className="absolute top-17 left-61 w-[159px] h-[247px] bg-[#00004C]
        shadow-lg rounded-sm z-40 md:hidden"> 
          <div className="flex flex-col space-y-4 py-10 ml-10 shadow-2xs text-white text-lg font-medium w-[89px] h-[164px]">
            <Link href="#">Home</Link>
            <Link href="#">Impact</Link>
            <Link href="#">Hashgraph</Link>
            <Link href="#">About Us</Link>
          </div>
        </div>
      )}
    </>
  )
}
export default HamburgerMenu
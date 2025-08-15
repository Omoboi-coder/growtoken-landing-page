import React from 'react'
import LeftCon from './LeftCon'
import Image from 'next/image'
import SidebarMenu from './SidebarMenu'

const DashboardLayout = ({ children }) => {
  return (
     <section className='bg-[#CCCCFF]'>
            {/* Mobile navbar - only shows on small screens */}
      <nav className='md:hidden bg-growtoken-dark'>
        <div className='flex justify-center px-7 pt-6 pb-4'>
          {/* Logo */}
          <Image
            src="/Images/Growtoken.svg"
            alt="Logo"
            width={30}
            height={10}
            className="w-[166px] h-[36px] mx-auto"
          />
          
          {/* Hamburger Menu */}
          <SidebarMenu />
          
        </div>
      </nav>

      {/* Main content area */}
      <div className='flex flex-col md:flex-row mx-auto gap-0 md:gap-4 w-full min-h-screen md:w-[84.4rem] md:h-[1024px] bg-[#CCCCFF]'>
        
        {/* LeftCon - only shows on desktop */}
        <div className='md:block hidden'>
          <LeftCon />
        </div>

         {/* Right side content */}
        <div className='flex-1 md:flex-1 w-full min-h-full'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default DashboardLayout
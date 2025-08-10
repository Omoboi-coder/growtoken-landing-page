import React from 'react'
import LeftCon from './LeftCon'

const DashboardLayout = ({ children }) => {
  return (
     <section className='bg-[#CCCCFF] min-h-screen'>
      <div className='flex flex-row mx-auto gap-4 w-[84.4rem] h-[1024px]'>
        {/* LeftCon - always shows */}
        <LeftCon />
        
        {/* Right side - empty for you to design */}
        <div className='flex-1'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default DashboardLayout
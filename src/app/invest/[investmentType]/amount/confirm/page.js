'use client'
import DashboardLayout from '@/app/Components/DashboardLayout'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ConfirmInvestment = ({ params }) => {
  return (
    <DashboardLayout>
      <div className='flex flex-col px-4 md:px-0'>
        {/* content container */}
        <div className='flex flex-col mt-8 w-full md:w-[1030px] h-[788px]'>
          {/* button div */}
          <Link href={`/invest/${params.investmentType}/amount`}>
            <button
              className='flex flex-row space-x-4 text-[#000019] text-[24px] mt-[8rem] ml-10 
              font-bold w-[103px] h-[31px] cursor-pointer'>
              <Image
                src="/Images/arrow-left (2).svg"
                alt=''
                width={24}
                height={24}
                className='w-[24px] h-[24px] mt-1.5'
              />
              <h6> Back </h6>
            </button>
          </Link>
         
          {/* Main content */}
          <div className='flex flex-col md:flex-row w-full md:w-[1011px] h-[640px] bg-[#000019] 
          rounded-[12px] gap-20 mx-auto mt-[3rem] p-8'>
            <h1 className='flex w-[303px] h-[94px] text-white text-[36px] font-semibold mb-8 mt-18 ml-18'>
              Review Investment Plan
            </h1>
            
            <div className='flex flex-col w-full md:w-[311px] h-[216px] gap-[26px] mt-29 text-white'>
                 <div className='flex flex-col w-full md:w-[260px] h-[44px] md:left-[8rem]'>
                <h6 className=' text-[18px] md:text-[20px] font-medium text-center md:text-left'>
                  Garri Processing Investment
                  </h6>
                <p className='text-[12px] text-center md:text-left'> <span className='text-green-500'>20%</span> 
                returns in 6 months</p>
             </div>
             <div className='flex flex-col md:flex-row gap-10'>
             <div className='flex flex-col w-full md:w-[160px] h-[148px] text-[16px] space-y-5'>
                <p> Amount: </p>
                <p> Processing Fee (2%): </p>
                <p> Units: </p>
                <p> Total: </p>
             </div>

              <div className='flex flex-col w-full md:w-[120px] h-[148px] text-[16px] space-y-5'>
                <p> 5000 USDT </p>
                <p> 100 USDT </p>
                <p> 10 Units </p>
                <p> 5100 USDT </p>
             </div>
            </div>

            <button 
              className='w-[83px] h-[33px] py-1 ml-50 mt-2 rounded-[8px] text-[16px] text-white bg-[#F18500]
               hover:bg-[#E07700] transition-colors cursor-pointer'>
              Confirm 
            </button>
         </div>
            
          </div>
        </div>

        {/* Footer */}
        <footer className='flex flex-row text-[12px] text-[#010101] w-full max-w-[268px] h-[20px]
         gap-2 items-center justify-center md:justify-start mt-35 mx-auto md:ml-[16rem]'>
          <Image
            src="/Images/Vector (4).svg"
            alt=""
            width="20"
            height="20"
            className='w-[20px] h-[20px]'
          />
          <p>2023</p>
          <p>GROWTOKEN</p>
          <p>All Rights Reserved</p>   
        </footer>
      </div>
    </DashboardLayout>
  )
}

export default ConfirmInvestment
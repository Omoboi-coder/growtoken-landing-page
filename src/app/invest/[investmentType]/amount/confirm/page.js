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
        <div className='flex flex-col mt-8 w-full md:w-[1030px] min-h-[400px] md:h-[788px]'>
          {/* button div */}
          <Link href={`/invest/${params.investmentType}/amount`}>
            <button
              className='flex flex-row space-x-4 text-[#000019] text-[20px] md:text-[24px] mt-8 md:mt-[8rem] ml-4 md:ml-10 
              font-bold w-[103px] h-[31px] cursor-pointer'>
              <Image
                src="/Images/arrow-left (2).svg"
                alt=''
                width={24}
                height={24}
                className='w-[24px] h-[24px] mt-0.5 md:mt-1.5'
              />
              <h6> Back </h6>
            </button>
          </Link>
         
          {/* Main content */}
          <div className='flex flex-col md:flex-row w-full md:w-[1011px] min-h-[500px] md:h-[640px] bg-[#000019] 
          rounded-[12px] gap-2 md:gap-20 mx-auto mt-6 md:mt-[3rem] p-6 md:p-8'>
            <h1 className='flex w-full md:w-[303px] text-white text-[28px] md:text-[36px] font-semibold mb-6 md:mb-8 
            mt-0 md:mt-18 ml-5 md:ml-18'>
              Review Investment Plan
            </h1>
            
            <div className='flex flex-col w-full md:w-[311px] min-h-[216px] gap-6 md:gap-[26px] mt-0 md:mt-29 text-white'>
              <div className='flex flex-col w-full md:w-[260px] md:left-[8rem]'>
                <h6 className='text-[18px] md:text-[20px] font-medium text-center md:text-left'>
                  Garri Processing Investment
                </h6>
                <p className='text-[12px] text-center md:text-left'> 
                  <span className='text-green-500'>20%</span> returns in 6 months
                </p>
              </div>
              
              <div className='flex flex-row gap-6 md:gap-10'>
                <div className='flex flex-col w-full md:w-[160px] ml-4 md:ml-0 text-[16px] space-y-4 md:space-y-5'>
                  <p> Amount: </p>
                  <p> Processing Fee (2%): </p>
                  <p> Units: </p>
                  <p> Total: </p>
                </div>

                <div className='flex flex-col w-full md:w-[120px] text-[16px] space-y-4 md:space-y-5 font-medium'>
                  <p> 5000 USDT </p>
                  <p> 100 USDT </p>
                  <p> 10 Units </p>
                  <p> 5100 USDT </p>
                </div>
              </div>

              <button 
                className='w-[100px] md:w-[83px] h-[38px] md:h-[33px] py-1 ml-auto md:ml-50 mt-4 md:mt-2 
                rounded-[8px] text-[16px] text-white bg-[#F18500] hover:bg-[#E07700] transition-colors cursor-pointer'>
                Confirm 
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className='flex flex-row text-[12px] text-[#010101] w-full max-w-[268px] h-[20px]
         gap-2 items-center justify-center md:justify-start my-20 md:my-0 md:mt-35 mx-auto md:ml-[16rem]'>
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
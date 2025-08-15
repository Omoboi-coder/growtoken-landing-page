'use client'
import DashboardLayout from '@/app/Components/DashboardLayout'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const AmountOfInvestment = ({ params }) => {
  const router = useRouter()

  const handleContinueClick = () => {
    router.push(`/invest/${params.investmentType}/amount/confirm`)
  }

  return (
    <DashboardLayout>
      {/* container 2 */}
      <div className='flex flex-col px-4 md:px-0'>
        {/* content container */}
        <div className='flex flex-col mt-8 w-full md:w-[1030px] min-h-[400px] md:h-[788px]'>
          {/* button div */}
          <Link href={`/invest/${params.investmentType}`}>
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
          rounded-[12px] gap-6 md:gap-20 mx-auto mt-6 md:mt-[3rem] p-6 md:p-0'>
            <h3 className='flex w-full md:w-[316px] text-[24px] md:text-[36px] text-white font-semibold 
            mt-3 md:mt-[10rem] ml-0 md:ml-[7rem]'>
              How much would you like to invest in this?
            </h3>
            
            <div className='flex flex-col relative w-full md:w-auto'>
              <div className='flex w-full md:w-[392px] h-[60px] md:h-[80px] border border-[#F18500] 
              rounded-[12px] mt-6 md:mt-[11rem]'>
              </div>
              
              <p className='mb-6 absolute top-[18px] md:top-42 left-2 text-[12px] px-2 bg-[#000019] text-white z-10'>
                Amount in Tether USDT
              </p>
              
              <div className='flex flex-col w-full md:w-[389px] text-white gap-2 rounded-[4px] mt-6 md:mt-9'>
                <p className='text-[14px] md:text-[16px] leading-relaxed'>
                  The Tether amount specified is converted to units
                </p>
                <p className='text-[16px] md:text-[20px] font-medium'>
                  5000 USDT = 10 Units (500 USDT = 1 Unit)
                </p>
              </div>
              
              <button 
                onClick={handleContinueClick}
                className='w-[100px] md:w-[82px] h-[35px] md:h-[29px] rounded-[8px] 
                text-[16px] text-white mt-10 md:mt-6 ml-auto md:ml-[20rem] bg-[#F18500] hover:bg-[#E07700] 
                transition-colors cursor-pointer'>
                Continue
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
            {/* Footer */}
                  <footer className='flex flex-row text-[12px] text-[#010101] w-full max-w-[268px] h-[20px]
                   gap-2 items-center justify-center md:justify-start mt-25 md:mt-35 mx-auto md:ml-[18rem]'>
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

export default AmountOfInvestment
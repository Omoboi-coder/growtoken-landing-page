import React from 'react'
import Image from 'next/image'
import RightHomeRow3 from './RightHomeRow3'

const RightHome = () => {
  return (
    <>
         {/* container 2 */}
        <div className='flex flex-col'>
        {/* Row 1 */}
        <div className='flex flex-row relative'>
        {/* item 1 */}
        <div className='flex w-[310px] h-[120px] rounded-[12px] mt-[135px] border-1 border-[#00004C]'>
          <div className='flex flex-row mx-auto mt-4 gap-2 w-[241px] h-[26px] font-semibold text-[#010101] '>
            <p className='pt-1 text-[16px]'>
              Total Balance:
            </p>
            <p className='text-[20px]'>
              20,000 USDT
            </p>
          </div>
        </div>

          {/* item 2 */}
        <div className='flex w-[310px] h-[120px] rounded-[12px] mt-[135px] ml-5 border-1 border-[#00004C]'>
          <div className='flex flex-row mx-auto mt-4 gap-2 w-[221px] h-[26px] font-semibold text-[#010101] '>
            <p className='pt-1 text-[16px]'>
              Total Spent:
            </p>
            <p className='text-[20px]'>
              13,000 USDT
            </p>
          </div>
        </div>
        {/* item 3 */}
        <div className='flex w-[220px] h-[240px] rounded-[12px] mt-[80px] ml-20 border-1 border-[#00004C]'>
         <div className='flex flex-col mx-auto mt-4 items-center font-semibold text-[#010101] '>
           <p className='text-[12px]'>
              Token Allocation
            </p>

            <Image
            src="/Images/allocation.svg"
            alt=''
            width="92"
            height="92"
            className='w-[92px] h-[92px] mt-4 '
            />
            <div className='flex flex-row w-[166px] h-[44px] gap-[16px]'>
              <div className='flex flex-col mt-10'>
                <Image
                src="/Images/Frame 112.svg"
                alt=""
                width="64"
                height="20"
                className="w-[64px] h-[20px]"
                />

                 <Image
                src="/Images/Frame 109.svg"
                alt=""
                width="87"
                height="20"
                className="w-[87px] h-[20px]"
                />
                </div>
                <div className='flex flex-col mt-10'>
                 <Image
                src="/Images/Frame 111.svg"
                alt=""
                width="60"
                height="20"
                className="w-[60px] h-[20px]"
                />
                 <Image
                src="/Images/Frame 110.svg"
                alt=""
                width="63"
                height="20"
                className="w-[63px] h-[20px]"
                />
                </div>
            </div>
         </div> 
        </div>
      </div>
        
        {/* Row 2 */}
        <div className='flex flex-row absolute top-[18rem] p-[4px] gap-[4px] ml-10 text-center items-center
         w-[224px] h-[40px] bg-[#FEF3E5] rounded-[16px] border-[#FEF3E5]'>
          <p className='text-[#F18500] text-[16px] font-medium pt-1 w-[106px] h-[32px]'>
            Overview
          </p>

          <p className='text-[#F9CE99] text-[16px] font-medium pt-1 w-[106px] h-[32px]'>
            Portfolio
          </p>  
        </div>
        <RightHomeRow3 />
         <footer className='flex flex-row text-[12px] text-[#010101] w-[268px] h-[20px] gap-2 items-end mt-5 ml-[18rem]'>
        <Image
          src="/Images/Vector (4).svg"
          alt=""
          width="20"
          height="20"
          className='w-[20px] h-[20px]'
          />
          <p> 2023 </p>
          <p> GROWTOKEN </p>
          <p> All Rights Reserved </p>   
      </footer>
      </div>
    </>
  )
}

export default RightHome
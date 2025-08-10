import React from 'react'
import Image from 'next/image'

const RightInvest = () => {
  return (
    <>
    {/* container 2 */}
     <div className='flex flex-col'>
        {/* Search div */}
     <div className='bg-[#F9F9FA] relative w-[420px] h-[36px] rounded-[16px] mx-auto mt-12'>
        <Image
        src="/Images/Vector (7).svg"
        alt=""
        width="20"
        height="20"
        className='absolute top-2 left-3 w-[20px] h-[20px]'
        />
        <div className='text-[#838181] text-[12px] font-medium w-[38px] h-[16px] ml-12 mt-2.5'>
          Search
        </div>
      </div>
      {/* Active Investments */}
      <div className='w-[972px] h-[424px] border border-[#000019] rounded-[12px] mt-10'>
        <div className='w-[232px] h-[31px] font-bold my-4 mx-4  text-[24px] text-[#000019]'>
           <h5> Active Investments </h5> 
      </div>
        <div className='w-[933px] h-[328px] mx-auto mt-12 space-y-2'>
            {/* First row */}
            <div className='flex flex-row w-[914px] h-[56px] text-white rounded-[12px] mx-auto py-1 bg-[#000019]'>
                {/* first item */}
                <div className='flex flex-col w-[196px] h-[48px] border-r ml-6 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[16px]'> Chicken Farm Investment </p>
                    <p className='text-[12px]'> Invested: 1,000.00 USDT </p>
                </div>
                {/* Second item */}
                <div className='flex flex-col w-[135px] h-[44px] border-r ml-6   mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 26 Feb, 2023 11:37 PM </p>
                    <p className='text-[12px]'> Start Date </p>
                </div>

                {/* Third item */}
                <div className='flex flex-col w-[137px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 05 Feb, 2024 11:38 PM </p>
                    <p className='text-[12px]'>End Date </p>
                </div>

                 {/* Fourth item */}
                <div className='flex flex-col w-[82px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 1,125 USDT</p>
                    <p className='text-[12px]'>Total Return</p>
                </div>

                 {/* Fifth item */}
                <div className='flex flex-col w-[81px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 234.8 USDT</p>
                    <p className='text-[12px]'> Net Profit </p>
                </div>

                {/* withdraw button */}
                <button className='w-[128px] h-[29px] rounded-[4px] text-[16px] mx-auto my-auto border border-[#F18500]'>
                    Withdraw Fund
                </button>
            </div>
                    {/* Second row */}
            <div className='flex flex-row w-[914px] h-[56px] text-white rounded-[12px] mx-auto py-1 bg-[#000019]'>
                {/* first item */}
                <div className='flex flex-col w-[196px] h-[48px] border-r ml-6 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[16px]'> Meat-Farm Investment </p>
                    <p className='text-[12px]'> Invested: 1,000.00 USDT </p>
                </div>
                {/* Second item */}
                <div className='flex flex-col w-[135px] h-[44px] border-r ml-6   mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 26 Feb, 2023 11:37 PM </p>
                    <p className='text-[12px]'> Start Date </p>
                </div>

                {/* Third item */}
                <div className='flex flex-col w-[137px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 05 Feb, 2024 11:38 PM </p>
                    <p className='text-[12px]'>End Date </p>
                </div>

                 {/* Fourth item */}
                <div className='flex flex-col w-[82px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 1,125 USDT</p>
                    <p className='text-[12px]'>Total Return</p>
                </div>

                 {/* Fifth item */}
                <div className='flex flex-col w-[81px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 234.8 USDT</p>
                    <p className='text-[12px]'> Net Profit </p>
                </div>

                {/* withdraw button */}
                <button className='w-[128px] h-[29px] rounded-[4px] text-[16px] mx-auto my-auto border border-[#F18500]'>
                    Withdraw Fund
                </button>
            </div>
                     {/* Third row */}
            <div className='flex flex-row w-[914px] h-[56px] text-white rounded-[12px] mx-auto py-1 bg-[#000019]'>
                {/* first item */}
                <div className='flex flex-col w-[196px] h-[48px] border-r ml-6 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[16px]'> Cassava Farm Investment </p>
                    <p className='text-[12px]'> Invested: 1,000.00 USDT </p>
                </div>
                {/* Second item */}
                <div className='flex flex-col w-[135px] h-[44px] border-r ml-6   mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 26 Feb, 2023 11:37 PM </p>
                    <p className='text-[12px]'> Start Date </p>
                </div>

                {/* Third item */}
                <div className='flex flex-col w-[137px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 05 Feb, 2024 11:38 PM </p>
                    <p className='text-[12px]'>End Date </p>
                </div>

                 {/* Fourth item */}
                <div className='flex flex-col w-[82px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 1,125 USDT</p>
                    <p className='text-[12px]'>Total Return</p>
                </div>

                 {/* Fifth item */}
                <div className='flex flex-col w-[81px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 234.8 USDT</p>
                    <p className='text-[12px]'> Net Profit </p>
                </div>

                {/* withdraw button */}
                <button className='w-[128px] h-[29px] rounded-[4px] text-[16px] mx-auto my-auto border border-[#F18500]'>
                    Withdraw Fund
                </button>
            </div>
                     {/* Fourth row */}
            <div className='flex flex-row w-[914px] h-[56px] text-white rounded-[12px] mx-auto py-1 bg-[#000019]'>
                {/* first item */}
                <div className='flex flex-col w-[210px] h-[48px] border-r ml-6 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[16px]'> Garri Processing Investment </p>
                    <p className='text-[12px]'> Invested: 1,000.00 USDT </p>
                </div>
                {/* Second item */}
                <div className='flex flex-col w-[135px] h-[44px] border-r ml-6   mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 26 Feb, 2023 11:37 PM </p>
                    <p className='text-[12px]'> Start Date </p>
                </div>

                {/* Third item */}
                <div className='flex flex-col w-[137px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 05 Feb, 2024 11:38 PM </p>
                    <p className='text-[12px]'>End Date </p>
                </div>

                 {/* Fourth item */}
                <div className='flex flex-col w-[82px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 1,125 USDT</p>
                    <p className='text-[12px]'>Total Return</p>
                </div>

                 {/* Fifth item */}
                <div className='flex flex-col w-[81px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 234.8 USDT</p>
                    <p className='text-[12px]'> Net Profit </p>
                </div>

                {/* withdraw button */}
                <button className='w-[128px] h-[29px] rounded-[4px] text-[16px] mx-auto my-auto border border-[#F18500]'>
                    Withdraw Fund
                </button>
            </div>
                     {/* Fifth row */}
            <div className='flex flex-row w-[914px] h-[56px] text-white rounded-[12px] mx-auto py-1 bg-[#000019]'>
                {/* first item */}
                <div className='flex flex-col w-[196px] h-[48px] border-r ml-6 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[16px]'> Cocoa  Farm Investment </p>
                    <p className='text-[12px]'> Invested: 1,000.00 USDT </p>
                </div>
                {/* Second item */}
                <div className='flex flex-col w-[135px] h-[44px] border-r ml-6   mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 26 Feb, 2023 11:37 PM </p>
                    <p className='text-[12px]'> Start Date </p>
                </div>

                {/* Third item */}
                <div className='flex flex-col w-[137px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 05 Feb, 2024 11:38 PM </p>
                    <p className='text-[12px]'>End Date </p>
                </div>

                 {/* Fourth item */}
                <div className='flex flex-col w-[82px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 1,125 USDT</p>
                    <p className='text-[12px]'>Total Return</p>
                </div>

                 {/* Fifth item */}
                <div className='flex flex-col w-[81px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 234.8 USDT</p>
                    <p className='text-[12px]'> Net Profit </p>
                </div>

                {/* withdraw button */}
                <button className='w-[128px] h-[29px] rounded-[4px] text-[16px] mx-auto my-auto border border-[#F18500]'>
                    Withdraw Fund
                </button>
            </div>
        </div>
      </div>
      {/* Outer div */}
      <div className='w-[860px] h-[364px] mt-8 overflow-hidden'>
        {/*Explore investment  */}
        <div className='flex flex-row relative w-[290px] h-[31px] ml-5 mt-3'>
            <h5 className='text-[24px] font-bold w-[246px]'>Explore Investments</h5>
            <Image
            src="/Images/arrow-left.svg"
            alt=''
            width="24"
            height="24"
            className=" absolute w-[24px] h-[24px] top-1.5 left-[16.5rem]"
            />

        </div>
        <div className='flex flex-row relative w-[618px] h-[268px] rounded-[12px] bg-white ml-5 mt-7'>
            <Image
            src="/Images/Frame 227.svg"
            alt=''
            width="200"
            height="200"
            className=" absolute w-[200px] h-[200px] top-7 left-4"
            /> 
            <div className='flex flex-col absolute w-[260px] h-[44px] left-[16rem] top-12'>
                <h6 className='text-[#000019] text-[20px] font-medium'>Garri Processing Investment</h6>
                <p className='text-[12px]'><span className='text-green-500'>20%</span> returns in 6 months</p>
            </div>

             <div className='flex flex-row absolute w-[190px] h-[42px] text-[#010101] justify-between
              left-[16rem] top-[8rem]'>
                <div className='flex flex-col w-[76px] h-[41px]'>
                    <p className='text-[16px]'>500 USDT</p>
                    <p className='text-[12px]'>per units</p>
                </div>

                <div className='flex flex-col w-[50px] h-[41px]'>
                    <p className='text-[16px]'>1000 </p>
                    <p className='text-[12px]'>Investors</p>
                </div>
            </div>

             <button className='flex flex-col absolute w-[72px] h-[24px] text-white bg-[#F18500] rounded-[8px]
              left-[16rem] top-[12rem]'>
                Invest
             </button>
        </div>
        <div className='w-[618px] h-[40px] rounded-[12px] bg-white mt-1 ml-5'></div>
      </div>
       <footer className='flex flex-row text-[12px] text-[#010101] w-[268px] h-[20px] 
        gap-2 items-end mt-6 ml-[18rem]'>
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

export default RightInvest
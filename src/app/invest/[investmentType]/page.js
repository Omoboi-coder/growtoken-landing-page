"use client"
import DashboardLayout from '@/app/Components/DashboardLayout'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const InvestmentType = ({ params }) => {
   const router = useRouter()

  const handleInvestClick = () => {
    // Route to the nested amount page
    router.push(`/invest/${params.investmentType}/amount`)
  }

  return (
    <DashboardLayout>
      {/* container 2 */}
           <div className='flex flex-col px-4 md:px-0'>
              {/* Search div */}
           <div className='bg-[#F9F9FA] relative w-full max-w-[420px] h-[36px] rounded-[16px] mx-auto mt-6 md:mt-12'>
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
            {/* content container */}
            <div className='flex flex-col mt-8 w-full md:w-[1030px] h-auto md:h-[788px]'>
              {/* button div */}
              
              <Link href="/invest">
                <button
                  className='flex flex-row space-x-4 text-[#000019] text-[24px] mt-3 md:mt-12 ml-4 md:ml-10 
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
              <div className='flex flex-col w-full md:w-[1011px] h-auto md:h-[640px] bg-[#000019] rounded-[12px]
               mx-auto mt-8 md:mt-12'>
                {/* content 1 */}
                   <div className='flex flex-col md:flex-row relative w-full md:w-[589px] text-white
                           md:h-[102px] h-auto ml-0 md:ml-35 mt-0 md:mt-15 p-4 md:p-0'>
                              <Image
                              src="/Images/Frame 227 (1).svg"
                              alt=''
                              width="100"
                              height="100"
                              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto md:absolute 
                               mb-4 md:mb-0"
                              /> 
                              <div className='flex flex-col w-full md:absolute md:w-[260px] h-auto md:h-[44px] md:left-[8rem] '>
                                  <h6 className=' text-[24px] md:text-[20px] font-medium text-center md:text-left'>
                                      Garri Processing Investment</h6>
                                  <p className='text-[15px] md:text-[12px] text-center md:text-left'> <span className='text-green-500'>20%</span> 
                                    returns in 6 months</p>
                              </div>
                  
                               <div className='flex flex-row w-full md:absolute md:w-[190px] h-auto md:h-[42px]  
                               justify-center md:justify-between md:left-[8rem] md:top-[3.5rem] gap-6 md:gap-0 my-4 md:my-0'>
                                  <div className='flex flex-col w-[90px] md:w-[76px] h-[41px] text-center md:text-left'>
                                      <p className='text-[18px] md:text-[16px]'>500 USDT</p>
                                      <p className='text-[16px] md:text-[12px]'>per units</p>
                                  </div>
                  
                                  <div className='flex flex-col w-[50px] h-[41px] text-center md:text-left'>
                                      <p className='text-[18px] md:text-[16px]'>1000 </p>
                                      <p className='text-[16px] md:text-[12px]'>Investors</p>
                                  </div>
                              </div>
                                <button 
                                onClick={handleInvestClick}
                                 className='w-[72px] h-[24px] text-white bg-[#F18500] rounded-[8px] 
                                 mx-auto absolute left-[11rem] top-[15.5rem] md:top-0 md:left-[32rem] hover:bg-[#E07700] transition-colors cursor-pointer'>
                                  Invest
                               </button>
                          </div>
                          {/* container for content 2 & 3 */}
                          <div className='flex flex-col md:flex-row gap-3 md:gap-[4rem] px-4 md:px-0'> 
                          {/* content 2 */}
                          <div className='flex flex-col w-[320px] md:w-[278px] h-auto md:h-[325px] mx-auto text-center md:text-start space-y-3 
                          md:space-y-[20px] mt-6 md:mt-10 md:ml-[11rem]'>
                            <div className='flex flex-col w-full md:w-[149px] h-auto md:h-[49px] rounded-[8px] text-white  py-3 px-3 
                            md:py-0 md:px-0 md:pl-4 
                             border border-[#F18500]'>
                              <p className='mt-0 md:mt-1 text-[14px] md:text-[12px]'>Expected Returns</p>
                              <p className='text-[18px] md:text-[16px]'>20% in 6 months</p>
                            </div>

                            <div className='flex flex-col w-full md:w-[136px] h-auto md:h-[49px] rounded-[8px] text-white py-3 px-3 
                            md:py-0 md:px-0 md:pl-4
                             border border-[#F18500]'>
                              <p className='mt-0 md:mt-1 text-[14px] md:text-[12px]'>Offer Closing Date</p>
                              <p className='text-[18px] md:text-[16px]'>Fixed Income</p>
                            </div>

                            <div className='flex flex-col w-full md:w-[278px] h-auto md:h-[49px] rounded-[8px] text-white py-3 px-3
                             md:py-0 md:px-0 md:pl-4
                             border border-[#F18500]'>
                              <p className='mt-0 md:mt-1 text-[14px] md:text-[12px]'>Pay-out Type</p>
                              <p className='text-[18px] md:text-[16px]'>Capital + Profit is paid at maturity </p>
                            </div>

                            <div className='flex flex-col w-full md:w-[173px] h-auto md:h-[49px] rounded-[8px] text-white py-3 px-3 
                            md:py-0 md:px-0 md:pl-4
                             border border-[#F18500]'>
                              <p className='mt-0 md:mt-1 text-[14px] md:text-[12px]'>Insurance Partner</p>
                              <p className='text-[18px] md:text-[16px]'>Leadway Insurance</p>
                            </div>

                            <div className='flex flex-col w-full md:w-[158px] h-auto md:h-[49px] rounded-[8px] text-white py-3 px-3
                             md:py-0 md:px-0 md:pl-4 
                             border border-[#F18500]'>
                              <p className='mt-0 md:mt-1 text-[14px] md:text-[12px]'>Farm Location</p>
                              <p className='text-[18px] md:text-[16px]'>Ijebu, Ogun State</p>
                            </div>

                          </div>
                          {/* content 3 */}

                          <div className='flex flex-col w-[320px] md:w-[286px] h-auto md:h-[256px] gap-2 md:gap-[20px] text-center
                           md:text-start mx-auto mt-0 md:mt-10 md:mr-[13rem] text-white'>
                            <div className='flex flex-col w-full md:w-[128px] h-auto md:h-[49px] rounded-[8px] text-white py-3
                             px-3 md:py-0 md:px-0 md:pl-4
                             border border-[#F18500]'>
                              <p className='mt-0 md:mt-1 text-[14px] md:text-[12px]'>Investment Type</p>
                              <p className='text-[18px] md:text-[16px]'>Fixed Income</p>
                            </div>

                            <div className='flex flex-col w-full md:w-[128px] h-auto md:h-[49px] rounded-[8px] text-white py-3 px-3 
                            md:py-0 md:px-0 md:pl-4
                             border border-[#F18500]'>
                              <p className='mt-0 md:mt-1 text-[14px] md:text-[12px]'>Maturity Date</p>
                              <p className='text-[18px] md:text-[16px]'>Fixed Income</p>
                            </div>

                            <div className='flex flex-col w-full md:w-[278px] h-auto md:h-[49px] rounded-[8px] text-white py-3 px-3 
                            md:py-0 md:px-0 md:pl-4
                             border border-[#F18500]'>
                              <p className='mt-0 md:mt-1 text-[14px] md:text-[12px]'>Unit Type</p>
                              <p className='text-[18px] md:text-[16px]'>Units can be sold anytime to others </p>
                            </div>

                            <div className='flex flex-col w-full md:w-[178px] h-auto md:h-[49px] rounded-[8px] text-white py-3 px-3
                             md:py-0 md:px-0 md:pl-4
                             border border-[#F18500]'>
                              <p className='mt-0 md:mt-1 text-[14px] md:text-[12px]'>Farming/Production Cycle</p>
                              <p className='text-[18px] md:text-[16px]'>6 Months</p>
                            </div>

                          </div>
                        </div>
                </div>
            </div>
             {/* Footer */}
                  <footer className='flex flex-row text-[12px] text-[#010101] w-full max-w-[268px] h-[20px]
                   gap-2 items-center justify-center md:justify-start my-5 md:my-0 md:mt-15 mx-auto md:ml-[17rem]'>
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

export default InvestmentType
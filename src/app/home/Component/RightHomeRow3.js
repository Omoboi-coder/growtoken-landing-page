import React from 'react'
import Image from 'next/image'

const RightHomeRow3 = () => {
  return (
    <>
       {/* Main container Row 3 */}
       <div className='px-4 md:px-0'>
        <div className='flex flex-row w-full md:w-[1065px] h-[600px] rounded-[12px] bg-[#00004C] 
        mt-5 gap-4 md:gap-20 justify-center md:justify-start p-4 md:p-0'>
          {/* Left item */}
          <div className='flex flex-col w-full md:w-[240px] min-h-full md:h-[670px] mt-3'>
              <h4 className='text-[20px] md:text-[16px] text-white pt-2 pl-4 md:pl-4'>
                Investments
              </h4>
              <div className='h-auto md:h-[600px] space-y-4 md:space-y-5 p-2 md:p-4'>
                  {/* Investment Card 1 */}
                  <div className='flex items-center w-full max-w-[320px] md:w-[232px] h-[120px] 
                  mx-auto md:mx-0 rounded-[16px] bg-[#FFFFFF]'>
                    <div className='flex relative w-full max-w-[280px] md:w-[193px] h-[83px] mx-auto px-4 md:px-0'>
                      <div className='flex-1 md:w-[137px] h-[83px]'>
                        <div className='flex flex-row gap-[10px] md:gap-[14px] items-center'>
                          <Image
                          src="/Images/cryptocurrency-color_etc.svg"
                          alt="Ethereum Classic Logo"
                          width="40"
                          height="40"
                          className='w-[50px] h-[50px] md:w-[40px] md:h-[40px] flex-shrink-0'
                          />
                          <p className='text-[#010101] text-[25px] md:text-[20px] font-medium'>
                            $20,000
                          </p>
                        </div>
                        <div className='mt-3 md:mt-6'>
                          <Image
                          src="/Images/Frame 140 (2).svg"
                          alt=''
                          width="88"
                          height="15"
                          className='w-[95px] md:w-[88px] h-[20px] md:h-[15px]'
                          />
                        </div>
                      </div>
                      <Image
                        src="/Images/option.svg"
                        alt=''
                        width="8"
                        height="23"
                        className='absolute top-2 right-2 md:bottom-[3.6rem] md:left-46 w-[8px] h-[23px]'
                        />
                    </div>
                  </div>

                  {/* Investment Card 2 */}
                  <div className='flex items-center w-full max-w-[320px] md:w-[232px] h-[120px] mx-auto
                   md:mx-0 rounded-[16px] bg-[#FFFFFF]'>
                    <div className='flex relative w-full max-w-[280px] md:w-[193px] h-[83px] mx-auto px-4 md:px-0'>
                      <div className='flex-1 md:w-[137px] h-[83px]'>
                        <div className='flex flex-row gap-[10px] md:gap-[14px] items-center'>
                          <Image
                          src="/Images/cryptocurrency-color_matic.svg"
                          alt="Polygon MATIC Logo"
                          width="40"
                          height="40"
                          className='w-[50px] h-[50px] md:w-[40px] md:h-[40px] flex-shrink-0'
                          />
                          <p className='text-[#010101] text-[25px] md:text-[20px] font-medium'>
                            $18,000
                          </p>
                        </div>
                        <div className='mt-3 md:mt-6'>
                          <Image
                          src="/Images/Frame 140 (1).svg"
                          alt=''
                          width="88"
                          height="15"
                          className='w-[95px] md:w-[88px] h-[20px] md:h-[15px]'
                          />
                        </div>
                      </div>
                      <Image
                        src="/Images/option.svg"
                        alt=''
                        width="8"
                        height="23"
                        className='absolute top-2 right-2 md:bottom-[3.6rem] md:left-46 w-[8px] h-[23px]'
                        />
                    </div>
                  </div>

                  {/* Investment Card 3 */}
                  <div className='flex items-center w-full max-w-[320px] md:w-[232px] h-[120px] mx-auto 
                  md:mx-0 rounded-[16px] bg-[#FFFFFF]'>
                    <div className='flex relative w-full max-w-[280px] md:w-[193px] h-[83px] mx-auto px-4 md:px-0'>
                      <div className='flex-1 md:w-[137px] h-[83px]'>
                        <div className='flex flex-row gap-[10px] md:gap-[14px] items-center'>
                          <Image
                          src="/Images/Group (1).svg"
                          alt="Investment Logo"
                          width="40"
                          height="40"
                          className='w-[50px] h-[50px] md:w-[40px] md:h-[40px] '
                          />
                          <p className='text-[#010101] text-[25px] md:text-[20px] font-medium'>
                            $12,000
                          </p>
                        </div>
                        <div className='mt-3 md:mt-6'>
                          <Image
                          src="/Images/Frame 140 (1).svg"
                          alt=''
                          width="88"
                          height="15"
                          className='w-[95px] md:w-[88px] h-[20px] md:h-[15px]'
                          />
                        </div>
                      </div>
                      <Image
                        src="/Images/option.svg"
                        alt=''
                        width="8"
                        height="23"
                        className='absolute top-2 right-2 md:bottom-[3.6rem] md:left-46 w-[8px] h-[23px]'
                        />
                    </div>
                  </div>

                  {/* Investment Card 4 */}
                  <div className='flex items-center w-full max-w-[320px] md:w-[232px] h-[120px] mx-auto 
                  md:mx-0 rounded-[16px] bg-[#FFFFFF]'>
                    <div className='flex relative w-full max-w-[280px] md:w-[193px] h-[83px] mx-auto px-4 md:px-0'>
                      <div className='flex-1 md:w-[137px] h-[83px]'>
                        <div className='flex flex-row gap-[10px] md:gap-[14px] items-center'>
                          <Image
                          src="/Images/cryptocurrency-color_bnb.svg"
                          alt="BNB Logo"
                          width="40"
                          height="40"
                          className='w-[50px] h-[50px] md:w-[40px] md:h-[40px] flex-shrink-0'
                          />
                          <p className='text-[#010101] text-[25px] md:text-[20px] font-medium'>
                            $600
                          </p>
                        </div>
                        <div className='mt-3 md:mt-6'>
                          <Image
                          src="/Images/Frame 140 (1).svg"
                          alt=''
                          width="88"
                          height="15"
                          className='w-[95px] md:w-[88px] h-[20px] md:h-[15px]'
                          />
                        </div>
                      </div>
                      <Image
                        src="/Images/option.svg"
                        alt=''
                        width="8"
                        height="23"
                        className='absolute top-2 right-2 md:bottom-[3.6rem] md:left-46 w-[8px] h-[23px]'
                        />
                    </div>
                  </div>
              </div>
          </div>

          {/* Right item */}
          <div className='hidden md:flex flex-col'>
            <div className='flex flex-row justify-between w-[686px] h-[29px] mt-4 items-end'>
              <h4 className='text-white'>
                Investment Growth
              </h4>

             <div className='flex flex-row justify-center border border-white gap-2 w-[100px] h-[29px] rounded-[8px]'>
               <h4 className='text-white mt-1'>
                Weekly
                </h4>
                <Image
                src="/Images/Rectangle 4.svg"
                alt=""
                width="8"
                height="8"
                className='w-[12px] h-[12px] mt-2'
                /> 
              </div>
            </div>
             <Image
                src="/Images/price.svg"
                alt=""
                width="712"
                height="512"
                className='w-[712px] h-[512px] rounded-[12px] mt-4'
                />
             </div>
        </div>
       </div>
    </>
  )
}

export default RightHomeRow3
import React from 'react'
import Image from 'next/image'

const RightHomeRow3 = () => {
  return (
    <>
       {/* Row 3 */}
        <div className=' flex flex-row w-[1080px] h-[600px] rounded-[12px] bg-[#00004C] mt-5 gap-20'>
          {/* Left item */}
          <div className=' flex flex-col w-[240px] h-[670px] mt-3 '>
            <h4 className='text-[16px] text-white pt-2 pl-4'>
              Investments

            </h4>
            <div className='h-[600px] space-y-5 p-4'>
                <div className='flex items-center w-[232px] h-[120px] rounded-[16px] bg-[#FFFFFF]'>
                  <div className='flex relative w-[193px] h-[83px] mx-auto gap-[48px]'>
                    <div className='w-[137px] h-[83px]'>
                      <div className='flex flex-row gap-[14px]'>
                        <Image
                        src="/Images/cryptocurrency-color_etc.svg"
                        alt="Ethereum Classic Logo"
                        width="40"
                        height="40"
                        className='w-[40px] h-[40px]'
                        />
                        <p className='text-[#010101] text-[20px] pt-3'>
                          $20,000
                        </p>
                      </div>
                      <Image
                      src="/Images/Frame 140 (2).svg"
                      alt=''
                      width="88"
                      height="15"
                      className='w-[88px] h-[15px] mt-6'
                      />
                    </div>
                    <Image
                      src="/Images/option.svg"
                      alt=''
                      width="8"
                      height="23"
                      className='absolute bottom-[3.6rem] left-46 w-[8px] h-[23px]'
                      />
                  </div>
                </div>
                   <div className='flex items-center w-[232px] h-[120px] rounded-[16px] bg-[#FFFFFF]'>
                  <div className='flex items-center relative w-[193px] h-[83px] ml-5 gap-[48px]'>
                    <div className='w-[137px] h-[83px]'>
                      <div className='flex flex-row gap-[14px]'>
                        <Image
                        src="/Images/cryptocurrency-color_matic.svg"
                        alt="Ethereum Classic Logo"
                        width="40"
                        height="40"
                        className='w-[40px] h-[40px]'
                        />
                        <p className='text-[#010101] text-[20px] pt-3'>
                          $18,000
                        </p>
                      </div>
                      <Image
                      src="/Images/Frame 140 (1).svg"
                      alt=''
                      width="88"
                      height="15"
                      className='w-[88px] h-[15px] mt-6'
                      />
                    </div>
                    <Image
                      src="/Images/option.svg"
                      alt=''
                      width="8"
                      height="23"
                      className='absolute bottom-[3.6rem] left-46 w-[8px] h-[23px]'
                      />
                  </div>
                </div>
                   <div className='flex items-center w-[232px] h-[120px] rounded-[16px] bg-[#FFFFFF]'>
                  <div className='flex items-center relative w-[193px] h-[83px] ml-5 gap-[48px]'>
                    <div className='w-[137px] h-[83px]'>
                      <div className='flex flex-row gap-[14px]'>
                        <Image
                        src="/Images/Group (1).svg"
                        alt="Ethereum Classic Logo"
                        width="40"
                        height="40"
                        className='w-[40px] h-[40px]'
                        />
                        <p className='text-[#010101] text-[20px] pt-3'>
                          $12,000
                        </p>
                      </div>
                      <Image
                      src="/Images/Frame 140 (1).svg"
                      alt=''
                      width="88"
                      height="15"
                      className='w-[88px] h-[15px] mt-6'
                      />
                    </div>
                    <Image
                      src="/Images/option.svg"
                      alt=''
                      width="8"
                      height="23"
                      className='absolute bottom-[3.6rem] left-46 w-[8px] h-[23px]'
                      />
                  </div>
                </div>

                   <div className='flex items-center w-[232px] h-[120px] rounded-[16px] bg-[#FFFFFF]'>
                  <div className='flex items-center relative w-[193px] h-[83px] ml-5 gap-[48px]'>
                    <div className='w-[137px] h-[83px]'>
                      <div className='flex flex-row gap-[14px]'>
                        <Image
                        src="/Images/cryptocurrency-color_bnb.svg"
                        alt="Ethereum Classic Logo"
                        width="40"
                        height="40"
                        className='w-[40px] h-[40px]'
                        />
                        <p className='text-[#010101] text-[20px] pt-3'>
                          $600
                        </p>
                      </div>
                      <Image
                      src="/Images/Frame 140 (1).svg"
                      alt=''
                      width="88"
                      height="15"
                      className='w-[88px] h-[15px] mt-6'
                      />
                    </div>
                    <Image
                      src="/Images/option.svg"
                      alt=''
                      width="8"
                      height="23"
                      className='absolute bottom-[3.6rem] left-46 w-[8px] h-[23px]'
                      />
                  </div>
                </div>
            </div>
          </div>

          {/* Right item */}
          <div className='flex flex-col'>
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
    </>
  )
}

export default RightHomeRow3
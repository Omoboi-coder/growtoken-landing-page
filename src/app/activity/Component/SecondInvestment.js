import React from 'react'
import Image from 'next/image'

const SecondInvestment = () => {
  return (
    <>
              {/* Mobile View - Horizontally Scrollable */}
              <div className='md:hidden overflow-x-auto'>
                <div className='space-y-3 min-w-[700px]'>
                  {/* Mobile First Row */}
                  <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                    <div className='flex flex-row justify-between ml-4 text-[14px] text-[#000019] w-[600px] h-[48px]'>
                      <div className='flex flex-col space-y-1 justify-center w-[200px] h-[48px]'>
                        <p className='text-[14px]'> 
                          Garri Processing Investment
                        </p>
                        <p className='text-[10px] text-[#737373]'>
                          19th, June 2023 | 6:05 PM
                        </p>
                      </div>
                      <p className='my-3.5 mr-2 text-[14px]'>
                        5000 USDT
                      </p>
                      <p className='my-3.5 mr-2 text-[14px]'>
                        Bought
                      </p>
                    </div>
                     <Image
                    src="/Images/Vector (8).svg"
                    alt=''
                    width="20"
                    height="20"
                    className='absolute w-[20px] h-[20px] top-5 right-4'
                    />
                  </div>

                  {/* Mobile Second Row */}
                  <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                    <div className='flex flex-row justify-between ml-4 text-[14px] w-[600px] h-[48px]'>
                      <div className='flex flex-col space-y-1 justify-center w-[200px] h-[48px]'>
                        <p className='text-[14px]'> 
                          Sugar-Cane Farm Investment
                        </p>
                        <p className='text-[10px] text-[#737373]'>
                          19th, June 2023 | 2:05 PM
                        </p>
                      </div>
                      <p className='my-3.5 ml-2 text-[14px]'>
                        6000 USDT
                      </p>
                      <p className='my-3.5 text-[14px]'>
                        Withdrawn
                      </p>
                    </div>
                     <Image
                    src="/Images/Vector (8).svg"
                    alt=''
                    width="20"
                    height="20"
                    className='absolute w-[20px] h-[20px] top-5 right-4'
                    />
                  </div>

                  {/* Mobile Third Row */}
                  <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                    <div className='flex flex-row justify-between ml-4 text-[14px] w-[600px] h-[48px]'>
                      <div className='flex flex-col space-y-1 justify-center w-[200px] h-[48px]'>
                        <p className='text-[14px]'> 
                          Sugar Processing Investment
                        </p>
                        <p className='text-[10px] text-[#737373]'>
                          19th, June 2023 | 2:05 PM
                        </p>
                      </div>
                      <p className='my-3.5 mr-2 text-[14px]'>
                        6000 USDT
                      </p>
                      <p className='my-3.5 mr-4 text-[14px]'>
                        Sold
                      </p>
                    </div>
                     <Image
                    src="/Images/Vector (8).svg"
                    alt=''
                    width="20"
                    height="20"
                    className='absolute w-[20px] h-[20px] top-5 right-4'
                    />
                  </div>

                  {/* Mobile Fourth Row */}
                  <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                    <div className='flex flex-row justify-between ml-4 text-[14px] w-[600px] h-[48px]'>
                      <div className='flex flex-col space-y-1 justify-center w-[200px] h-[48px]'>
                        <p className='text-[14px]'> 
                          Cassava Farm Investment
                        </p>
                        <p className='text-[10px] text-[#737373]'>
                          19th, June 2023 | 9:05 AM
                        </p>
                      </div>
                      <p className='my-3.5 ml-2 text-[14px]'>
                        12000 USDT
                      </p>
                      <p className='my-3.5 mr-2 text-[14px]'>
                        Bought
                      </p>
                    </div>
                     <Image
                    src="/Images/Vector (8).svg"
                    alt=''
                    width="20"
                    height="20"
                    className='absolute w-[20px] h-[20px] top-5 right-4'
                    />
                  </div>

                  {/* Mobile Fifth Row */}
                  <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                    <div className='flex flex-row justify-between ml-4 text-[14px] w-[600px] h-[49px]'>
                      <div className='flex flex-col space-y-1 justify-center w-[200px] h-[48px]'>
                        <p className='text-[14px]'> 
                          Farm Health Insurance
                        </p>
                        <p className='text-[10px] text-[#737373]'>
                          19th, June 2023 | 6:05 AM
                        </p>
                      </div>
                      <p className='my-3.5 ml-1 text-[14px]'>
                        6000 USDT
                      </p>
                      <p className='my-3.5 mr-4 text-[14px]'>
                        Paid
                      </p>
                    </div>
                     <Image
                    src="/Images/Vector (8).svg"
                    alt=''
                    width="20"
                    height="20"
                    className='absolute w-[20px] h-[20px] top-5 right-4'
                    />
                  </div>
                </div>
              </div>
    </>
  )
}

export default SecondInvestment
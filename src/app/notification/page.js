import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import Image from 'next/image'

const Notification = () => {
  return (
    <DashboardLayout>
         {/* container 2 */}
             <div className='flex flex-col px-4 md:px-0'>
                {/* Search div */}
             <div className='bg-[#F9F9FA] relative w-full max-w-[360px] h-[36px] rounded-[16px] mx-auto mt-6 md:mt-12'>
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
              {/* Notification div */}
              <div className='flex flex-col w-full md:w-[1030px] h-auto md:h-[800px] gap-3 mt-5 md:mt-10'>
                {/* notification 1 */}
                <div className='flex flex-col relative w-full md:w-[1030px] h-auto md:h-[208px] bg-[#000019] rounded-[12px]'>
                    {/* inner div 1 */}
                    <div className='w-full md:w-[980px] h-auto md:h-[119px] mx-3 md:mx-5 my-4 md:my-8 pr-12 md:pr-0'>
                    {/* inner div 2 */}
                    <div className='w-full md:w-[854px] h-auto md:h-[119px] text-[14px] md:text-[16px] text-white space-y-3 md:space-y-5'>
                        <h6>New Bond Annocement</h6>
                        <p className='w-full md:w-[854px]'>
                            MeatFarm Bond is scheduled to be released from the 12th of June to 20th of July. 
                            The release of bonds to the general public by MeatFarm has been announced by the President 
                            of the company by  Dr. Ji Song
                        </p>
                        <p className='text-[12px]'>Today 6:00 am</p>
                    </div>
                    <Image
                    src="/Images/Frame 149.svg"
                    alt=""
                    width="40"
                    height="40"
                    className='absolute top-4 md:top-8 right-4 md:right-8 w-[30px] h-[30px] md:w-[40px] md:h-[40px]'
                    />
                </div>
            </div>
               {/* notification 2 */}
                <div className='flex flex-col relative w-full md:w-[1030px] h-auto md:h-[136px] bg-[#000019] rounded-[12px]'>
                    {/* inner div 1 */}
                    <div className='w-full md:w-[980px] h-auto md:h-[119px] mx-3 md:mx-5 my-4 pr-12 md:pr-0'>
                    {/* inner div 2 */}
                    <div className='w-full md:w-[854px] h-auto md:h-[119px] text-[14px] md:text-[16px] text-white space-y-3 md:space-y-5'>
                        <h6>Investment Confirmed</h6>
                        <p className='w-full md:w-[622px]'>
                            Your  investment with metaFarm has been confirmed and  reflected to your portfolio...
                        </p>
                        <p className='text-[12px]'>Today 5:45 am</p>
                    </div>
                    <Image
                    src="/Images/Frame 149 (1).svg"
                    alt=""
                    width="40"
                    height="40"
                    className='absolute top-4 md:top-8 right-4 md:right-8 w-[30px] h-[30px] md:w-[40px] md:h-[40px]'
                    />
                </div>
            </div>
               {/* notification 3 */}
                <div className='flex flex-col relative w-full md:w-[1030px] h-auto md:h-[136px] bg-[#000019] rounded-[12px]'>
                    {/* inner div 1 */}
                    <div className='w-full md:w-[980px] h-auto md:h-[119px] mx-3 md:mx-5 my-4 pr-12 md:pr-0'>
                    {/* inner div 2 */}
                    <div className='w-full md:w-[854px] h-auto md:h-[119px] text-[14px] md:text-[16px] text-white space-y-3 md:space-y-5'>
                        <h6>Investment Confirmed</h6>
                        <p className='w-full md:w-[637px]'>
                            Your  investment with Green-Farm has been confirmed and  reflected to your portfolio...
                        </p>
                        <p className='text-[12px]'>Yesterday 11:45 pm</p>
                    </div>
                    <Image
                    src="/Images/Frame 149 (1).svg"
                    alt=""
                    width="40"
                    height="40"
                    className='absolute top-4 md:top-8 right-4 md:right-8 w-[30px] h-[30px] md:w-[40px] md:h-[40px]'
                    />
                </div>
            </div>
               {/* notification 4 */}
                <div className='flex flex-col relative w-full md:w-[1030px] h-auto md:h-[136px] bg-[#000019] rounded-[12px]'>
                    {/* inner div 1 */}
                    <div className='w-full md:w-[980px] h-auto md:h-[119px] mx-3 md:mx-5 my-4 pr-12 md:pr-0'>
                    {/* inner div 2 */}
                    <div className='w-full md:w-[792px] h-auto md:h-[119px] text-[14px] md:text-[16px] text-white space-y-3 md:space-y-5'>
                        <h6>Exchange Confirmed</h6>
                        <p className='w-full md:w-[792px]'>
                            Your exchange of investment from Meta to Green-Farm has been confirmed and  reflected to your portfolio...
                        </p>
                        <p className='text-[12px]'>Yesterday 2:45 pm</p>
                    </div>
                    <Image
                    src="/Images/Frame 149 (1).svg"
                    alt=""
                    width="40"
                    height="40"
                    className='absolute top-4 md:top-8 right-4 md:right-8 w-[30px] h-[30px] md:w-[40px] md:h-[40px]'
                    />
                </div>
            </div>
               {/* notification 5 */}
                <div className='flex flex-col relative w-full md:w-[1030px] h-auto md:h-[136px] bg-[#000019] rounded-[12px]'>
                    {/* inner div 1 */}
                    <div className='w-full md:w-[980px] h-auto md:h-[119px] mx-3 md:mx-5 my-4 pr-12 md:pr-0'>
                    {/* inner div 2 */}
                    <div className='w-full md:w-[584px] h-auto md:h-[119px] text-[14px] md:text-[16px] text-white space-y-3 md:space-y-5'>
                        <div className='flex flex-row gap-3 md:gap-5'>
                            <Image
                            src="/Images/healthicons_agriculture-outline.svg"
                            alt=""
                            width="20"
                            height="20"
                            className='w-[18px] h-[18px] md:w-[20px] md:h-[20px]'
                            />
                        <h6>AfriVest Investment Confirmed</h6>
                        </div>
                        <p className='w-full md:w-[584px]'>
                           Your  investment to AfriVest has been confirmed and reflected to your portfolio...
                        </p>
                        <p className='text-[12px]'>Yesterday 12: 45pm</p>
                    </div>
                    <Image
                    src="/Images/Frame 149 (1).svg"
                    alt=""
                    width="40"
                    height="40"
                    className='absolute top-4 md:top-8 right-4 md:right-8 w-[30px] h-[30px] md:w-[40px] md:h-[40px]'
                    />
                </div>
            </div>
              </div>
               {/* Footer */}
            <footer className='flex flex-row text-[12px] text-[#010101] w-full max-w-[268px] h-[20px]
                gap-2 items-center justify-center md:justify-start mt-6 md:mt-12 mx-auto md:ml-[18rem]'>
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

export default Notification
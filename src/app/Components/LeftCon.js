import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LeftCon = () => {
  return (
    <>
        {/* container 1 */}
            <div className='flex flex-col mx-auto bg-growtoken-dark w-[270px] h-[1024px]'>
               <Image
                  src="/Images/Growtoken.svg"
                  alt="Logo"
                  width={30}
                  height={10}
                  className="mt-10 mx-auto w-[166px] h-[36px] md:w-[174px] md:h-[26px]"
                  />
                  <div className='w-[157px] h-[296px] mx-auto mt-25 text-[16px] space-y-5 p-[8px]'>
                    <div className='w-[141px] h-[220px] p-[4px] space-y-7'>
                      {/* Home */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/ic_round-dashboard (1).svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <Link href="/home" className='text-[16px] text-white mt-1.5 cursor-pointer'>Home</Link>
                      </div>
    
                      {/* Invest */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/healthicons_agriculture.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <Link href="/invest" className='text-[16px] text-white mt-1.5 cursor-pointer'>Invest</Link>
                      </div>
    
                      {/* Activity */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/fe_activity.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <Link href="/activity" className='text-[16px] text-white mt-1.5 cursor-pointer'>Activity</Link>
                      </div>
    
                      {/* Notification */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/ic_round-notifications.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <p className='text-[16px] text-white mt-1.5'>Notification</p>
                      </div>
                    </div>
                    {/* Exist */}
                     <div className='flex flex-row gap-2 w-[93px] h-[32px] ml-1'>
                        <Image
                         src="/Images/solar_settings-bold.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <p className='text-[16px] text-[#D61F1F] mt-1.5'>Exist</p>
                      </div>
                  </div>
            </div>
    </>
  )
}

export default LeftCon
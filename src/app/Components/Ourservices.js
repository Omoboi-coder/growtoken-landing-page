import React from 'react'
import Image from 'next/image'

const Ourservices = () => {
  return (
    <>
    <section id='our services'>
        {/* flex container */}
        <div className=' bg-[var(--color-growtoken-dark)] md:w-[1,440px] md:h-[614px]'>
            <h3 className='text-white text-[20px] pl-8 py-6 font-bold md:text-[24px] md:pl-20 '>
             Our Services
             </h3>
         {/* flex items*/}
        <div className='flex flex-row mx-auto justify-center gap-25 text-[#000019] overflow-hidden 
        px-4 md:gap-20 md:px-0 md:overflow-visible
         md:w-[1040px] md:h-[272px]'>
      {/* item 1 */}
    <div className='flex flex-col items-center justify-between ml-[18rem] p-4 bg-white
     shadow-md rounded-[8px] w-[200px] h-[248px] md:ml-0 flex-shrink-0'>
        <Image 
        src="Images/fluent-mdl2_hexadite-investigation.svg"
        alt=""
        width="36"
        height="36"
        className='mt-10'
        />
        <p className='text-[16px] text-center w-[174px] '>
          We locate Agricultural investments all around the globe
        </p>        
    </div>
    
    {/* item 2 */}
    <div className='flex flex-col items-center justify-between p-4
     bg-white shadow-md rounded-[8px] w-[200px] h-[248px] flex-shrink-0 md:ml-0 md:self-end'>
        <Image 
        src="/Images/arcticons_invest.svg"
        alt=""
        width="48"
        height="48"
        className='mt-10'
        />
         <p className='text-[16px] text-center w-[193px]'>
          We make the investments accessible to investors on our platform.
        </p>
    </div>
    
    {/* item 3 */}
    <div className='hidden md:flex flex-col items-center justify-between p-4
     bg-white shadow-md rounded-[8px] w-[200px] h-[248px]'>
        <Image 
        src="/Images/Group.svg"
        alt=""
        width="33"
        height="32"
        className='mt-12'
        />
        <p className='text-[16px] text-center w-[168px]'>
           With the power of our communities funding capacity
        </p>
    </div>
    
    {/* item 4 */}
    <div className='hidden md:flex flex-col items-center justify-between p-4
     bg-white shadow-md rounded-[8px] w-[200px] h-[248px] md:self-end'>
        <Image 
        src="/Images/arcticons_money-manager.svg"
        alt=""
        width="48" 
        height="48"
        className='mt-8'
        />
        <p className='text-[16px] text-center w-[180px]'>
            We manage the distribution of profit of participating investors
        </p>
    </div>
 </div>
    <div className='flex flex-col mt-15 mx-auto items-center md:w-[549px] md:h-[60px] md:flex-row'>
        <h2 className='text-white text-center text-[16px] w-[338px] h-[42px] md:text-[20px] md:w-[361px] md:h-[60px]'>
            HOW TO INVEST IN AGRICULTURE ON GROWTOKEN PLATFORM
        </h2>
        <button className="flex text-[var(--color-growtoken-orange)] px-6 py-4 mt-2 rounded-md hover:bg-white 
        border-2 border-transparent md:mt-0 cursor-pointer">
        Learn More 
        <Image
        src="/Images/Frame 26.svg"
        alt=""
        width="22"
        height="22"
        /> 
        </button>
    </div>
  </div>
</section>
    </>   
  )
}

export default Ourservices
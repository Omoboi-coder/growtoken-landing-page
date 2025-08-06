import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <>
    <section id='contacts' className='h-[632px] bg-contact-mobile md:bg-contact-gradient md:w-[1,440px] md:h-[449px]'>
        <h3 className='text-white text-[20px] pl-8 pt-6 md:text-[24px] md:pt-0 md:pl-15'>
            Contact
         </h3>
           {/*flex container */}
          <div className='flex flex-col gap-4 mx-auto md:mx-0 md:gap-15 pl-10 md:pl-[19rem] md:flex-row'>
         {/* container 1*/}
         <div className='flex flex-col'>
         {/* Name div */}
         <div className='flex flex-col mt-10 text-white w-[320px] h-[85px]'>
            <p className='text-[16px]'>
                Name
            </p>
            <div className='border-white border-b-1 h-[40px]'>

            </div>
            <p className='text-[12px] font-light' style={{color: '#F9F9F999'}}>
                Example: Jean Disney
            </p>

         </div>
            {/* Email div */}
          <div className='flex flex-col mt-10 text-white w-[320px] h-[79px]'>
            <p className='text-[16px]'>
                Email address
            </p>
            <div className='border-white border-b-1 h-[40px]'>

            </div>
            <p className='text-[12px] font-light' style={{color: '#F9F9F999'}}>
                Example: @gmail.com
            </p>

         </div>
         {/* Verification div */}
         <div className=' mt-10 w-[149px] mx-20 h-[54px] text-white md:mx-0'>
            <p className='text-[16px]'>
                Verification
            </p>
            <div className='flex flex-row w-[149px] h-[29px] gap-[8px] items-center'>
                <Image
                src="/Images/Frame 34.svg"
                alt=""
                width="18"
                height="18"
                />
                <p className='text-[16px]'>
                    I’m not a robot
                </p>

            </div>  
         </div>
        </div>
            
        <div className='flex flex-col gap-5 md:flex-row'>
            {/* container 2 */}
         <div className='hidden md:flex md:flex-row'>
           <Image
           src="/Images/Line 3.svg"
           alt=''
           width="8"
           height="8"
           className=''
           />
      </div>
      {/* container 3 */}
      <div className='w-[308px] h-[175px] md:mt-10 md:mb-0'>
        <p className='text-[16px] text-white'>
            Message
        </p>
        <div className=' border-white border-1 w-[308px] h-[150px] rounded-[8px]'>
            <div className='text-white text-[12px] font-light' style={{color: '#F9F9F999'}}>
                Write text here...
            </div>
        </div>
        <div className=' mt-5 w-[96px] h-[32px] text-center py-1 bg-white 
        rounded-[10px] ml-[7rem] md:ml-[13.2rem] md:mt-18 text-[var(--color-growtoken-orange)]'>
            Send
        </div>
      </div>
     </div>
    </div>
    </section>
    </>
  )
}

export default Contact
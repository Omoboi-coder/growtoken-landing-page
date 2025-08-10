import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <section 
        id='footer' className='bg-footer-mobile md:bg-footer-gradient'>
        {/* Main container */}
        <div className="mx-auto w-full h-[632px] md:h-[400px] px-6 py-8 lg:w-[84.4rem] 2xl:w-[90rem] ">  
          {/* Top section with logo, links, and social icons */}
          <div className="flex flex-col md:flex-row items-start mt-4 md:mt-12 md:mb-12"> 
            {/* footer Logo */}
            <div className="mb-8 ml-4 md:mb-0 md:ml-15">
              <Image
                src="/Images/Growtoken.svg"
                alt="Logo"
                width={174}
                height={20}
                className="w-[174px] h-[20px]"
              />
            </div>
            {/* Navigation Links */}
            <div className='flex flex-col text-white text-[16px] gap-4 mb-4 ml-4 md:ml-[8rem] 2xl:ml-[11rem] md:mb-0'>
              <a href='#' className='hover:text-gray-300 transition-colors'>Impact</a>
              <a href='#' className='hover:text-gray-300 transition-colors'>Hashgraph</a>
              <a href='#' className='hover:text-gray-300 transition-colors'>News</a>
              <a href='#' className='hover:text-gray-300 transition-colors'>About Us</a>
            </div>

            {/* Legal Links */}
            <div className='flex flex-col text-white text-[16px] gap-4 mb-8 ml-4 md:ml-10 md:mb-0'>
              <a href='#' className='hover:text-gray-300 transition-colors'>Terms of Services</a>
              <a href='#' className='hover:text-gray-300 transition-colors'>Privacy Policy</a>
              <a href='#' className='hover:text-gray-300 transition-colors'>Contact us</a>
            </div>

            {/* Social Media Icons */}
            <div className='flex flex-row gap-4 mt-2 ml-[6rem] md:ml-[25rem] md:mt-30'>
              <Image
                src="/Images/Discord.svg"
                alt='Discord'
                width="32"
                height="32"
                className='hover:opacity-80 transition-opacity cursor-pointer'
              />
              <Image
                src="/Images/Twitter.svg"
                alt='Social Media'
                width="32"
                height="32"
                className='hover:opacity-80 transition-opacity cursor-pointer'
              />
              <Image
                src="/Images/Telegram.svg"
                alt='Social Media'
                width="32"
                height="32"
                className='hover:opacity-80 transition-opacity cursor-pointer'
              />
              <Image
                src="/Images/Github.svg"
                alt='Social Media'
                width="32"
                height="32"
                className='hover:opacity-80 transition-opacity cursor-pointer'
              />
            </div>
          </div>
           {/* Bottom section with copyright*/}   
              <div className='flex flex-row text-[12px] font-medium text-white w-[268px] h-[20px] gap-2
               items-end mx-auto mt-20 md:mt-25 '>
                    <Image
                    src="/Images/Vector (5).svg"
                    alt=""
                    width="20"
                    height="20"
                    className='w-[20px] h-[20px]'
                    />
                    <p> 2023 </p>
                    <p> GROWTOKEN </p>
                    <p> All Rights Reserved </p>   
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer


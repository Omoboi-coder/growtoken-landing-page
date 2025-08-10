import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
    {/* Hero section */}
    <section id='hero' className='bg-[var(--color-growtoken-dark)]'>
        {/* flex container */}
       <div className='flex flex-col mx-auto lg:w-[84.4rem] 2xl:w-[90rem] px-7 py-8 md:px-0 md:py-0 md:flex-row md:h-[680px]'>

            {/* Content Container */}
            <div className='md:py-[10rem] md:pl-20 lg:px-[12rem] md:w-[30rem] lg:w-[40rem]'>
                <h1 className='font-extrabold text-[24px] text-center text-white mb-6 md:text-[30px] lg:text-[51px] md:text-left
                 md:w-[450px] lg:w-[745px] md:h-[146px] md:mb-0'>
                    The Future Of Agricultural Investment Is Here
                </h1>
                
                {/* Image - shows on mobile, positioned after h1 */}
                <div className='flex justify-center mb-6 md:hidden'>
                    <Image
                    src="/Images/image 6.svg"
                    alt=" "
                    width="319"
                    height="214"
                    className='object-cover w-full h-[214px]'
                    />
                </div>
                
                <div className='flex flex-col gap-4 mb-6 w-[320px] h-[126px] md:w-[403px] 
                md:h-[94px] md:my-5 md:gap-0 md:text-left '>
                <p className='text-[16px] text-white'>
                    Enhancing sustainable food solution with the power of blockchain.
                </p> 
                <p className='text-[16px] text-white'>
                    Improving Agricultural financing, Safe investment, Food processing and overall Insurance
                </p> 
                </div>
                
                <div className='flex flex-row gap-4 items-center justify-center md:flex-row md:gap-4 
                 mt-10 md:mt-2 md:w-[20rem] md:justify-start'>
                    
                    <Link href="/home">
                    <button className="bg-white text-[var(--color-growtoken-orange)] px-6 py-0 md:py-2 rounded-md hover:bg-white 
                    border-2 border-transparent cursor-pointer">
                    Get Started
                    </button>
                    </Link>
                    
                    <button className="flex text-[var(--color-growtoken-orange)] px-6 py-0 md:py-2 rounded-md hover:bg-white 
                    border-2 border-transparent cursor-pointer">
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

            {/* Desktop right image - hidden on mobile */}
            <div className='hidden md:block md:w-1/2'>
                <Image
                src="/Images/image 6.svg"
                alt=" "
                width="50"
                height="50"
                className='md:mt-25 md:w-[760px] md:h-[520px]'
                />
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero
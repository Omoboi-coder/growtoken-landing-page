import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <>
    <section id='testimonials' className='bg-growtoken-dark'>
        {/* flex container */}
        <div className='flex flex-col text-white px-4 py-6 mx-auto md:px-0 md:py-0 
        md:[] lg:w-[84.4rem] 2xl:w-[90rem] md:h-[420px]'>
            <h3 className='text-[20px] md:text-[24px] ml-8 md:pl-15 py-5'>
                Testimonials
            </h3>
            {/* container */}
            <div className='flex flex-col mx-auto gap-25 md:flex-row'>
            {/* ipsum 1 */}
            <div className='flex flex-col gap-6 w-[324px] h-[284px] md:w-[421px] md:h-[265px]'>
                <p className='h-[138px] text-[15px] text-white'> 
                    <span className='flex-col text-[48px]'>
                        “
                    </span>
                    <br/>
                      Lorem ipsum dolor sit amet consectetur. Nisl tincidunt nisi morbi amet mus platea sit.
                      Fermentum ornare ut turpis lacinia. Id lectus potenti phasellus risus adipiscing orci sed. 
                      Enim lobortis dui quam egestas eu tellus amet.
                </p>
                <div className='flex flex-row mx-auto items-center space-x-4 mt-10 md:mx-0 md:mt-5'>
                    <Image 
                    src="Images/Frame 42.svg"
                    alt=""
                    width="80"
                    height="80"  
                    />
                    <div className='flex flex-col text-white'>
                    <p className='text-[16px]'>
                        Jean Disney
                    </p>
                    <p className='text-[12px]'>
                        CEO Signor
                    </p>
                    </div>

                </div>
            </div>
                {/* ipsum 2 */}
            <div className=' hidden md:flex md:flex-col gap-6 w-[418px] h-[240px] md:mt-5 '>
               <p className='h-[138px] text-[15px] text-white'> 
                    <span className='flex-col text-[48px]'>
                        “
                    </span>
                    <br/>
                        Enim lobortis dui quam egestas eu tellus amet. Commodo aliquet tincidunt 
                        sed euismod orci. Eget id vitae risus ipsum commodo vitae et gravida erat.
                    </p>
                <div className='flex flex-row items-center space-x-4'>
                    <Image 
                    src="Images/Frame 43.svg"
                    alt=""
                    width="80"
                    height="80"  
                    />
                    <div className='flex flex-col text-white'>
                    <p className='text-[16px]'> 
                        Lady Danbury
                    </p>
                    <p className='text-[12px]'>
                        Crypto Investor
                    </p>
                    </div>
                </div>
            </div>
        </div>
                <Image
                src="/Images/Frame 50.svg"
                alt=''
                width="52"
                height="12"
                className='mx-auto mt-6 w-[40px] h-[8px] md:w-[52px] md:h-[12px] md:mt-10 '
                />
     </div>
  </section>
</>
  )
}

export default Testimonials
import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <>
    <section id='features'>
        {/* flex container */}
        <div className='flex flex-col px-4 py-6 bg-growtoken-dark md:gap-[5rem] md:flex-row md:w-[1,440px] md:h-[620px] 
        md:px-0 md:py-0 md:bg-feature-gradient' > 
            <h3 className='text-white text-[20px] font-bold ml-4 w-[107px] h-[31px] mb-6 
            md:ml-10 md:my-4 md:text-[24px] md:mb-0'>
                Features
            </h3>   
            
            {/* Main content area with background image and overlays - Desktop only */}
            <div className='hidden md:block relative md:h-[600px]'>
                <Image
                src="/Images/image 8.svg"
                alt=''
                width="50"
                height="50"
                className='md:w-[860px] md:h-[600px] rounded-[20px] md:pt-5'
                />
                
                {/* Overlay 1 - Top Left */}
                <div className='absolute top-18 left-6 flex flex-row items-center gap-4 z-10 md:w-[371px] md:h-[78px]'>
                    <Image
                    src="/Images/Frame 59.svg"
                    alt=''
                    width="60"
                    height="60"
                    />
                    <div className='flex flex-col w-[299px] h-[85px]'>
                        <h4 className='text-black text-[20px]'>
                            Trust & Authorization-Free
                        </h4>
                        <p className='text-black text-[12px]'>
                            Lorem ipsum dolor sit amet consectetur. Lorem etiam volutpat morbi vitae ut dui id tempor.
                             Sed est eget dui mauris pellentesque volutpat tempor libero in.
                        </p>
                    </div>
                </div>

                {/* Overlay 2 - Top Right */}
                <div className='absolute top-18 right-8 flex flex-row items-center gap-4 z-10'>
                    <Image
                    src="/Images/Frame 60.svg"
                    alt=''
                    width="60"
                    height="60"
                    />
                    <div className='flex flex-col w-[299px] h-[85px]'>
                        <h4 className='text-black text-[20px]'>
                            Standard & Interoperability
                        </h4>
                        <p className='text-black text-[12px]'>
                            Lorem ipsum dolor sit amet consectetur. Lorem etiam volutpat morbi vitae ut dui id tempor.
                             Sed est eget dui mauris pellentesque volutpat tempor libero in.
                        </p>
                    </div>
                </div>

                {/* Overlay 3 - Bottom Left */}
                <div className='absolute bottom-[4rem] left-6 flex flex-row items-center gap-4 z-10'>
                    <Image
                    src="/Images/Frame 62.svg"
                    alt=''
                    width="60"
                    height="60"
                    />
                    <div className='flex flex-col w-[299px] h-[85px]'>
                        <h4 className='text-black text-[20px]'>
                            Secure
                        </h4>
                        <p className='text-black text-[12px]'>
                            Lorem ipsum dolor sit amet consectetur. Lorem etiam volutpat morbi vitae ut dui id tempor.
                             Sed est eget dui mauris pellentesque volutpat tempor libero in.
                        </p>
                    </div>
                </div>

                {/* Overlay 4 - Bottom Right */}
                <div className='absolute bottom-[4rem] right-8 flex flex-row items-center gap-4 z-10'>
                    <Image
                    src="/Images/Frame 61.svg"
                    alt=''
                    width="60"
                    height="60"
                    
                    />
                    <div className='flex flex-col w-[299px] h-[85px]'>
                        <h4 className='text-black text-[20px]'>
                            Decetraliization
                        </h4>
                        <p className='text-black text-[12px]'>
                            Lorem ipsum dolor sit amet consectetur. Lorem etiam volutpat morbi vitae ut dui id tempor.
                             Sed est eget dui mauris pellentesque volutpat tempor libero in.
                        </p>
                    </div>
                </div>
            </div>
             {/* Mobile overlay 1 */}
            <div className='flex flex-row mx-auto gap-4 mb-6 w-[260px] h-[57px] md:hidden'>
                <Image
                src="Images/Frame 59 (1).svg"
                alt=''
                width="36"
                height="36"
                />
                <div className='flex flex-col '>
                    <h4 className='text-white text-[16px]'>
                        Trust & Authorization-Free
                    </h4>
                    <p className='text-white text-[12px]'>
                        Access and availability for everyone, free from third party authorization
                    </p>
                </div>
            </div>

            {/* Mobile overlay 2 */}
            <div className='flex flex-row mx-auto gap-4 mb-10 w-[260px] h-[73px] md:hidden'>
                <Image
                src="/Images/Frame 60 (1).svg"
                alt=''
                width="36"
                height="36"
                />
                <div className='flex flex-col '>
                    <h4 className='text-white text-[16px]'>
                        Standard & Interoperability
                    </h4>
                    <p className='text-white text-[12px]'>
                        Follows financial protocol based on DeFi factors. Protocols can 
                        be overlaid to createmore potential scenerios.
                    </p>
                </div>
            </div>

            {/* Mobile image */}
            <div className='mb-4 mx-auto md:hidden'>
                <Image
                src="/Images/image 8.svg"
                alt=''
                width="320"
                height="200"
                className='w-[318px] h-[235px] object-cover rounded-[20px]'
                />
            </div>

            {/* Mobile overlay 3 */}
            <div className='flex flex-row mx-auto gap-4 mb-6 w-[287px] h-[57px] md:hidden'>
                <Image
                src="/Images/Frame 62 (1).svg"
                alt=''
                width="36"
                height="36"
                />
                <div className='flex flex-col'>
                    <h4 className='text-white text-[16px]'>
                        Secure
                    </h4>
                    <p className='text-white text-[12px]'>
                        Users face minimal risk as financial business logic is implemented by smart contracts
                    </p>
                </div>
            </div>

            {/* Mobile overlay 4 */}
            <div className='flex flex-row mx-auto gap-4 w-[287px] h-[57px] md:hidden'>
                <Image
                src="/Images/Frame 61 (1).svg"
                alt=''
                width="36"
                height="36"
                />
                <div className='flex flex-col'>
                    <h4 className='text-white text-[16px]'>
                        Decetraliization
                    </h4>
                    <p className='text-white text-[12px]'>
                        Holder can jointly govern the community and together make decisions
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Features
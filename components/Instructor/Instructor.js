import React from 'react'
import Image from 'next/image'
import AmazonLogo from '../../public/resources/images/amazon-logo.svg'
import MentorImg from '../../public/resources/images/mentor-vivek-img.png'
import Linkedin from '../../public/resources/images/linkedin-icon.png'
import FlexibleLink from '../FlexibleLink/FlexibleLink'

function Instructor() {
  return (
    <div className='lg:py-[60px]  lg:flex-row flex-col py-[40px] w-[335px] lg:w-full mx-auto'>
      <h1 className="mx-auto max-w-[1018px] relative text-3xl text-black pb-2 text-center">
        <span className='lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] tracking-wide'>Learn with Industry Experienced Instructor</span>
        <span
            className="hidden lg:inline absolute left-[28%] bottom-0 w-[720px] h-[4px] bg-[#4659CA]"
            style={{ marginTop: '4px' }}
        ></span>
      </h1>
      <div className='flex lg:flex-row flex-col lg:gap-[40px] gap-[20px] justify-center lg:mt-[36px] mt-[20px]'>
        <div className='lg:w-[241px] w-[160px] mx-auto lg:mx-0'>
            <Image src={MentorImg} alt='mentor-img'/>
        </div>
        <div className='max-w-[839px]'>
            <p className='font-gilroyregular lg:text-[20px] lg:leading-[28px] text-[16px] leading-[24px] tracking-wide'>Vivek has taught 10,000+ students through on campus workshops and online courses on Interview Preparation. He has worked at Amazon with its High Scale Systems for three years after graduating from IIT. He is loved by his students for his lucid in-depth explanations and ability to make people think through problems.</p>
            <div className='mt-[20px]'>
                <h3 className='text-[20px] leading-[28px] tracking-wide'>Vivekanand Vivek</h3>
                <div className='flex items-center gap-[12px]'>
                    <h3 className='mt-[4px] text-[20px] leading-[28px] tracking-wide'>IIT BHU Alumni, Ex-SDE</h3>
                    <div className='w-[66px] relative top-[4px'>
                        <Image src={AmazonLogo} alt='amazon-logo'/>
                    </div>
                </div>
                <div className='w-[24px] mt-[5px] cursor-pointer'>
                  <FlexibleLink href={'https://www.linkedin.com/in/vivekanand-vivek-7a4ab388/'}>
                    <Image src={Linkedin} alt='linkedin-icon'/>
                  </FlexibleLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Instructor

import React from 'react'
import Image from 'next/image'
import AmazonLogo from '../../public/resources/images/amazon-logo.png'
import MentorImg from '../../public/resources/images/mentor-vivek-img.png'
import Linkedin from '../../public/resources/images/linkedin-icon.png'

function Instructor() {
  return (
    <div className='py-[60px]'>
      <h1 className="relative text-3xl text-black pb-2 text-center">
        <span className='text-[48px] leading-[64px] tracking-wide'>Learn with Industry Experienced Instructor</span>
        <span
            className="absolute left-[530px] bottom-0 w-[720px] h-[4px] bg-[#4659CA]"
            style={{ marginTop: '4px' }}
        ></span>
      </h1>
      <div className='flex gap-[40px] justify-center mt-[36px]'>
        <div className='max-w-[241px]'>
            <Image src={MentorImg} alt='mentor-img'/>
        </div>
        <div className='max-w-[839px]'>
            <p className='font-gilroyregular text-[20px] leading-[28px] tracking-wide'>Vivek has taught 10,000+ students through on campus workshops and online courses on Interview Preparation. He has worked at Amazon with its High Scale Systems for three years after graduating from IIT. He is loved by his students for his lucid in-depth explanations and ability to make people think through problems.</p>
            <div className='mt-[20px]'>
                <h3 className='text-[20px] leading-[28px] tracking-wide'>Vivekanand Vivek</h3>
                <div className='flex items-center gap-[12px]'>
                    <h3 className='mt-[4px] text-[20px] leading-[28px] tracking-wide'>IIT BHU Alumni, Ex-SDE</h3>
                    <div className='w-[66px]'>
                        <Image src={AmazonLogo} alt='amazon-logo'/>
                    </div>
                </div>
                <div className='w-[24px] mt-[5px]'>
                    <Image src={Linkedin} alt='linkedin-icon'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Instructor

import React from 'react'
import Image from 'next/image'
import StudentRating from '../../resources/images/student-rating-img.png'
import IndianFlag from '../../resources/images/indian-flag.png'
import RocketIcon from '../../resources/images/banner-rocket.svg'
import ViewIcon from '../../resources/images/view-down-arrow-icon.png'

function Banner() {
  return (
    <div className='bg-[#181B43] py-[60px] flex flex-wrap justify-center gap-[80px]'>
        <div className='w-[734px]'>
            <h1 className='text-[#F8FAFC] font-normal text-[56px] leading-[60px]'>Become a Tech Pro!</h1>
            <h2 className='mt-3 text-[#F8FAFC] font-normal text-[24px] leading-[32px]'>Transform Your Skills with Our Expert-Led Courses!</h2>
            <p className='mt-10 text-[#F8FAFC] font-normal text-[20px] leading-[28px]'>Gain hands-on experience, improve your coding skills, and accelerate your tech career with expert guidance and support.</p>
            <div className='mt-10 bg-[#E1E7F81A] w-[417px] px-[24px] py-[12px] rounded-xl'>
             <Image src={StudentRating} alt='student-rating'/>
            </div>
            <div className='mt-[40px] flex gap-[20px]'>
                <button className='flex gap-[4px] w-[268px] bg-[#3940A0] py-[12px] px-[36px] rounded-[49px] border-none'>
                    <p className='text-[#FFFFFF] font-normal text-[16px] leading-[24px]'>Start 7-Days Free Trial</p>
                    <div>
                        <Image src={RocketIcon} alt='rocket-icon'/>
                    </div>
                </button>
                <button className='flex justify-center gap-[4px] w-[268px] bg-[#E1E7F81A] py-[12px] px-[46.5px] rounded-[49px] border-[1px] border-[#64748B]'>
                    <p className='text-[#FFFFFF] font-normal text-[16px] leading-[24px]'>View Courses</p>
                    <div className='w-[20px]'>
                        <Image src={ViewIcon} alt='view-icon'/>
                    </div>
                </button>
            </div>
        </div>
        <div className='w-[498px] bg-[#F8FAFC] rounded-[20px] px-6 py-5'>
            <form>
                <div>
                    <label className='font-normal text-[16px] leading-[24px] text-[#020617]'>Name</label>
                    <br />
                    <input
                        className="w-full mt-[4px] py-[10px] pl-5 rounded-[6px] bg-[#F1F5F9] placeholder:text-[#64748B]"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                    />
                </div>
                <div className='mt-[20px]'>
                    <label className='font-normal text-[16px] leading-[24px] text-[#020617]'>Email Address</label>
                    <br />
                    <input
                        className="w-full mt-[4px] py-[10px] pl-5 rounded-[6px] bg-[#F1F5F9] placeholder:text-[#64748B]"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                    />
                </div>
                <div className='mt-[20px] relative'>
                    <label className='font-normal text-[16px] leading-[24px] text-[#020617]'>Phone number</label>
                    <br />
                    <div
                        className="flex items-center"
                        htmlFor="tfp-form-mobile-number"
                    >
                        <div className="absolute w-[25px] top-[37px] left-[6px] z-10" role="presentation">
                            <Image src={IndianFlag} alt='indian-flag-icon' />
                        </div>
                        <select name="countryCode" className='w-[65px] h-[45px] bg-[#F1F5F9] relative top-[2px] rounded-s-md border border-[#E2E8F0]'>
                            <option value="+91" className='text-[#F1F5F9]'></option>
                        </select>
                        {/* <p>+91</p> */}
                        <input
                            className="w-full mt-[4px] py-[10px] pl-5 bg-[#F1F5F9] placeholder:text-[#64748B] rounded-e-md border border-[#E2E8F0]"
                            type="tel"
                            name="phone"
                            placeholder="Enter your 10-digit number"
                            required
                            minLength={10}
                            maxLength={10}
                        />
                    </div>

                    <p className="mt-[4px] font-normal text-[14px] leading-[20px] text-[#020617] tracking-wide">
                        We have a strict no-spam policy and will only contact you regarding your
                        application.
                    </p>
                </div>
                <button className="mt-[20px] w-[450px] flex justify-center  bg-[#3940A0] py-[12px] rounded-[10px] border-none" type="submit">
                    <p className='text-[#FFFFFF] font-normal text-[16px] leading-[24px]'>Book A Free Consultation</p>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Banner

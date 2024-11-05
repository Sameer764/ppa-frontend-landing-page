import React from 'react'
import Image from 'next/image'
import StudentRating from '../../resources/images/student-rating-img.png'
import IndianFlag from '../../resources/images/indian-flag.png'
import RocketIcon from '../../resources/images/banner-rocket.svg'

function Banner() {
  return (
    <div className='bg-[#181B43] px-16 py-[60px] flex gap-[80px]'>
        <div className='w-[734px]'>
            <h1 className='text-[#F8FAFC] font-normal text-[56px] leading-[60px]'>Become a Tech Pro!</h1>
            <h2 className='mt-3 text-[#F8FAFC] font-normal text-[24px] leading-[32px]'>Transform Your Skills with Our Expert-Led Courses!</h2>
            <p className='mt-10 text-[#F8FAFC] font-normal text-[20px] leading-[28px]'>Gain hands-on experience, improve your coding skills, and accelerate your tech career with expert guidance and support.</p>
            <div className='mt-10 bg-[#E1E7F81A] w-[417px] px-[24px] py-[12px] rounded-xl'>
             <Image src={StudentRating} alt='student-rating'/>
            </div>
            <div className='mt-[40px] flex gap-[20px]'>
                <button className='w-[268px] bg-[#3940A0] py-[12px] px-[36px] rounded-[49px] border-none'>
                    <p className='text-[#FFFFFF] font-normal text-[16px] leading-[24px]'>Start 7-Days Free Trial</p>
                </button>
                <button className='w-[268px] bg-[#E1E7F81A] py-[12px] px-[46.5px] rounded-[49px] border-[1px] border-[#64748B]'>
                    <p className='text-[#FFFFFF] font-normal text-[16px] leading-[24px]'>View Courses</p>
                </button>
            </div>
        </div>
        <div className='w-[498px] bg-[#F8FAFC] rounded-[20px] px-6 py-5'>
            <form>
                <div>
                    <label>Name</label>
                    <br />
                    <input
                        className=""
                        type="text"
                        name="name"
                        placeholder="Enter full name"
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <br />
                    <input
                        className=""
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        required
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <br />
                    <div
                        className=""
                        htmlFor="tfp-form-mobile-number"
                    >
                        <div className="" role="presentation">
                            <Image src={IndianFlag} alt='indian-flag-icon' />
                        </div>
                        <select name="countryCode">
                            <option value="+91">+91 (IND)</option>
                        </select>
                        {/* <p>+91</p> */}
                        <input
                            className=""
                            type="tel"
                            name="phone"
                            placeholder="Enter 10-digit number"
                            required
                            minLength={10}
                            maxLength={10}
                        />
                    </div>

                    <p className="">
                        We have a strict no-spam policy and will only contact you regarding your
                        application.
                    </p>
                </div>
                <button className="w-[450px] flex justify-center  bg-[#3940A0] py-[12px] rounded-[10px] border-none" type="submit">
                    <p className='text-[#FFFFFF] font-normal text-[16px] leading-[24px]'>Book A Free Consultation</p>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Banner

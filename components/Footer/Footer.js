import React from 'react'
import Image from 'next/image'
import { AboutUs, PopularPrograms, Courses, Contacts, Socials } from '@/Constants/MainPageConstants/FooterConstants'

function Footer() {
    return (
        <div className='bg-[#181b43] py-[40px] flex justify-center'>
            <div className='max-w-[1312px] flex gap-[40px]'>
                <div>
                    <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>About us</h3>
                    <div className='flex flex-col gap-[20px] mt-[12px]'>
                        {
                            AboutUs.map((about) => (
                                <p key={about.id} className='text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>{about.aboutTxt}</p>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>Popular ProgramS</h3>
                    <div className='mt-[12px] flex flex-col gap-[20px]'>
                        {
                            PopularPrograms.map((program) => (
                                <div key={program.id} className='flex gap-[12px] items-center'>
                                    <div className='w-[116px]'>
                                        <Image src={program.programImg} alt='program-img' />
                                    </div>
                                    <div className='max-w-[296px]'>
                                        <h3 className='text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>{program.programName}</h3>
                                        <p className='mt-[4px] text-[#f8fafc] text-[12px] leading-[16px] tracking-wide'>{program.programDesc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>More Courses</h3>
                    <div className='mt-[12px] flex flex-col gap-[20px]'>
                        {
                            Courses.map((course) => (
                                <p key={course.id} className='text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>{course.courseName}</p>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>Contact Us</h3>
                        <div className='mt-[12px] flex flex-col gap-[20px] max-w-[271px]'>
                            {
                                Contacts.map((contact) => (
                                    <div className='flex gap-[8px] items-center'>
                                        <div className='w-[24px]'>
                                            <Image src={contact.contactIcon} alt='contact-icon' />
                                        </div>
                                        <h3 className='text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>{contact.contactTxt}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='mt-[40px]'>
                        <div>
                            <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>Social Links</h3>
                            <div className='flex gap-[12px] mt-[12px]'>
                                {
                                    Socials.map((social) => (
                                        <div key={social.id} className='w-[40px]'>
                                            <Image src={social.socialIcon} alt='social-icon' />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='mt-[40px]'>
                            <h3 className='text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>All Right Reserved with @Programming Pathshala</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
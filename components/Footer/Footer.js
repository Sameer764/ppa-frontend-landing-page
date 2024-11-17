import React from 'react'
import Image from 'next/image'
import { AboutUs, PopularPrograms, Courses, Contacts, Socials } from '@/Constants/MainPageConstants/FooterConstants'
import FlexibleLink from '../FlexibleLink/FlexibleLink'

function Footer() {
    return (
        <div className='bg-[#181b43] py-[40px] lg:px-0 px-[20px] flex justify-center'>
            <div className='flex lg:flex-row flex-col lg:gap-[40px] gap-[20px]'>
                <div>
                    <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>About us</h3>
                    <div className='flex flex-col gap-[20px] mt-[12px]'>
                        {
                            AboutUs.map((about) => (
                                <FlexibleLink key={about.id} href={about.aboutLink}>
                                    <p className='cursor-pointer font-gilroyregular text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>{about.aboutTxt}</p>
                                </FlexibleLink>
                            ))
                        }
                    </div>
                </div>
                <div className='lg:w-[431px] -order-[1] lg:order-none'>
                    <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>Popular ProgramS</h3>
                    <div className='mt-[12px] flex flex-col gap-[20px]'>
                        {
                            PopularPrograms.map((program) => (
                                <FlexibleLink key={program.id} href={program.programLink}>
                                    <div className='cursor-pointer flex items-center'>
                                        <div className='lg:w-[116px] w-[113px]'>
                                            <Image src={program.programImg} alt='program-img' />
                                        </div>
                                        <div className='lg:max-w-[296px] max-w-[207px]'>
                                            <h3 className='text-[#f8fafc] text-[14px] leading-[20px] ml-[20px] tracking-wide text-wrap'>{program.programName}</h3>
                                        </div>
                                    </div>
                                </FlexibleLink>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>More Courses</h3>
                    <div className='mt-[12px] flex flex-col gap-[20px]'>
                        {
                            Courses.map((course) => (
                                <FlexibleLink key={course.id} href={course.courseLink}>
                                    <p className='cursor-pointer font-gilroyregular text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>{course.courseName}</p>
                                </FlexibleLink>
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
                                    <div key={contact.id} className='cursor-pointer flex gap-[8px] items-center'>
                                        <div className={`${contact.id === 2 ? 'w-[35px]' : 'w-[24px]'}`}>
                                            <Image src={contact.contactIcon} width={24} alt='contact-icon' />
                                        </div>
                                        <h3 className='font-gilroyregular text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>{contact.contactTxt}</h3>
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
                                        <div key={social.id} className='cursor-pointer w-[40px]'>
                                            <FlexibleLink href={social.socialLink}>
                                                <Image src={social.socialIcon} alt='social-icon' />
                                            </FlexibleLink>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='mt-[40px]'>
                            <h3 className='font-gilroyregular text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>All Right Reserved with @Programming Pathshala</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import Image from 'next/image'
import LinkedinIcon from '../../public/resources/images/linkedin-icon.png'
import Styles from './StoryCard.module.css'

function StoryCard({id,studentPic,studentName,studentRole,studentCompany,linkedinLink,studentReview}) {
  return (
    <div className={`${Styles['story-card']} w-[421px] bg-[#ffffff] p-[20px] rounded-[20px]`}>
        <div className='flex justify-between'>
            <div className='flex gap-[12px] items-center'>
                <div className='w-[60px]'>
                    <Image src={studentPic} alt='student-pic'/>
                </div>
                <div>
                    <h3 className='text-[20px] leading-[28px] tracking-wide'>{studentName}</h3>
                    <div className='mt-[4px] flex gap-[8px] items-center'>
                        <h3>{studentRole}</h3>
                        <div className='w-[94px]'>
                            <Image src={studentCompany} alt='company-icon'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[24px]'>
                <Image src={LinkedinIcon} alt='linkedin-icon'/>
            </div>
        </div>
        {
            studentReview.map((review,index)=>(
                <p key={index} className='font-gilroymedium mt-[20px] text-[16px] leading-[24px] tracking-wide'>
                    {review}
                </p>
            ))
        }
    </div>
  )
}

export default StoryCard

import React from 'react'
import Image from 'next/image'
import UpArrow from '../../public/resources/images/up-arrow-white-icon.png'
import LocationIcon from '../../public/resources/images/location-red-icon.png'

function ProgramCard({id,programMode,programImg,programAlt,programLocation,programHead,programFeatures,programBtn}) {
  return (
    <div key={id}>
        <div>
            <h3 className='text-[#020617] lg:text-[32px] lg:leading-[40px] text-[20px] leading-[28px] tracking-wide'>{programMode}</h3>
            <div className='lg:mt-[24px] mt-[12px] max-w-[646px] bg-[#f1f5f9] lg:bg-[#FFFFFF] lg:p-[20px] p-0  rounded-[20px]'>
                <div>
                    <Image src={programImg} alt={programAlt}/>
                </div>
                <p className='font-gilroysemibold lg:mt-[24px] mt-[12px] text-[#DC2626] text-[16px] leading-[20px] tracking-wide'>
                    {
                        programLocation.length>0 &&
                            <span className='flex gap-[4px] items-center'>
                                <Image src={LocationIcon} width={24} alt='location-icon'/>
                                <span>{programLocation}</span>
                            </span>
                    }
                </p>
                <h2 className='lg:mt-[12px] mt-[4px] text-[#020617] lg:text-[40px] lg:leading-[52px] text-[24px] leading-[32px] tracking-wide'>{programHead}</h2>
                <div className='lg:mt-[20px] mt-[12px] flex flex-wrap lg:gap-[12px] gap-[8px]'>
                    {
                        programFeatures.map((programFeature,index)=>(
                            <div key={index} className='text-[9px] leading-[16px] lg:text-[16px] lg:leading-[24px] font-gilroymedium w-fit lg:px-[24px] lg:py-[12px] px-[12px] py-[8px] bg-[#F1F5F9] border border-[#64748B] rounded-[32px]'>{programFeature}</div>
                        ))
                    }
                </div>
                <div className={`${programAlt}`}>
                    <button className='flex items-center gap-[4px] lg:mt-[20px] mt-[12px] lg:w-fit w-full bg-[#3940A0] py-[12px] px-[72px] rounded-[12px] border-none'>
                        <span className='inline-block text-[#ffffff] text-[16px] leading-[24px] tracking-wide'>{programBtn}</span>
                        <span className='inline-block'>
                            <Image src={UpArrow} width={24}/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgramCard

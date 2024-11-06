import React from 'react'
import Image from 'next/image'

function ProgramCard({id,programMode,programImg,programAlt,programLocation,programHead,programFeatures,programBtn}) {
  return (
    <div key={id}>
        <div>
            <h3 className='text-[#020617] text-[32px] leading-[40px] tracking-wide'>{programMode}</h3>
            <div className='mt-[24px] w-[646px] bg-[#FFFFFF] p-[20px] rounded-[20px]'>
                <div>
                    <Image src={programImg} alt={programAlt}/>
                </div>
                <p className='mt-[24px] text-[#DC2626] text-[16px] leading-[20px] tracking-wide'>{programLocation}</p>
                <h2 className='mt-[12px] text-[#020617] text-[40px] leading-[52px] tracking-wide'>{programHead}</h2>
                <div className='mt-[20px] flex flex-wrap gap-[12px]'>
                    {
                        programFeatures.map((programFeature)=>(
                            <div className='w-fit px-[24px] py-[12px] bg-[#F1F5F9] border border-[#64748B] rounded-[32px]'>{programFeature}</div>
                        ))
                    }
                </div>
                <div className={`${programAlt}`}>
                    <button className='mt-[20px] w-fit bg-[#3940A0] py-[12px] px-[72px] rounded-[12px] border-none text-[#ffffff] text-[16px] leading-[24px] tracking-wide'>{programBtn}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgramCard

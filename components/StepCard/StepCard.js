'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './StepCard.module.css'

function StepCard({ id, stepWidth, stepNo, stepClass, stepDesc, stepMap, stepStudent, stepDescImg }) {

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target)
            if (entry.target.classList.contains('step-card-1')) {
              setTimeout(() => {
                entry.target.classList.add(styles['show-blue-card']);
              }, 3000);
            }
            if (entry.target.classList.contains('step-card-2')) {
              setTimeout(() => {
                entry.target.classList.add(styles['show-green-card']);
              }, 4000);
            }
            if (entry.target.classList.contains('step-card-3')) {
              setTimeout(() => {
                entry.target.classList.add(styles['show-orange-card']);
              }, 1000);
            }
            if (entry.target.classList.contains('step-card-4')) {
              setTimeout(() => {
                entry.target.classList.add(styles['show-red-card']);
              }, 2000);
            }
            if (entry.target.classList.contains('step-card-5')) {
              const targetChild = entry.target.querySelector('.step-last-card');
              setTimeout(() => {
                targetChild.classList.add(styles['show-last-card']);
              }, 500);
            }
          }
        })
      })

      const stepElements = document.querySelectorAll('.step-card');
      stepElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
  }
  }, []);

  return (
    <div className={`step-card step-card-${id} ${styles[stepWidth]} lg:relative`} key={id}>
      <div className={`${styles[stepClass]} w-[313px] flex flex-col gap-[8px]`}>
        <h3 className='py-[8px] pl-[20px] text-[#ffffff] text-[20px] leading-[28px] tracking-wide'>{stepNo}</h3>
        <ul>
          {
            stepDesc?.map((desc, index) => (
              <li className='font-gilroymedium text-[16px] leading-[24px] tracking-wide text-[#191d23]' key={index}>{desc}</li>
            ))
          }
        </ul>
      </div>
      <div className={`${styles[stepMap[1]]} lg:absolute right-0 bottom-0`}>
        {
          (stepMap.length>0)&&<Image src={stepMap[0]} alt='step-map' />
        }
      </div>
      {
        (id===5) &&
        <div className={`hidden lg:flex relative top-[5%] left-[100%] step-last-card ${styles['last-card']}`}>
          <div className='w-[252px]'>
            <Image src={stepStudent} alt='step-stundent'/>
          </div>
          <div className='w-[276px] relative right-[-23%] top-[50px]'>
            <Image src={stepDescImg} alt='step-desc-img'/>
          </div>
        </div>
      }
    </div>
  )
}

export default StepCard

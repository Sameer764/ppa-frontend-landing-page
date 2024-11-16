import React from 'react'
import Image from 'next/image'
import styles from './StepCardMobile.module.css'
import { FiMapPin } from "react-icons/fi";

function StepCardMobile({ id, stepWidth, stepNo, stepClass, stepDesc}) {
    const stepDiv="step-"+id;
    return (
        <div className={`${styles[stepDiv]}`}>
            <div className={`step-card step-card-${id} ${styles[stepWidth]}`}>
                <div className={`${styles[stepClass]} w-[313px] flex flex-col gap-[8px]`}>
                    <div className={`${styles['step-div']} py-[8px] pl-[20px] flex gap-[8px]`}>
                        <div>
                            <FiMapPin className={styles.icon}/>    
                        </div>
                        <h3 className='text-[#ffffff] text-[20px] leading-[28px] tracking-wide'>{stepNo}</h3>
                    </div>
                    <ul>
                        {
                            stepDesc?.map((desc, index) => (
                                <li className='font-gilroymedium text-[16px] leading-[24px] tracking-wide text-[#191d23]' key={index}>{desc}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StepCardMobile

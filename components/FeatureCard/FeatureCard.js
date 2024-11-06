import React from 'react'
import Image from 'next/image'
import styles from './featurecard.module.css'

function FeatureCard({id,featureTxt,featureTxtWidth,featureImg,featureAlt,featureDirection}) {
  return (
    <div key={id} className={`w-[424px] h-[480px] bg-[#ffffff] rounded-[20px] flex ${featureDirection? 'flex-col-reverse':'flex-col'} p-[20px] justify-between content-between`}>
        <div className={styles[featureTxtWidth]}>
            <Image src={featureTxt} alt={featureAlt}/>
        </div>
        <div className='w-[380px]'>
            <Image src={featureImg} alt={featureAlt}/>
        </div>
    </div>
  )
}

export default FeatureCard

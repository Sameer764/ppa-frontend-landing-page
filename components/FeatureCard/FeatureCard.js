import React from 'react'
import Image from 'next/image'
import styles from './featurecard.module.css'

function FeatureCard({id,featureTxt,featureTxtWidth,featureImg,featureAlt,featureDirection}) {
  return (
    <div className={`${styles[featureAlt]}div lg:w-[424px] lg:h-[480px] w-[335px] h-[388px] bg-[#ffffff] rounded-[20px] flex ${featureDirection? 'flex-col-reverse':'flex-col'} p-[20px] justify-between content-between`}>
        <div className={`w-[214px] ${styles[featureTxtWidth]} ${styles.featureTxt}`}>
            <Image src={featureTxt} alt={featureAlt}/>
        </div>
        <div className={`lg:w-[380px] w-[303px]' ${styles[featureAlt]}`}>
            <Image src={featureImg} alt={featureAlt}/>
        </div>
    </div>
  )
}

export default FeatureCard

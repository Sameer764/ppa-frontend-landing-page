import React from 'react'
import Image from 'next/image'
import AdobeIcon from '../../public/resources/images/adobe-icon.png'
import GoogleIcon from '../../public/resources/images/google-icon.png'
import FlipkartIcon from '../../public/resources/images/flipkart-icon.png'
import MicrosoftIcon from '../../public/resources/images/microsoft-icon.png'
import AmazonIcon from '../../public/resources/images/amazon-icon.png'
import WalmartIcon from '../../public/resources/images/walmart-icon.png'
import PaytmIcon from '../../public/resources/images/paytm-icon.png'
import OracleIcon from '../../public/resources/images/oracle-icon.png'
import styles from './CompanyBanner.module.css'


function CompanyBanner() {
  return (
    <div className='py-[20px]'>
      <h2 className='text-center text-xl text-[#000000]'>Our Students are placed at:</h2>
      <div className={styles.logos}>
        <div className={`${styles.logoSlide} flex justify-center items-center lg:gap-[80px] gap-[40px] mt-[20px]`}>
          <div className='w-[100px]'>
              <Image src={GoogleIcon} alt="google-icon"/>
          </div>
          <div className='w-[100px]'>
              <Image src={FlipkartIcon} alt="flipkart-icon"/>
          </div>
          <div className='w-[100px]'>
              <Image src={AdobeIcon} alt="adobe-icon"/>
          </div>
          <div className='w-[100px]'> 
              <Image src={MicrosoftIcon} alt="microsoft-icon"/>
          </div>
          <div className='w-[100px]'>
              <Image src={AmazonIcon} alt="amazon-icon"/>
          </div>
          <div className='w-[100px]'>
              <Image src={WalmartIcon} alt="walmart-icon"/>
          </div>
          <div className='w-[100px]'>
              <Image src={PaytmIcon} alt="paytm-icon"/>
          </div>
          <div className='w-[100px]'>
              <Image src={OracleIcon} alt="oracle-icon"/>
          </div>
        </div>
        <div className={`${styles.logoSlide} ml-[80px] flex justify-center items-center lg:gap-[80px] gap-[40px] mt-[20px]`}>
          <div className='w-[100px]'>
              <Image src={GoogleIcon} alt="google-icon"/>
          </div>
          <div className='w-[100px]'>
              <Image src={FlipkartIcon} alt="flipkart-icon"/>
          </div>
          <div className='w-[100px]'>
              <Image src={AdobeIcon} alt="adobe-icon"/>
          </div>
          <div className='w-[100px]'> 
              <Image src={MicrosoftIcon} alt="microsoft-icon"/>
          </div>
          <div className='w-[100px]'>
              <Image src={AmazonIcon} alt="amazon-icon"/>
          </div>
          <div className='w-[100px]'>
              <Image src={WalmartIcon} alt="walmart-icon"/>
          </div>
          <div className='w-[100px]'>
              <Image src={PaytmIcon} alt="paytm-icon"/>
          </div>
          <div className='w-[100px]'>
              <Image src={OracleIcon} alt="oracle-icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyBanner

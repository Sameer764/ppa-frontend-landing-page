'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BlogsData} from '../../Constants/MainPageConstants/BlogsSectionConstants'
import BlogsCard from '../BlogsCard/BlogsCard'
import Slider from "react-slick";

function BlogsSection() {
  let settings2 = {
    dots: false,
    infinite: true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 9000,
    cssEase: "linear",
  };
  return (
    <div className='py-[60px]'>
      <div className='flex justify-between max-w-[1312px] mx-auto'>
        <h1 className='max-w-[711px] text-[48px] leading-[64px] tracking-wide'>Your Go-To Blog for Tech, Career Growth, and Learning</h1>
        <button className='w-[193px] h-[48px] bg-[#020617] py-[12px] text-[#ffffff] text-[16px] leading-[24px] tracking-wide rounded-[12px]'>Read More Blogs</button>
      </div>
      <div className='mt-[40px] md:flex flex-wrap justify-center gap-[24px] hidden'>
        {
            BlogsData.map((blogdata)=>(
                <BlogsCard key={blogdata.id} {...blogdata}/>
            ))
        }
      </div>
      <div className='max-w-[500px] mx-auto md:hidden block'>
        <Slider {...settings2}>
            {
                BlogsData.map((blogdata)=>(
                    <BlogsCard key={blogdata.id} {...blogdata}/>
                ))
            }
        </Slider>
      </div>
    </div>
  )
}

export default BlogsSection

'use client'
import React from 'react'
import { FaChevronLeft} from 'react-icons/fa'

function PrevArrow(props) {
    const { onClick, top, right } = props;
    return (
      <div 
      style={{ top: `${top}%`, right: `${right}%` }}
      className={`cursor-pointer absolute w-[32px] h-[32px] bg-[#292c33] flex justify-center items-center rounded-[50%] transform -translate-y-1/2 cursor-pointer text-[#f8fafc]`} 
        onClick={onClick}
      >
        <FaChevronLeft className="w-[10px] h-[16px]" /> {/* Using react-icon */}
      </div>
    );
}

export default PrevArrow

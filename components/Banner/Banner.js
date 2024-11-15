"use client"
import {useRef} from 'react'
import Image from 'next/image'
import StudentRating from '../../public/resources/images/student-rating-img.png'
import IndianFlag from '../../public/resources/images/indian-flag.png'
import RocketIcon from '../../public/resources/images/banner-rocket.svg'
import ViewIcon from '../../public/resources/images/view-down-arrow-icon.png'
import ModalIcon from '../../public/resources/images/form-modal-img.png'
import { MdKeyboardArrowDown } from 'react-icons/md';
import ApplicationModal from './ApplicationModal'
import useSubmitStudentDetails from '@/hooks/useSubmitStudentDetails'

function Banner({isFormHighlighted}) {
    const { submitStudentDetails, loading, error, isSubmitted, setIsSubmitted } = useSubmitStudentDetails();
    const mobileNumberRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [name, email, _, mobile, graduationYear] = e.target;
        const data = {
            userName: name.value,
            email: email.value,
            mobile: mobile.value,
            graduationYear: graduationYear.value,
        };
        const res = await submitStudentDetails(data);
        if (res) {
            e.target.reset();
            document.body.classList.add("disable-scroll");
        }
    };

    const closeModal = () => {
        setIsSubmitted(false);
        document.body.classList.remove("disable-scroll");
    };
  return (
    <div className='bg-[#181B43] lg:py-[60px] lg:p-[0px] p-[20px] flex lg:flex-row flex-col items-center flex-wrap justify-center lg:gap-[80px] gap-[20px]'>
        <div className='max-w-[734px]'>
            <h1 className='font-gilroybold text-[#F8FAFC] font-normal lg:text-[56px] lg:leading-[60px] text-[32px] leading-[40px]'>Become a Tech Pro!</h1>
            <h2 className='lg:font-gilroybold font-gilroyregular mt-3 text-[#F8FAFC] font-normal lg:text-[24px] lg:leading-[32px] text-[16px] leading-[24px]'>Transform Your Skills with Our Expert-Led Courses!</h2>
            <p className='font-gilroyregular mt-10 text-[#F8FAFC] font-normal text-[20px] leading-[28px] lg:block hidden'>Gain hands-on experience, improve your coding skills, and accelerate your tech career with expert guidance and support.</p>
            <div className='lg:mt-10 mt-[12px] bg-[#E1E7F81A] lg:w-[417px] w-full px-[24px] py-[12px] rounded-xl'>
             <Image src={StudentRating} alt='student-rating'/>
            </div>
            <div className='mt-[40px] flex gap-[20px] lg:flex hidden'>
                <button className='flex gap-[4px] w-[268px] bg-[#3940A0] py-[12px] px-[36px] rounded-[49px] border-none'>
                    <p className='text-[#FFFFFF] font-normal text-[16px] leading-[24px]'>Start 7-Days Free Trial</p>
                    <div>
                        <Image src={RocketIcon} alt='rocket-icon'/>
                    </div>
                </button>
                <button className='flex justify-center gap-[4px] w-[268px] bg-[#E1E7F81A] py-[12px] px-[46.5px] rounded-[49px] border-[1px] border-[#64748B]'>
                    <p className='font-gilroysemibold text-[#FFFFFF] font-normal text-[16px] leading-[24px]'>View Courses</p>
                    <div className='w-[20px]'>
                        <Image src={ViewIcon} alt='view-icon'/>
                    </div>
                </button>
            </div>
        </div>
        <div className={`${isFormHighlighted ? "border-[1px] border-[#F59E0B] shadow-[0px_0px_20px_0px_#FBBF24]" : ""
                    } transistion-all ease-in-out duration-[2000ms] lg:max-w-[498px] w-full bg-[#F8FAFC] rounded-[20px] px-6 py-5`}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='font-gilroysemibold font-normal text-[16px] leading-[24px] text-[#020617]'>Name</label>
                    <br />
                    <input
                        className="font-gilroyregular w-full mt-[4px] py-[10px] pl-5 rounded-[6px] bg-[#F1F5F9] placeholder:text-[#64748B] outline-1 outline-blue-400 border border-[#e2e8f0]"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                    />
                </div>
                <div className='mt-[20px]'>
                    <label className='font-gilroysemibold font-normal text-[16px] leading-[24px] text-[#020617]'>Email Address</label>
                    <br />
                    <input
                        className="font-gilroyregular w-full mt-[4px] py-[10px] pl-5 rounded-[6px] bg-[#F1F5F9] placeholder:text-[#64748B] outline-1 outline-blue-400"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                    />
                </div>
                <div className='mt-[20px] relative'>
                    <label className='font-gilroysemibold font-normal text-[16px] leading-[24px] text-[#020617]'>Phone number</label>
                    <br />
                    <div
                        className="flex items-center"
                        htmlFor="Student-form-mobile-number"
                        onClick={() => mobileNumberRef.current.focus()}
                    >
                        <div className="absolute w-[25px] top-[37px] left-[6px] z-10" role="presentation">
                            <Image src={IndianFlag} alt='indian-flag-icon' />
                        </div>
                        <select name="countryCode" className='appearance-none outline-none w-[65px] h-[45px] bg-[#F1F5F9] relative top-[2px] rounded-s-md border border-[#E2E8F0]'>
                            <option value="+91" className='bg-transparent'></option>
                        </select>
                        <MdKeyboardArrowDown className='absolute left-[32px] text-[#64748b] text-[24px]'/>
                        {/* <p>+91</p> */}
                        <input
                            className="font-gilroyregular w-full mt-[4px] py-[10px] pl-5 bg-[#F1F5F9] placeholder:text-[#64748B] rounded-e-md border border-[#E2E8F0] outline-1 outline-blue-400"
                            ref={mobileNumberRef}
                            type="tel"
                            name="phone"
                            placeholder="Enter your 10-digit number"
                            minLength={10}
                            maxLength={10}
                            required
                        />
                    </div>

                    <p className="font-gilroymedium mt-[4px] font-normal text-[14px] leading-[20px] text-[#020617] tracking-wide">
                        We have a strict no-spam policy and will only contact you regarding your
                        application.
                    </p>
                </div>
                <button disabled={loading} className="mt-[20px] w-full flex justify-center  bg-[#3940A0] py-[12px] rounded-[10px] border-none" type="submit">
                    <p className='text-[#FFFFFF] font-normal text-[16px] leading-[24px]'>Book A Free Consultation</p>
                </button>
                {error && <p className="studet-form-error">{error}</p>}
            </form>
        </div>
        {isSubmitted && (
            <ApplicationModal onClose={closeModal}>
                <div className="Student-modal-success-icon w-[227px] mx-auto">
                    <Image src={ModalIcon} alt='modal-icon'/>
                </div>
                <h3 className='mt-[32px] text-[24px] leading-[32px] tracking-wide text-center'>Thank you for your time and effort! 🎉</h3>
                <p className="mt-[4px] Student-no-spam-message font-gilroyregular text-[16px] leading-[24px] tracking-wide text-center">
                    Our team will reach out to you shortly. Stay tuned, exciting things are ahead!
                </p>
                <button onClick={closeModal} className="mt-[12px] Student-modal-go-to-btn border-none text-[#4659ca] underline">
                    Go Back
                </button>
            </ApplicationModal>
        )}
        <div className='lg:mt-[40px] mt-[20px] flex flex-col lg:gap-[20px] gap-[8px] lg:hidden w-full'>
                <button className='flex justify-center gap-[4px] lg:w-[268px] w-full bg-[#3940A0] py-[12px] px-[36px] rounded-[49px] border-none'>
                    <p className='text-[#FFFFFF] font-normal text-[16px] leading-[24px]'>Start 7-Days Free Trial</p>
                    <div>
                        <Image src={RocketIcon} alt='rocket-icon'/>
                    </div>
                </button>
                <button className='flex justify-center gap-[4px] lg:w-[268px] w-full bg-[#E1E7F81A] py-[12px] px-[46.5px] rounded-[49px] border-[1px] border-[#64748B]'>
                    <p className='font-gilroysemibold text-[#FFFFFF] font-normal text-[16px] leading-[24px]'>View Courses</p>
                    <div className='w-[20px]'>
                        <Image src={ViewIcon} alt='view-icon'/>
                    </div>
                </button>
        </div>
    </div>
  )
}

export default Banner

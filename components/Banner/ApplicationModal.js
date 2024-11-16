'use client'
import React from "react";

const ApplicationModal = ({ onClose, children }) => {
    // Function to close the modal when clicking outside of the modal content
    const handleBackgroundClick = (e) => {
        if (e.target.id === "student-modal") {
            console.log('clicked')
            document.body.classList.remove("disable-scroll");
            onClose();
        }
    };

    return (
        <div id="student-modal" className="student-modal z-50 w-[100%] h-[100%] fixed left-0 top-0 bg-[#00000080] flex items-center justify-center" onClick={handleBackgroundClick}>
            <div className="w-[335px] lg:w-[549px] student-modal-content text-center bg-[#ffffff] rounded-[20px] lg:p-[20px] p-[12px] relative">
                <span className="cursor-pointer student-modal-close-btn absolute right-[20px] text-[32px] leading-[32px]" onClick={onClose}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
};

export default ApplicationModal;

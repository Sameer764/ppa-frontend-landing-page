import axios from "axios";
import { useState } from "react";

const useSubmitStudentDetails = (resetForm) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitStudentDetails = async (data) => {
        setError(false);
        let success = false;
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_MISC_URL}/addTfpStudentDetails`, data);
            success = true;
        } catch (err) {
            setError(err?.response?.data?.message || err.message || "Something went wrong...");
        } finally {
            setLoading(false);
            setIsSubmitted(true);
            return success;
        }
    };
    const resetSubmitStatus =()=> {
        setIsSubmitted(false);
    }

    return { loading, error, isSubmitted, resetSubmitStatus, submitStudentDetails };
};

export default useSubmitStudentDetails;

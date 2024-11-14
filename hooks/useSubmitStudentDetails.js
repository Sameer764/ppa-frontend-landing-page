import axios from "axios";
import { useState } from "react";

const useSubmitStudentDetails = (resetForm) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitStudentDetails = async (data) => {
        let success = true;
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_MISC_URL}/addTfpStudentDetails`, data);
            setIsSubmitted(true);
            setError(false);
            success = true;
        } catch (err) {
            setError(err?.response?.data?.message || err.message || "Something went wrong...");
        } finally {
            setLoading(false);
            setIsSubmitted(true);
            return success;
        }
    };

    return { loading, error, isSubmitted, setIsSubmitted, submitStudentDetails };
};

export default useSubmitStudentDetails;

import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
import formSuccess from './FormSuccess'
import './Form.css'

function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    function submitForm() {
        setIsSubmitting(true);
    }

    return (
        <>
            <div className="form-container">
                <span className="close-btn">X</span>
                <div className="form-content-left">
                    <img src='img/img-2.svg' alt="BBB" className="form-image" />
                </div>
                {!isSubmitting ? <FormSignUp submitForm={submitForm} /> : <formSuccess />}
            </div>
        </>
    );
}

export default Form

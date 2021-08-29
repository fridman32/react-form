import React, { useState, useCallback } from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'
import './Form.css'

function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    function submitForm() {
        setIsSubmitting(true);
    }

    return (
        <div className="form-container">
            {!isSubmitting ? (<FormSignUp submitForm={submitForm} />) : (<FormSuccess />)}
        </div>
    );
}

export default Form

import { useState, useEffect } from "react";
import validateInfo from "./validateInfo";
import axios from "axios"
import './Form.css'

const useForm = (callback, validateInfo) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateInfo(values));
        setIsSubmitting(true);

        //sending the user data to a json file to simulate call to a server
        const url = "https://jsonplaceholder.typicode.com/posts"
        axios.post(url, values).then(response => {
            console.log(response);
        })
            .catch(err => {
                console.log(err);
            })
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    },
        [errors]
    );

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;
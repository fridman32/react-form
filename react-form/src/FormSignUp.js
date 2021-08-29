import React from 'react'
import useForm from './useForm'
import validateInfo from './validateInfo';
import './Form.css'

const FormSignUp = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(validateInfo, submitForm);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today ! create your account by filling out this form</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-lable">Username</label>
                    <input id="username" type="text" className="form-input" name="username"
                        placeholder="enter your username" value={values.username} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-lable">Email</label>
                    <input id="email" type="email" className="form-input" name="email"
                        placeholder="enter your email" value={values.email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-lable">Password</label>
                    <input id="password" type="password" className="form-input" name="password"
                        placeholder="enter your password" value={values.password} onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-lable">Confirm Password</label>
                    <input id="password2" type="password" className="form-input" name="password2"
                        placeholder="confirm your password" value={values.password2} onChange={handleChange} />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">Sign Up</button>
                <span className="form-input-login">Already have an account? Login <a href="#">here</a></span>
            </form>
        </div>
    )
}

export default FormSignUp

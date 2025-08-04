import React from 'react'
import { useFormik } from 'formik';
import { registerFormSchemas } from '../schemas/RegisterFormSchemas';

function RegisterForm() {
    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm();
        }, 1000)
    }
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: ''
        },
        validationSchema: registerFormSchemas,
        onSubmit: submit
    });

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='inputDiv'>
                    <label>Email</label>
                    <input className='input' type='text' id="email" placeholder='example@1234.com' value={values.email} onChange={handleChange} />
                    {errors.email && <p className='input-error'>{errors.email}</p>}
                </div>
                <div className='inputDiv'>
                    <label>Age</label>
                    <input className='input' type='number' id="age" placeholder='Enter your age' value={values.age} onChange={handleChange} />
                    {errors.age && <p className='input-error'>{errors.age}</p>}
                </div>
                <div className='inputDiv'>
                    <label>Password</label>
                    <input className='input' type='password' id="password" placeholder='Enter your password' value={values.password} onChange={handleChange} />
                    {errors.password && <p className='input-error'>{errors.password}</p>}
                </div>
                <div className='inputDiv'>
                    <label>Confirm Password</label>
                    <input className='input' type='password' id="confirmPassword" placeholder='Enter your password again' value={values.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}
                </div>
                <div className='inputDiv'>
                    <div className='term'>
                        <input className='checkbox' type='checkbox' id="term"
                            value={values.term} onChange={handleChange} />
                        <label>I accept the user agreement</label>
                    </div>
                    {errors.term && <p className='input-error'>{errors.term}</p>}

                </div>

                <button type='submit' className='button'>Save</button>

            </form>
        </div>
    )
}

export default RegisterForm
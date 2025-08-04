import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup.string().email("Please enter a valid email address").required("Email address is required"),
    age: yup.number().positive("Enter a positive value").integer("Enter an intager").required("Age is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref('password', yup.password)], ("Password do not match")),
    term: yup.boolean().required("Please check the box")
})
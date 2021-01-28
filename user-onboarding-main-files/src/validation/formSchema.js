import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required'),
    terms: yup
        .boolean()
        .required('Agree to terms of service')
});
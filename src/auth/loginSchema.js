import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().email().required('Emailingizni kiriting!'),
    password: Yup.string().matches(/[0-9a-zA-Z]/).min(6).required('Passwordni kiriting'),
})
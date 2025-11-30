import * as Yup from 'yup';

export const validation = Yup.object({
    username: Yup.string().min(4).matches(/[a-zA-Z]/).required('Username kiriting'),
    email: Yup.string().email().required('Emailingizni kiriting!'),
    phone: Yup.string().matches(/[0-9]/).min(9).max(9).required('Telefon raqamingizni kiriting!'),
    password: Yup.string().matches(/[0-9a-zA-Z]/).min(6).required('Passwordni kiriting'),
    confirm_password: Yup.string().oneOf([Yup.ref('password')], 'Password bir xil emas!').required('Passwordni tasdiqlang'),
})
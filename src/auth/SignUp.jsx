import { useFormik } from "formik";
import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom";
import { signupSchema } from "./SignupSchema";

const initialValues = {
    username: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
}

export default function SignUp(){
    const navigate = useNavigate()
    const {mode} = useSelector(state => state.backend);
    const {values, handleSubmit, handleBlur, handleChange, errors, touched} = useFormik({
        initialValues,
        validationSchema: signupSchema,
        onSubmit: (value) => {
            console.log(value);
            localStorage.setItem('isAuth', true);
            localStorage.setItem('isAdmin', false)
            localStorage.setItem('user', JSON.stringify(value));
            navigate('/')
        }
    })

    return <div className={`${mode ? `dark` : `light`} w-full h-[calc(100vh-70px)] flex items-center justify-center`}>
        <form onSubmit={handleSubmit} action="" className={`${mode ? `bg-[#0E1216]` : `bg-[#FFFFFF]`} w-[420px] flex flex-col gap-2 p-8 rounded-lg border-1 border-zinc-800/70`} >
            <h1 className="text-3xl font-semibold mb-3">Create Account</h1>
            <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="username" 
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-zinc-800 py-2 px-4 rounded-lg mt-1 outline-none"
                />
                <p className="text-[13px] text-red-500">{touched.username && errors.username}</p>
            </div>
            <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-zinc-800 py-2 px-4 rounded-lg mt-1 outline-none"
                />
                <p className="text-[13px] text-red-500">{touched.email && errors.email}</p>
            </div>
            <div className="flex flex-col">
                <label htmlFor="phone">Phone</label>
                <input 
                    type="number" 
                    name="phone" 
                    id="phone" 
                    placeholder="90-123-45-67" 
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-zinc-800 py-2 px-4 rounded-lg mt-1 outline-none"
                />
                <p className="text-[13px] text-red-500">{touched.phone && errors.phone}</p>
            </div>
            <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="******" 
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-zinc-800 py-2 px-4 rounded-lg mt-1 outline-none"
                />
                <p className="text-[13px] text-red-500">{touched.password && errors.password}</p>
            </div>
            <div className="flex flex-col">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input 
                    type="password" 
                    name="confirm_password" 
                    id="confirm_password" 
                    placeholder="******" 
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-zinc-800 py-2 px-4 rounded-lg mt-1 outline-none"
                />
                <p className="text-[13px] text-red-500">{touched.confirm_password && errors.confirm_password}</p>
            </div>

            <button type="submit" className="bg-[#5537EB] text-white py-2 rounded-lg outline-none mt-5 transition-all duration-200 active:duration-75 active:scale-95 font-semibold cursor-pointer">Sign Up</button>

            <div className="text-center text-zinc-500 mt-3 font-semibold">Already have an account? <NavLink to={'/login'} className={`font-bold text-[#5537EB]`}>Login</NavLink></div>
        </form>
    </div>
}
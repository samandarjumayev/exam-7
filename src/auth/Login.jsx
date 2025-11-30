import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom";
import { validation } from "./validation";
import { login } from "../redux/backendSlice";
import { validationLogin } from "./validationLogin";

const initialValues = {
    email: '',
    password: ''
}

export default function Login(){
    const navigate = useNavigate()
    const {mode} = useSelector(state => state.backend);
    const dispatch = useDispatch()
    const {values, handleSubmit, handleChange, handleBlur, errors, touched} = useFormik({
        initialValues, 
        validationSchema: validationLogin,
        onSubmit: (value) => {
            console.log(value);
        }
    })

    return <div className={`${mode ? `dark` : `light`} w-full h-[calc(100vh-70px)] flex items-center justify-center`}>
        <form onSubmit={handleSubmit} action="" className={`${mode ? `bg-[#0E1216]` : `bg-[#FFFFFF]`} w-[420px] flex flex-col gap-2 p-8 rounded-lg border border-zinc-800/70`} >
            <h1 className="text-3xl font-semibold mb-3">Login</h1>
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

            <button type="submit" className="bg-[#5537EB] text-white py-2 rounded-lg outline-none mt-5 transition-all duration-200 active:duration-75 active:scale-95 font-semibold cursor-pointer">Login</button>

            <div className="text-center text-zinc-500 mt-3 font-semibold">Don't have an account? <NavLink to={'/signup'} className={`font-bold text-[#5537EB]`}>Sign Up</NavLink></div>
        </form>
    </div>
}
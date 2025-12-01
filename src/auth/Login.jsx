import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom";
import { validation } from "./validation";
import { admin, login } from "../redux/backendSlice";
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
            if(value.email == 'samandar@gmail.com' && value.password == 72626327){
                dispatch(admin(value));
                navigate('/dashboard')
            }else {
                let user = JSON.parse(localStorage.getItem('user'));
                if(!!user && value.email == user.email && value.password == user.password ){
                    dispatch(login());
                    navigate('/')
                } else {
                    navigate('/signup')
                }
            }
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

            <div className="bg-[#2A2E33] rounded-lg py-3 px-4 mt-3">
                <p>Email: samandar@gmail.com</p>
                <p>Password: 72626327</p>
            </div>
        </form>
    </div>
}
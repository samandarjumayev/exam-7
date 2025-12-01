import { useDispatch, useSelector } from "react-redux"
import { logout, setMode } from "../redux/backendSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { AtSign, ChartBarStacked, ChartNoAxesCombined, FolderKanban, Home, LibraryBig, LogIn, LogOut, Menu, Moon, ScanEye, ShoppingCart, Sun, User, Users } from "lucide-react";
import { useState } from "react";

export default function Header(){
    const navigate = useNavigate()
    const [hide, setHide] = useState(true);
    const [profileHide, setProfileHide] = useState(true);

    const {mode, isAuth, isAdmin} = useSelector(state => state.backend);
    const dispatch = useDispatch()

    return <div className={`${mode ? `bg-[#151525] text-white` : `bg-[linear-gradient(to_right,#2553FF,#5A7BFF)] text-white`} sticky top-0 h-[70px] z-10 transition-all duration-200`}>
        <div className={`container flex items-center h-full justify-between`}>
            <NavLink to={'/'} className="h-full flex items-center gap-3 py-3 outline-none">
                <img src="https://cdn-icons-png.flaticon.com/128/1055/1055666.png" alt="Nova Store" className="h-[80%] sm:h-full"  />
                <h1 className={`text-xl sm:text-3xl font-semibold`}><span className={`${mode ? `text-[#5537EB]` : `text-orange-500`}`}>Nova</span>Store</h1>
            </NavLink>

            <div className={`lg:flex hidden h-full items-center gap-1 font-semibold text-[14px]`}>
                <NavLink to={'/'} className={({isActive}) => isActive ? `${mode ? `bg-[#5537EB]` : `bg-orange-500`} text-white px-3 py-[7px] rounded-lg` : `hover:bg-white/15 rounded-lg px-3 py-[7px]`}>Home</NavLink>
                {isAdmin ? (
                    <NavLink to={'/dashboard'}  className={({isActive}) => isActive ? `${mode ? `bg-[#5537EB]` : `bg-orange-500`} text-white px-3 py-[7px] rounded-lg` : `hover:bg-white/15 rounded-lg px-3 py-[7px]`}>Dashboard</NavLink>
                ) : ``}
                <NavLink to={'/all_products'} className={({isActive}) => isActive ? `${mode ? `bg-[#5537EB]` : `bg-orange-500`} text-white px-3 py-[7px] rounded-lg` : `hover:bg-white/15 rounded-lg px-3 py-[7px]`}>All Products</NavLink>
                <NavLink to={'/categories'} className={({isActive}) => isActive ? `${mode ? `bg-[#5537EB]` : `bg-orange-500`} text-white px-3 py-[7px] rounded-lg` : `hover:bg-white/15 rounded-lg px-3 py-[7px]`}>Categories</NavLink>
                <NavLink to={'/users'} className={({isActive}) => isActive ? `${mode ? `bg-[#5537EB]` : `bg-orange-500`} text-white px-3 py-[7px] rounded-lg` : `hover:bg-white/15 rounded-lg px-3 py-[7px]`}>Users</NavLink>
                <NavLink to={'/about'} className={({isActive}) => isActive ? `${mode ? `bg-[#5537EB]` : `bg-orange-500`} text-white px-3 py-[7px] rounded-lg` : `hover:bg-white/15 rounded-lg px-3 py-[7px]`}>About</NavLink>
                <NavLink to={'/cart'} className={({isActive}) => isActive ? `${mode ? `bg-[#5537EB]` : `bg-orange-500`} text-white px-3 py-[7px] rounded-lg` : `hover:bg-white/15 rounded-lg px-3 py-[7px]`}>Cart</NavLink>
            </div>

            {/* Hide Menu */}
            <div className={`${hide ? `translate-x-[100%] duration-500` : `translate-x-0 duration-300`} ${mode ? `bg-[#191929]` : `bg-[linear-gradient(to_right,#2553FF,#5A7BFF)]`} lg:hidden fixed flex gap-2 flex-col py-3 px-7 top-[70px] right-0 rounded-tl rounded-bl h-[calc(100vh-70px)] transition-all`}>
                <NavLink 
                    onClick={() => setHide(true)} 
                    to={'/'} 
                    className={`${mode ? `hover:bg-[#5537EB]/10` : `hover:bg-white/20`} flex gap-2 items-center font-semibold py-2 px-10 rounded cursor-pointer transition-all duration-150 active:duration-75 active:scale-95 hover:scale-103`}>
                        <Home />
                        <p>Home</p>
                </NavLink>
                <NavLink 
                    onClick={() => setHide(true)} 
                    to={'/about'} 
                    className={`${mode ? `hover:bg-[#5537EB]/10` : `hover:bg-white/20`} flex gap-2 items-center font-semibold py-2 px-10 rounded cursor-pointer transition-all duration-150 active:duration-75 active:scale-95 hover:scale-103`}>
                        <LibraryBig />
                        <p>About</p>
                </NavLink>
                {isAdmin ? (
                    <NavLink 
                        onClick={() => setHide(true)} 
                        to={'/dashboard'} 
                        className={`${mode ? `hover:bg-[#5537EB]/10` : `hover:bg-white/20`} flex gap-2 items-center font-semibold py-2 px-10 rounded cursor-pointer transition-all duration-150 active:duration-75 active:scale-95 hover:scale-103`}>
                            <ChartNoAxesCombined />
                            <p>Dashboard</p>
                    </NavLink>
                ) : ``}
                <NavLink 
                    onClick={() => setHide(true)} 
                    to={'/categories'} 
                    className={`${mode ? `hover:bg-[#5537EB]/10` : `hover:bg-white/20`} flex gap-2 items-center font-semibold py-2 px-10 rounded cursor-pointer transition-all duration-150 active:duration-75 active:scale-95 hover:scale-103`}>
                        <ChartBarStacked />
                        <p>Categories</p>
                </NavLink>
                <NavLink 
                    onClick={() => setHide(true)} 
                    to={'/all_products'} 
                    className={`${mode ? `hover:bg-[#5537EB]/10` : `hover:bg-white/20`} flex gap-2 items-center font-semibold py-2 px-10 rounded cursor-pointer transition-all duration-150 active:duration-75 active:scale-95 hover:scale-103`}>
                        <FolderKanban />
                        <p>All Products</p>
                </NavLink>
                <NavLink 
                    onClick={() => setHide(true)} 
                    to={'/cart'} 
                    className={`${mode ? `hover:bg-[#5537EB]/10` : `hover:bg-white/20`} flex gap-2 items-center font-semibold py-2 px-10 rounded cursor-pointer transition-all duration-150 active:duration-75 active:scale-95 hover:scale-103`}>
                        <ShoppingCart />
                        <p>Cart</p>
                </NavLink>
                <NavLink 
                    onClick={() => setHide(true)} 
                    to={'/users'} 
                    className={`${mode ? `hover:bg-[#5537EB]/10` : `hover:bg-white/20`} flex gap-2 items-center font-semibold py-2 px-10 rounded cursor-pointer transition-all duration-150 active:duration-75 active:scale-95 hover:scale-103`}>
                        <Users />
                        <p>Users</p>
                </NavLink>
                <NavLink 
                    onClick={() => setHide(true)} 
                    to={'/signup'} 
                    className={`bg-orange-600 sm:hidden flex gap-2 items-center font-semibold py-2 px-10 rounded cursor-pointer transition-all duration-150 active:duration-75 active:scale-95 hover:scale-103`}>
                        <ScanEye />
                        <p>Sign Up</p>
                </NavLink>
            </div>

            <div className={`h-full flex items-center gap-1 sm:gap-2`}>
                {isAuth || isAdmin ? (``) : (
                    <>
                        <NavLink to={'/login'} className={`sm:border border-white/50 py-2 sm:px-5 px-2 rounded hover:bg-white/10 transition-all duration-75 active:scale-95`}>
                            <span className="flex sm:hidden"><LogIn /></span>
                            <p className="hidden sm:flex">Login</p>
                        </NavLink>
                        <NavLink to={'/signup'} className={`bg-orange-600 sm:flex hidden py-2 px-5 rounded transition-all duration-75 active:scale-95`}>Sign Up</NavLink>
                    </>
                )}
                <button onClick={() => dispatch(setMode())} className={`text-white cursor-pointer hover:bg-white/10 py-2 px-2 rounded`}>
                    {mode ? (<Sun />) : (<Moon />)}
                </button>
                <NavLink to={'/cart'} className="cursor-pointer hover:bg-white/10 py-2 px-2 rounded">
                    <ShoppingCart />
                </NavLink>
                <button onClick={() => setHide(!hide)} className={`flex lg:hidden cursor-pointer hover:bg-white/10 py-2 px-2 rounded`}>
                    <Menu />
                </button>
                {isAdmin ? (
                    <div className="relative">
                        <button onClick={() => setProfileHide(!profileHide)} className="bg-orange-500 text-black rounded-full w-[33px] h-[33px] cursor-pointer font-semibold">A</button>

                        <div className={`${mode ? `bg-[#0E1216]` : `bg-white shadow-lg`} ${profileHide ? `hidden` : `flex`} flex-col w-[250px] py-2 px-4 absolute right-0 top-[55px] border border-zinc-600 rounded-lg`}>
                            <p className={`${mode ? `text-white` : `text-black`} text-xl font-semibold font-[monospace]`}>Admin</p>
                            <p className="text-[14px] text-zinc-500 mb-5">Email: samandar@gmail.com</p>
                            <button onClick={() => {
                                setProfileHide(true);
                                dispatch(logout());
                                navigate('/')
                            }} className="px-4 py-2 w-full bg-red-500 rounded cursor-pointer flex items-center gap-2 justify-center font-semibold">Logout <LogOut /></button>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
                {isAuth ? (
                    <div className="relative">
                        <button onClick={() => setProfileHide(!profileHide)} className="bg-orange-600 w-[35px] h-[35px] rounded-full text-xl font-semibold flex items-center justify-center cursor-pointer transition-all duration-150 active:duration-75 active:scale-95">{JSON.parse(localStorage.getItem('user')).username.slice(0, 1)}</button>

                        <div className={`${mode ? `bg-[#0E1216]` : `bg-white`} ${profileHide ? `hidden` : `flex`} absolute right-0 top-[55px] flex-col gap border p-4 border-zinc-700 rounded-lg`}>
                            <p className={`${mode ? `text-white` : `text-black`} text-xl font-semibold mb-1`}>User</p>
                            <p className={`${mode ? `text-zinc-500` : `text-black`} flex gap-1 items-center text-[14px]`}><User size={17} /> {JSON.parse(localStorage.getItem('user')).username}</p>
                            <p className={`${mode ? `text-zinc-500` : `text-black`} flex gap-1 items-center text-[14px]`}><AtSign size={17} /> {JSON.parse(localStorage.getItem('user')).email}</p>
                            <button onClick={() => {
                                setProfileHide(true);
                                dispatch(logout());
                                navigate('/')
                            }} className="px-4 py-1 w-full bg-red-500 mt-4 rounded cursor-pointer flex items-center gap-2 justify-center font-semibold">Logout <LogOut /></button>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    </div>
}
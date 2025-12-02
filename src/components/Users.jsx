import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchAllUsers } from "../redux/usersSlice";
import Loader2 from "../ui/Loader2";
import { NavLink } from "react-router-dom";
import { ArrowLeft, Edit, Mail, MapPin, Phone, Trash, University } from "lucide-react";
import Error from "../ui/Error";

export default function Users(){
    const dispatch = useDispatch();
    const {error, isLoading, users} = useSelector(state => state.usersBackend);
    const {mode, isAdmin} = useSelector(state => state.backend);
    
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);
    
    if(isLoading) {
        return <div className={`${mode ? `dark` : `light`} flex items-center justify-center h-[calc(100vh-70px)]`}>
            <Loader2 />
        </div>
    }
    if(error) {
        return <div className={`${mode ? `dark` : `light`} flex items-center justify-center h-[calc(100vh-70px)]`}>
            <Error />
        </div>
    }

    return <div className={`${mode ? `dark` : `light`} min-h-[calc(100vh-70px)]`}>
        <div className={`container flex flex-col gap-1 py-5`}>
            <NavLink to={'/'} className={`flex gap-1 items-center w-[200px] text-[#5537EB] my-3 font-medium`}> <ArrowLeft /> Back to Home </NavLink>
            <h1 className="text-4xl font-bold">Users</h1>
            <p className="text-zinc-500">Browse all registered users in the system</p>

            <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 flex-1 mt-5 mb-15`}>
                {users.map(item => {
                    return <div key={item.id} className={`${mode ? `bg-[#0E1216]` : `bg-white`} relative border border-zinc-700 rounded-lg py-[21px] px-[27px] flex flex-col gap-1 cursor-pointer transition-all duration-300 hover:duration-100 hover:scale-101`}>
                        <img src={item.image} alt="" className={`absolute top-[15px] right-[15px] w-[55px] h-[55px] rounded-2xl p-2`} />
                        <div>
                            <p className="text-xl font-semibold">{item.firstName} {item.lastName}</p>
                            <p className="text-zinc-500">@{item.username}</p>
                        </div>
                        
                        <p className="text-zinc-400 flex items-center gap-2 mt-3"><Mail size={16} /> {item.email}</p>
                        <p className="text-zinc-400 flex items-center gap-2"><Phone size={16} /> {item.phone}</p>
                        <p className="text-zinc-400 flex items-center gap-2"><MapPin size={16} /> {item.address.state} - {item.address.country}</p>
                        <p className="text-zinc-400 flex items-center gap-2"><University size={16} /> {item.university}</p>

                        <NavLink to={`/users/${item.id}`} className="mt-4 bg-[#5537EB] text-white flex items-center justify-center py-2 rounded-lg cursor-pointer transition-all duration-200 active:duration-75 active:scale-95">View</NavLink>

                        {isAdmin ? (
                            <div className="flex items-center mt-1 justify-between gap-2">
                                <button className={`flex items-center justify-center gap-2 border border-green-600/40 text-green-600 flex-1 py-2 rounded-lg text-[14px] cursor-pointer transition-all duration-200 active:duration-75 active:scale-95`}><Edit  size={17}/> Edit</button>
                                <button onClick={() => dispatch(deleteUser(item.id))} className={`flex items-center justify-center gap-2 border border-red-600/40 text-red-600 flex-1 py-2 rounded-lg text-[14px] cursor-pointer transition-all duration-200 active:duration-75 active:scale-95`}><Trash size={17} /> Delete</button>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                })}
            </div>
        </div>
    </div>
}
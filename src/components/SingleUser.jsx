import { AtSign, Briefcase, Building2, CalendarFold, IdCard, Landmark, Loader2, LockKeyhole, Mail, MapPin, Phone, University, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux"
import Error from "../ui/Error";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchSingleUser } from "../redux/usersSlice";

export default function SingleUser(){
    const {mode} = useSelector(state => state.backend);
    const dispatch = useDispatch()
    const {singleUser, singleLoading, singleError} = useSelector(state => state.usersBackend);
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchSingleUser(id))
    }, [id])

    if(!singleUser){
        return <div className={`${mode ? `dark` : `light`} w-full h-[calc(100vh-70px)] flex items-center justify-center`}>
            <Loader2 />
        </div>
    }
    if(singleError){
        return <div className={`${mode ? `dark` : `light`} w-full h-[calc(100vh-70px)] flex items-center justify-center`}>
            <Error />
        </div>
    }

    return <div className={`${mode ? `dark` : `light`} w-full h-[calc(100vh-70px)] flex items-center justify-center`}>
        {console.log(singleUser)}
        <div className={`${mode ? `bg-[#0E1216]` : `bg-white`} border border-zinc-600 rounded-xl py-7 px-9 flex gap-10 items-center`}>
            <div className="flex items-center justify-center">
                <img src={singleUser.image} alt="" className="w-[240px]" />
            </div>

            <div className="mt-5">
                <p className="text-3xl text-center font-semibold flex items-center gap-2"><User color="#5537EB" size={30} /> {singleUser.firstName} {singleUser.lastName}</p>
                <p className="flex items-center gap-2 text-[14px] text-zinc-600"><Mail size={17} /> {singleUser.email}</p>
                <p className="flex items-center gap-2 text-[14px] text-zinc-600"><MapPin size={17} /> {singleUser.address.state} - {singleUser.address.country}</p>
                <p className="flex items-center gap-2 text-[14px] text-zinc-600"><IdCard size={17} />Card: {singleUser.bank.cardNumber} - {singleUser.bank.cardExpire}</p>
                <p className="flex items-center gap-2 text-[14px] text-zinc-600"><CalendarFold size={17} /> {singleUser.birthDate}</p>
                <p className="flex items-center gap-2 text-[14px] text-zinc-600"><Building2 size={17} />Company: {singleUser.company.department}</p>
                <p className="flex items-center gap-2 text-[14px] text-zinc-600"><Briefcase size={17} />Job: {singleUser.company.title}</p>
                <p className="flex items-center gap-2 text-[14px] text-zinc-600"><Phone size={17} />{singleUser.phone}</p>
                <p className="flex items-center gap-2 text-[14px] text-zinc-600"><University size={17} />{singleUser.university}</p>
                <p className="flex items-center gap-2 text-[14px] text-zinc-600"><AtSign size={17} />Username: {singleUser.username}</p>
                <p className="flex items-center gap-2 text-[14px] text-zinc-600"><LockKeyhole size={17} />Password: {singleUser.password}</p>
            </div>
        </div>
    </div>
}
import { useNavigate } from "react-router-dom";

export default function ProtectedRouter({children}){
    let isAuth = localStorage.getItem('isAuth');
    const navigate = useNavigate()

    if(!isAuth){
        return navigate('/login')
    }

    return children;
}
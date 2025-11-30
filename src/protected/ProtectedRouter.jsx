import { Navigate, useNavigate } from "react-router-dom";

export default function ProtectedRouter({children}){
    const isAdmin = localStorage.getItem('isAdmin')

    if(!isAdmin){
        return <Navigate to={'/login'} replace ></Navigate>
    }

    return children;
}
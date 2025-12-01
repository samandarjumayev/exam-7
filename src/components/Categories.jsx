import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, fetchAllProducts } from "../redux/backendSlice"
import Loader from "../ui/Loader"
import Error from "../ui/Error"
import { ArrowRight, ChevronRight, Edit, Lock, ShoppingCart, Star, Trash, WalletCards } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function Categories(){
    const {mode, products, isLoading, error, isAdmin, categories} = useSelector(state => state.backend);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [])


    if(isLoading){
        return <div className={`${mode ? `dark` : `light`} w-full h-[calc(100vh-70px)] flex items-center justify-center`}>
            <Loader />
        </div>
    }
    if(error){
        return <div className={`${mode ? `dark` : `light`} w-full h-[calc(100vh-70px)] flex items-center justify-center`}>
            <Error />
        </div>
    }
    return <div className={`${mode ? `dark` : `light`} h-[calc(100vh-70px)]`}>
        <div className={`container flex items-center justify-between h-full py-10 gap-7`}>
            <div className="h-full py-5">
                <div className={`${mode ? `bg-[#0E1216]` : `bg-white`} w-[250px] h-full border border-zinc-700 rounded-lg py-5 px-7 flex flex-col gap-2`}>
                    <h1 className="text-xl font-bold mb-5">Categories</h1>

                    <button className="border border-zinc-600 flex items-center gap-2 justify-center py-2 w-full rounded-lg cursor-pointer transition-all duration-200 hover:duration-75 hover:scale-104 active:duration-75 active:scale-100">All Products <ChevronRight /></button>
                    {categories.map((item, index) => {
                        return <button key={index} className="border border-zinc-600 flex items-center gap-2 justify-center capitalize py-2 w-full rounded-lg cursor-pointer transition-all duration-200 hover:duration-75 hover:scale-104 active:duration-75 active:scale-100">{item}</button>
                    })}
                </div>
            </div>

            <div className="h-[calc(100vh-70px)] flex-1 py-5">
                <div className="grid grid-cols-2 gap-5 flex-1">
                    {categories.map(item => {
                        return <div key={item} className={`${mode ? `bg-[linear-gradient(140deg,rgba(31,32,56,1)_0%,rgba(31,18,20,1)_50%,rgba(52,26,28,1)_100%)]` : ``} rounded-lg py-5 px-7 h-[200px] cursor-pointer transition-all duration-200 hover:duration-75 hover:scale-102`}>
                            <WalletCards color="#5537EB" size={70} />
                            <p className="text-3xl capitalize font-semibold">{item}</p>
                            <NavLink className={`text-[#5537EB] flex items-center gap-2 mt-3`}>Let's go <ArrowRight /></NavLink>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
}
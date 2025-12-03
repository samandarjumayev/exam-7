import { Box, Edit, ShoppingCart, Star } from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom"
import Error from "../ui/Error";
import Loader from "../ui/Loader";

export default function CategoryPage(){
    const {category} = useParams();
    const {mode, products, isLoading, error, isAdmin} = useSelector(state => state.backend);

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

    return <div className={`${mode ? `dark` : `light`} w-full`}>
        <div className="container w-full h-full">
            <h1 className="text-3xl font-semibold py-5 text-[#5537EB] h-[70px] flex items-center capitalize gap-1"><Box size={30} /> <span>{category}</span></h1>
            <div className="grid grid-cols-3 gap-9 pb-10">
                {products.map((item, index) => {
                    {if(item.category == category){
                        return <div key={index} className={`${mode ? `bg-[#0E1216]` : `bg-[#FFFFFF]`} border border-zinc-600 rounded-2xl transition-all duration-400 hover:duration-75 hover:scale-101 flex flex-col gap-1`}>
                            <div className="h-[150px] flex items-center justify-center">
                                <img src={item.images[0] || "/no-image.png"} alt="" className="h-full object-contain" />
                            </div>
                            <div className="flex-1 px-5 py-3 flex flex-col gap-0">
                                <p className="mb-2">{item.title.slice(0, 35)}</p>
                                <p className="text-[14px] text-zinc-500 leading-[15px]">{item.description.slice(0, 60)}...</p>
                                <p className="flex items-center gap-1 text-[14px]"><Star color="yellow" size={13} />{item.rating}</p>
                                <p className="font-semibold text-orange-500 capitalize flex items-center gap-1"><Box size={15} /> Category: {category}</p>
                                <p className="text-xl font-semibold text-[#5537EB]">${item.price}</p>
                                <div className="w-full flex gap-2 mt-2">
                                    <button className="flex items-center justify-center gap-1 bg-[#5537EB] text-whi flex-1 py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 active:duration-75 active:scale-95"><ShoppingCart /> Add</button>
                                </div>
                                <NavLink to={`/all_products/${item.id}`} className={`text-[#5537EB] hover:text-[#3773eb] mt-2 py-1 flex items-center justify-center rounded-lg`}>View</NavLink>
                            </div>
                        </div>
                    }}
                })}
            </div>
        </div>
    </div>
}
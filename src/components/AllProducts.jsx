import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../redux/backendSlice"
import Loader from "../ui/Loader"
import Error from "../ui/Error"
import { Edit, Lock, Pen, ShoppingCart, Star, Trash } from "lucide-react"

export default function AllProducts(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    const {mode, products, isLoading, error, isAdmin} = useSelector(state => state.backend);
    const [searched, setSearched] = useState(products)

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
                <div className={`bg-[#0E1216] w-[250px] h-full border border-zinc-700 rounded-lg py-5 px-7`}>
                    <h1 className="text-xl font-bold">Categories</h1>
                </div>
            </div>

            <div className="flex flex-col h-[calc(100vh-70px)] gap-5 pt-5">
                <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-bold">All Products</h1>
                    <input onChange={(e) => {
                        console.log(e.target.value)
                    }} type="text" placeholder="Enter something" className="border border-zinc-700 w-full outline-none px-5 py-2 rounded-lg" />
                </div>

                <div className="grid grid-cols-3 gap-5 overflow-y-auto flex-1">
                    {products.map(item => {
                        return <div key={item.title} className={`${mode ? `bg-[#0E1216]` : `bg-[#FFFFFF]`} border border-zinc-600 rounded-2xl transition-all duration-400 flex flex-col gap-1`}>
                            <div className="h-[150px] flex items-center justify-center">
                                <img src={item.images[0]} alt="" className="h-full object-contain" />
                            </div>
                            <div className="flex-1 px-5 py-3 flex flex-col gap-0">
                                <p className="mb-2">{item.title}</p>
                                <p className="text-[14px] text-zinc-500 leading-[15px]">{item.description.slice(0, 60)}</p>
                                <p className="text-xl font-semibold text-[#5537EB]">${item.price}</p>
                                <p className="flex items-center gap-1 text-[14px]"><Star color="yellow" size={13} />{item.rating}</p>
                                <div className="w-full flex gap-2 mt-2">
                                    <button className="flex items-center justify-center gap-1 bg-[#5537EB] flex-1 py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 active:duration-75 active:scale-95"><ShoppingCart /> Add</button>
                                    {isAdmin ? (
                                        <div className="flex items-center gap-1">
                                            <button className="cursor-pointer transition-all duration-200 active:duration-75 active:scale-95">
                                                <Edit color="green" size={25} />
                                            </button>
                                            <button className="cursor-pointer transition-all duration-200 active:duration-75 active:scale-95">
                                                <Trash color="red" size={25} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex items-center">
                                            <button className="cursor-no-drop text-zinc-600"><Lock size={18} /></button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
}
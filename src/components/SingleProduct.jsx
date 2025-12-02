import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchSingleProduct } from "../redux/backendSlice";
import Loader from "../ui/Loader";
import { Box, ChessKing, Edit, ShoppingCart, Star, Trash, Weight } from "lucide-react";
import Error from "../ui/Error";

export default function SingleProduct(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const {oneProduct, oneProductLoading, oneProductError, mode, isAdmin} = useSelector(state => state.backend);

    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [id]);

    if(!oneProduct){
        return <div className={`${mode ? `dark` : `light`} w-full h-[calc(100vh-70px)] flex items-center justify-center`}>
            <Loader />
        </div>
    }
    if(oneProductError){
        return <div className={`${mode ? `dark` : `light`} w-full h-[calc(100vh-70px)] flex items-center justify-center`}>
            <Error />
        </div>
    }
    return <div className={`${mode ? `dark` : `light`} w-full h-[calc(100vh-70px)] flex items-center justify-center`}>
        <div className={`${mode ? `bg-[#0E1216]` : `bg-[#FFFFFF]`} max-w-[500px] border border-zinc-600 rounded-2xl transition-all duration-400 flex flex-col gap-1`}>
            <div className="h-[150px] flex items-center justify-center">
                <img src={oneProduct.images[0]} alt="" className="h-full object-contain" />
            </div>
            <div className="flex-1 px-5 py-3 flex flex-col gap-0">
                <p className="mb-2 text-xl font-semibold font-[monospace]">{oneProduct.title}</p>
                <p className="text-[14px] text-zinc-500 leading-[15px]">{oneProduct.description}</p>

                <p className="flex items-center gap-1 text-[14px] mt-2"><Star color="orange~" size={13} />Rate: {oneProduct.rating}/5</p>
                <p className="flex items-center gap-1 text-[14px]"><Weight color="orange" size={13} />Weight: {oneProduct.weight}</p>
                <p className="flex items-center gap-1 text-[14px]"><ChessKing color="orange" size={13} />Brand: {oneProduct.brand}</p>
                <p className="text-xl font-semibold text-[#5537EB] flex items-center justify-between">
                    <span>${oneProduct.price}</span>
                    <span className="capitalize flex items-center gap-1"><Box color="orange" /> Category: {oneProduct.category}</span>
                </p>
                <div className="w-full flex gap-2 mt-2">
                    <button className="mt-2 flex items-center justify-center gap-1 bg-[#5537EB] text-white flex-1 py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 active:duration-75 active:scale-95"><ShoppingCart /> Add</button>
                    {/* {isAdmin ? (
                        <div className="flex items-center gap-1">
                            <button className="cursor-pointer transition-all duration-200 active:duration-75 active:scale-95">
                                <Edit color="green" size={25} />
                            </button>
                            <button onClick={() => dispatch(deleteProduct(oneProduct.id))} className="cursor-pointer transition-all duration-200 active:duration-75 active:scale-95">
                                <Trash color="red" size={25} />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <button className="cursor-no-drop text-zinc-600"><Lock size={18} /></button>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    </div>
}
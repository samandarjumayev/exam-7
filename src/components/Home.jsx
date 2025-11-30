import { useSelector } from "react-redux"
import homeIMG from '../../public/home.png'
import { NavLink } from "react-router-dom"
import { ArrowRight, ArrowUpRight, BaggageClaim, FolderKanban, LibraryBig } from "lucide-react"
import Footer from "./Footer"

export default function Home(){
  const {mode} = useSelector(state => state.backend)

  return <div className={`${mode ? `dark` : `light`}`}>
    <div className={`container`}>

      <div className={`flex md:flex-row flex-col-reverse md:py-25 py-10 gap-6 border-b border-zinc-700`}>
        <div className={`flex-1 flex flex-col justify-center gap-2`}>
          <h1 className={`sm:text-5xl text-3xl font-bold sm:mb-2`}>Your <span className={`text-[#ff5552]`}>Ultimate Shopping</span> Destination</h1>
          <p className={`sm:text-xl sm:my-2 font-medium text-[#5F646D]`}>Browse thousands of products, manage your cart, and enjoy seamless shopping with our modern marketplace.</p>
          <div className="mt-5 flex items-center gap-3">
            <NavLink to={'/all_products'} className={`sm:text-[18px] text-[15px] sm:py-3 py-2 sm:px-5 px-4 rounded font-semibold bg-[#5537EB] border border-[#5537EB] text-white flex items-center gap-2 transition-all duration-200 active:duration-75 active:scale-95`}> <p>Start Shopping</p> <ArrowRight /> </NavLink>
            <NavLink to={'/categories'} className={`${mode ? `` : ``} sm:text-[18px] text-[15px] sm:py-3 py-2 sm:px-5 px-4 font-semibold border rounded transition-all duration-200 active:duration-75 active:scale-95`}>Browse Categories </NavLink>
          </div>
        </div>

        <div className={`flex-1 flex items-center justify-center h-full`}>
          <img src={homeIMG} alt="" className="h-full" />
        </div>
      </div> 

      <div className="py-20">
        <h1 className="text-3xl font-bold mb-10">Why Choose Us?</h1>
        <div className={`grid md:grid-cols-3 grid-cols-1 gap-7`}>
          <div className="border border-zinc-700 py-7 px-5 rounded-2xl flex flex-col gap-3 transition-all duration-300 hover:duration-150 hover:scale-105 cursor-pointer">
            <h2 className="font-bold text-xl flex items-center gap-5">Multiple Sources <LibraryBig color="#5537EB" /></h2>
            <p className="text-zinc-500 font-medium leading-[21px]">Products from various trusted APIs and sources combined in one place.</p>
          </div>
          <div className="border border-zinc-700 py-7 px-5 rounded-2xl flex flex-col gap-3 transition-all duration-300 hover:duration-150 hover:scale-105 cursor-pointer">
            <h2 className="font-bold text-xl flex items-center gap-5">Easy Management <FolderKanban color="#5537EB" /></h2>
            <p className="text-zinc-500 font-medium leading-[21px]">Products from various trusted APIs and sources combined in one place.</p>
          </div>
          <div className="border border-zinc-700 py-7 px-5 rounded-2xl flex flex-col gap-3 transition-all duration-300 hover:duration-150 hover:scale-105 cursor-pointer">
            <h2 className="font-bold text-xl flex items-center gap-5">Smart Cart <BaggageClaim color="#5537EB" /></h2>
            <p className="text-zinc-500 font-medium leading-[21px]">Products from various trusted APIs and sources combined in one place.</p>
          </div>
        </div>
      </div>

      <div className="pb-20">
        <div className="bg-[linear-gradient(135deg,#4FD1C5_0%,#81E6D9_50%,#63B3ED_100%)] flex flex-col gap-3 justify-center items-center py-15 rounded-xl">
          <h1 className="text-5xl font-bold text-zinc-900">Ready to Start Shopping?</h1>
          <p className="text-zinc-900 font-semibold">Explore our complete collection of products today.</p>
          <NavLink to={'/all_products'} className={`bg-[#5537EB] mt-5 text-white flex items-center py-3 px-6 rounded-lg gap-3 text-[18px] transition-all duration-200 active:duration-75 active:scale-95`}>View all Products <ArrowRight /></NavLink>
        </div>
      </div>

      <div className={`pb-20 transition-colors duration-300`}>
          <h2 className="text-5xl font-bold mb-2 text-center">Contact<span className={mode ? 'text-cyan-400' : 'text-blue-500'}>.</span></h2>
          <p className={`text-center mb-12 ${mode ? 'text-slate-400' : 'text-slate-600'}`}>My Social Network Addresses</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href='https://t.me/developersamandar' className={`${mode ? 'bg-slate-900 border-slate-700 hover:border-cyan-400' : 'bg-slate-50 border-slate-300 hover:border-blue-500'} cursor-pointer border rounded-lg p-6 flex flex-col items-center gap-3 transition-all duration-300 group`}>
              <img src='https://cdn-icons-png.flaticon.com/128/5968/5968804.png' alt="Telegram manzilim" className='max-w-[60px]' />
              <span className={`font-semibold text-sm ${mode ? 'text-slate-300' : 'text-slate-700'}`}>Telegram</span>
              <ArrowUpRight size={16} className={`${mode ? 'text-slate-600 group-hover:text-cyan-400' : 'text-slate-400 group-hover:text-blue-500'} transition-colors`} />
            </a>
            <a href='https://www.instagram.com/developer_samandar' className={`${mode ? 'bg-slate-900 border-slate-700 hover:border-cyan-400' : 'bg-slate-50 border-slate-300 hover:border-blue-500'} cursor-pointer border rounded-lg p-6 flex flex-col items-center gap-3 transition-all duration-300 group`}>
              <img src='https://cdn-icons-png.flaticon.com/128/174/174855.png' alt="Instagram manzilim" className='max-w-[60px]' />
              <span className={`font-semibold text-sm ${mode ? 'text-slate-300' : 'text-slate-700'}`}>Instagram</span>
              <ArrowUpRight size={16} className={`${mode ? 'text-slate-600 group-hover:text-cyan-400' : 'text-slate-400 group-hover:text-blue-500'} transition-colors`} />
            </a>
            <a href='https://github.com/samandarjumayev' className={`${mode ? 'bg-slate-900 border-slate-700 hover:border-cyan-400' : 'bg-slate-50 border-slate-300 hover:border-blue-500'} cursor-pointer border rounded-lg p-6 flex flex-col items-center gap-3 transition-all duration-300 group`}>
              <img src='https://cdn-icons-png.flaticon.com/128/270/270798.png' alt="GitHub manzilim" className='max-w-[60px]' />
              <span className={`font-semibold text-sm ${mode ? 'text-slate-300' : 'text-slate-700'}`}>GitHub</span>
              <ArrowUpRight size={16} className={`${mode ? 'text-slate-600 group-hover:text-cyan-400' : 'text-slate-400 group-hover:text-blue-500'} transition-colors`} />
            </a>
            <a href='https://www.linkedin.com/in/developersamandar/' className={`${mode ? 'bg-slate-900 border-slate-700 hover:border-cyan-400' : 'bg-slate-50 border-slate-300 hover:border-blue-500'} cursor-pointer border rounded-lg p-6 flex flex-col items-center gap-3 transition-all duration-300 group`}>
              <img src='https://cdn-icons-png.flaticon.com/128/2504/2504923.png' alt="Linked In manzilim" className='max-w-[60px]' />
              <span className={`font-semibold text-sm ${mode ? 'text-slate-300' : 'text-slate-700'}`}>LinkedIn</span>
              <ArrowUpRight size={16} className={`${mode ? 'text-slate-600 group-hover:text-cyan-400' : 'text-slate-400 group-hover:text-blue-500'} transition-colors`} />
            </a>
        </div>
      </div>

      <Footer />

    </div>
  </div>
}
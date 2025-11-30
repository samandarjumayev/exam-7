import { AtSign, Github, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer(){
  return <>
    <div className="bg-neutral-primary-soft">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/1055/1055666.png" className="h-7 me-3" alt="FlowBite Logo" />
                    <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap"><span className="text-[#5537EB]">Nova</span>Store</span>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Resources</h2>
                    <ul className="text-body font-medium">
                        <li className="mb-4">
                            <NavLink to={'/cart'} className="hover:underline">Cart</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/users'} className="hover:underline">Users</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Products</h2>
                    <ul className="text-body font-medium">
                        <li className="mb-4">
                            <NavLink to={'/all_products'} className="hover:underline ">All Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Categories'} className="hover:underline">Categories</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Legal</h2>
                    <ul className="text-body font-medium">
                        <li className="mb-4">
                            <NavLink to={'/about'} className="hover:underline">About</NavLink>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-body sm:text-center">© 2025 <NavLink to={'/'} className="hover:underline">NovaStore</NavLink>. Created by <span className="text-[#5537EB]">Samandar.</span>
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="https://www.instagram.com/developer_samandar" className="text-body hover:text-heading">
                    <Instagram size={20} />
                    <span className="sr-only">Instagram page</span>
                </a>
                <a href="https://github.com/samandarjumayev" className="text-body hover:text-heading ms-5">
                    <Github size={20} />
                    <span className="sr-only">GiHub community</span>
                </a>
                <a href="https://www.linkedin.com/in/developersamandar/" className="text-body hover:text-heading ms-5">
                    <Linkedin size={20} />
                    <span className="sr-only">Linked page</span>
                </a>
                <a href="https://www.gmail.com/" className="text-body hover:text-heading ms-5">
                    <AtSign size={20} />
                    <span className="sr-only">Gmail</span>
                </a>
            </div>
        </div>
        </div>
    </div>

  </>
}
import logo from "../assets/icons/logo.png";
import { MdCancel, MdMenu } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpenClose = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white">
            <div className="w-full h-10 bg-green-800 flex flex-col md:flex-row items-center justify-center md:justify-between px-5 md:px-10">
                <span className="text-white text-sm md:text-base font-semibold md:ml-auto">Free Shipping on orders above 999/-</span>
                <p className="text-white text-sm md:text-base font-semibold md:ml-auto">Call us on: +91 9876805120</p>
            </div>
            <nav className="max-w-[1400px] bg-white mx-auto flex justify-between items-center p-5">
                <div className="flex items-center gap-x-3">
                    <img src={logo} className="w-12 h-12 md:w-14 md:h-14" alt="logo" />
                    <span className="text-green-900 font-bold text-xl md:text-2xl">Chaperone</span>
                </div>
                <div onClick={handleMenuOpenClose} className="block lg:hidden">
                    {isMenuOpen ? <MdCancel size={26} /> : <MdMenu size={26} />}
                </div>
                <div className={`${isMenuOpen ? "flex" : "hidden"} bg-white lg:flex ml-[10%] flex-grow justify-between max-md:w-full w-40 lg:flex-row flex-col items-center max-lg:shadow-xl py-2 lg:py-0 absolute top-28 right-1 lg:static rounded lg:shadow-none lg:rounded-none`}>
                    <ul className="flex flex-col lg:flex-row lg:items-center max-lg:gap-y-2 lg:gap-x-6">
                        <li className="font-semibold cursor-pointer">Home</li>
                        <li className="font-semibold text-yellow-400 cursor-pointer flex flex-col items-center">
                            Plants & Pots
                            <div className="w-10 h-[2px] bg-yellow-300"></div>
                        </li>
                        <li className="font-semibold  cursor-pointer">
                            Tools

                        </li>
                        <li className="font-semibold cursor-pointer">Our Services</li>
                        <li className="font-semibold cursor-pointer">Blog</li>
                        <li className="font-semibold cursor-pointer">Our Story</li>
                        <li className="font-semibold cursor-pointer">FAQs</li>
                    </ul>
                    <div className="flex gap-x-3 max-lg:mt-6">
                        <div className="flex flex-col justify-center items-center">
                            <AiOutlineUser size={26} />
                            <p className="text-sm font-semibold">My Profile</p>
                        </div>
                        <div className="flex flex-col justify-center items-center relative">
                            <AiOutlineShoppingCart size={26} />
                            <p className="text-sm font-semibold">Cart</p>
                            <div className="w-4 h-4 bg-yellow-400 flex justify-center items-center text-sm font-semibold rounded-full absolute -top-3 -right-2">3</div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
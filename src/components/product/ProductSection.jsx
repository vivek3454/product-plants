import { BsPlus } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const ProductSection = () => {
    return (
        <section className="my-14 flex gap-x-10 relative">
            <div className="hidden lg:block">
                <ul className="w-80 bg-[#edffd9] p-4">
                    <li className="flex justify-between items-center border-b pb-2 border-gray-500 text-gray-500">
                        Filter
                        <span className="cursor-pointer">CLEAR ALL</span>
                    </li>
                    <li className="flex justify-between items-center cursor-pointer border-b pb-3 pt-4 border-gray-500 text-gray-500">
                        Type of Plants
                        <BsPlus size={20} />
                    </li>
                    <li className="flex justify-between items-center cursor-pointer border-b pb-3 pt-4 border-gray-500 text-gray-500">
                        Price
                        <BsPlus size={20} />
                    </li>
                    <li className="flex justify-between items-center cursor-pointer border-b pb-3 pt-4 border-gray-500 text-gray-500">
                        Nursery
                        <BsPlus size={20} />
                    </li>
                    <li className="flex justify-between items-center cursor-pointer border-b pb-3 pt-4 border-gray-500 text-gray-500">
                        Ideal Plants Location
                        <BsPlus size={20} />
                    </li>
                    <li className="flex justify-between items-center cursor-pointer border-b pb-3 pt-4 border-gray-500 text-gray-500">
                        Indoor/Outdoor
                        <BsPlus size={20} />
                    </li>
                    <li className="flex justify-between items-center cursor-pointer border-b pb-3 pt-4 border-gray-500 text-gray-500">
                        Maintenance
                        <BsPlus size={20} />
                    </li>
                    <li className="flex justify-between items-center cursor-pointer border-b pb-3 pt-4 border-gray-500 text-gray-500">
                        Plant Size
                        <BsPlus size={20} />
                    </li>
                    <li className="flex justify-between items-center cursor-pointer border-b pb-3 pt-4 border-gray-500 text-gray-500">
                        Water Schedule
                        <BsPlus size={20} />
                    </li>
                    <li className="flex justify-between items-center cursor-pointer border-b pb-3 pt-4 border-gray-500 text-gray-500">
                        Color
                        <BsPlus size={20} />
                    </li>
                    <li className="flex justify-between items-center cursor-pointer border-b pb-3 pt-4 border-gray-500 text-gray-500">
                        Seasonal
                        <BsPlus size={20} />
                    </li>
                    <li className="flex justify-between items-center cursor-pointer pb-3 pt-4 text-gray-500">
                        Light Efficient
                        <BsPlus size={20} />
                    </li>
                </ul>
            </div>
            <div>
                <div className="flex gap-x-3 items-center">
                    <p className="text-gray-500">300 products</p>
                    <button className="bg-green-800 hover:bg-green-700 px-2 py-1 flex items-center gap-x-5 text-white uppercase font-semibold">
                        Sort by
                        <IoIosArrowDown size={19} />
                    </button>
                </div>
                <div className="mt-10 flex flex-wrap justify-center gap-6">
                    {
                        products.map((product, index) => (
                            <ProductCard
                                key={index}
                                product={product}
                            />
                        ))
                    }
                </div>
                <div className="flex justify-center mt-5">
                    <button className="bg-green-800 hover:bg-green-700 px-6 rounded-full py-1 text-white font-semibold">
                        View More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
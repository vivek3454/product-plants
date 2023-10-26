import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-[280px] mb-5">
      <div className="border-t-2 border-l-2 border-r-2 border-gray-400 relative">
        <AiOutlineHeart size={28} className="absolute top-2 right-2 text-gray-500" />
        <img src={product.imgUrl} className="w-full h-[300px]" alt={product.title} />
      </div>
      <button className="bg-green-800 text-white w-full py-[6px] font-semibold hover:bg-green-700">View Product</button>
      <h2 className="font-semibold text-xl mt-4">{product.title}</h2>
      <p className="text-gray-400 text-sm">{product.categories}</p>
      <div className="flex items-center gap-x-2">
        <div className="text-yellow-400 flex">
          <AiFillStar size={18} />
          <AiFillStar size={18} />
          <AiFillStar size={18} />
          <AiFillStar size={18} />
          <AiFillStar size={18} />
        </div>
        <span className="text-gray-400">{product.rating}</span>
      </div>
      <p className="mb-1">
        <span className="text-gray-400 line-through">₹ {product.price}</span>
        <span className="ml-4 text-lg font-semibold text-gray-600">₹ {product.discountedPrice}</span>
      </p>
      <div className="flex gap-x-2">
        <button className="bg-green-800 flex items-center gap-x-2 px-2 rounded-md text-white py-1 font-semibold hover:bg-green-700">
          <FaMinus className="text-white" size={12} />
          <span>Add to cart</span>
          <FaPlus className="text-white" size={12} />
        </button>
        <button className="px-2 rounded-md text-green-800 border-2 border-green-800 py-1 font-semibold">
          Buy on Rent
        </button>

      </div>

    </div>
  );
};

export default ProductCard;
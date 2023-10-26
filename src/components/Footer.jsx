import { AiFillLinkedin, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#edffd9] py-20 font-semibold">
      <div className="container mx-auto px-5">
        <div className="flex justify-between gap-5 max-[411px]:flex-col flex-wrap">
          <div className="flex flex-col gap-y-3 max-w-[300px]">
            <h2 className="text-xl uppercase">Subscribe to our Newsletter</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea expedita alias a corrupti aliquid?
            </p>
            <input type="text" className="border-2 border-gray-500 px-2 py-1" placeholder="Enter Your Email Address" />
            <div>
              <button className="bg-green-800 hover:bg-green-700 px-6 rounded-full py-1 text-white font-semibold">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-xl uppercase">About Us</h2>
            <ul className="mt-9 flex flex-col gap-y-3">
              <li className="text-gray-500">Our Story</li>
              <li className="text-gray-500">Blogs</li>
              <li className="text-gray-500">Careers</li>
              <li className="text-gray-500">Contact Us</li>
              <li className="text-gray-500">Help & Support</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl uppercase">Our Services</h2>
            <ul className="mt-9 flex flex-col gap-y-3">
              <li className="text-gray-500">Book Maali</li>
              <li className="text-gray-500">Plant Day Care</li>
              <li className="text-gray-500">Rent Plants</li>
              <li className="text-gray-500">Plants & Pots</li>
              <li className="text-gray-500">Gardening Tools</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl uppercase">Useful Links</h2>
            <ul className="mt-9 flex flex-col gap-y-3">
              <li className="text-gray-500">My Account</li>
              <li className="text-gray-500">Orders & Returns</li>
              <li className="text-gray-500">Track Order</li>
              <li className="text-gray-500">Terms & Conditions</li>
              <li className="text-gray-500">Privacy Policy</li>
              <li className="text-gray-500">
                Return, Refund & <br />
                Replacement Policy
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl uppercase">Get in Touch</h2>
            <ul className="mt-9 flex flex-col gap-y-3">
              <li className="text-gray-500">
                Address:F-262, First Floor, <br />
                Sushant Lok Phase-III <br />
                Sector-57, Gurgoan, <br />
                Haryana, India 122003
              </li>
              <li className="text-gray-500">
                Call: <br />
                +919958287272
              </li>
              <li className="text-gray-500">
                Email: <br />
                care@chaperoneplants.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl uppercase">Chaperone</h2>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quis nisi! Ut autem suscipit quibusdam earum blanditiis natus? Aut voluptates laborum ab totam rem, nihil nam provident optio dignissimos vitae veniam deserunt tempora sequi eum dicta ipsa incidunt harum, accusantium, sint unde. In, blanditiis, error eveniet, sequi facilis temporibus nulla dicta officia possimus accusantium saepe amet consequatur aspernatur.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl">Follow us on</h2>
          <div className="flex items-center gap-x-5 mt-2">
            <AiOutlineInstagram size={24} />
            <BsFacebook size={20} />
            <AiFillYoutube size={24} />
            <AiFillLinkedin size={24} />
          </div>
        </div>
      </div>
      <div className="border-t-2 mt-8 pt-4">
        <p className="container mx-auto px-5 text-gray-500">
          ©2023, chaperone.com, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
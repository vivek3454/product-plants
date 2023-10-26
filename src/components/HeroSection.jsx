import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { nurseryPlantsData } from "../data/nurseryPlantsData";

import { PiPlantFill } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 550 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 550, min: 0 },
            items: 1
        }
    };
    const ButtonGroup = ({ next, previous, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <>
                <button className={currentSlide === 0 ? "hidden" : "absolute left-9 flex justify-center items-center w-8 h-8 rounded-full p-1 text-white bg-gray-500 hover:bg-gray-700"} onClick={() => previous()} ><IoIosArrowBack size={35} /></button>
                <button className="absolute right-9 flex justify-center items-center w-8 h-8 rounded-full p-1 text-white bg-gray-500 hover:bg-gray-700" onClick={() => next()} ><IoIosArrowForward size={35} /></button>
            </>
        );
    };

    return (
        <section className="mb-14">
            <div className="flex justify-center items-center mt-5">
                <div className="flex items-center border-b border-gray-600">
                    <AiOutlineSearch size={22} className="text-gray-500" />
                    <input type="text" placeholder="Search Plants" className="ml-4 text-base md:text-lg outline-none" />
                    <PiPlantFill size={22} className="text-gray-500 -mb-3" />
                </div>
            </div>
            <div className="flex items-center my-10 gap-x-3">
                <button className="inline-block w-28 py-1 border-2 border-green-800 text-white shadow-md shadow-gray-500 font-semibold text-lg bg-green-800 tracking-wider">Plants</button>
                <button className="inline-block w-28 py-1 text-gray-400 font-semibold text-lg border-2 border-gray-400 tracking-wider">Pots</button>
            </div>
            <p className="mt-8 text-gray-500 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt totam voluptatem unde qui! Ratione, quibusdam! Perspiciatis illo ex quod veritatis non, ut impedit soluta sed animi error nulla iste mollitia itaque quia enim quaerat adipisci odio? Unde cupiditate eum ad officiis deserunt accusamus sunt autem praesentium perferendis veritatis.
            </p>

            <h2 className="my-10 text-2xl font-bold ">Nursery</h2>
            <Carousel responsive={responsive} arrows={false} customButtonGroup={<ButtonGroup />} >
                {nurseryPlantsData.map((data, index) => (
                    <div key={index} className="flex flex-col gap-y-4 items-center">
                        <img className="rounded-full w-36 h-36" src={data.url} alt="plant" />
                        <p className="max-w-[200px] text-center">
                            {data.desc}
                        </p>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default HeroSection;
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import './Banner.css';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import webDevelopment from "../../../assets/web development.jpg"
// import grapics from "../../../assets/graphics.avif"
// // import transaction from "../../assets/transaction.png"
import bannerLogo from "../../../assets/man4.png"

const Banner = () => {
    return (
        <div className="bg-[#0D4329] h-[70vh] md:h-[85vh] flex">
            <div className="flex-1 mt-16 p-2 md:p-5">
                <p className="text-white text-3xl mb-5 lg:mb-10 md:mb-5 md:text-3xl font-bold lg:text-5xl">Find the right freelance <br /> <span className="mb-5">service, right away</span></p>
                <label className="input-group w-full">
                    <input type="text" placeholder="Search for any services..." className="input input-bordered w-3/5 md:w-full focus:outline-none" />
                    <span className="bg-[#19A463] text-white text-base md:text-xl">Search</span>
                </label>
                <div className="flex items-center gap-2">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center mt-5">
                        <button className="btn btn-sm btn-outline text-white hover:bg-white hover:text-black">Web Development</button>
                        <button className="btn btn-sm btn-outline text-white hover:bg-white hover:text-black">Digital Marketing</button>
                        <button className="btn btn-sm btn-outline text-white hover:bg-white hover:text-black">Graphics Desing</button>
                    </div>
                </div>
            </div>
            <div className="flex-1 hidden md:flex items-end justify-end mt-10">
                <img className="3/4" src={bannerLogo} alt="" />
            </div>
        </div>
    );
};

export default Banner;




{/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="md:w-[100%] lg:w-[1300px] h-[80vh]"
            >
                <SwiperSlide>
                    <div className='flex'>
                        <div className='flex-1 bg-blue-300'>
                            
                        </div>
                        <div className='flex-1'>
                            <img src={webDevelopment} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='flex'>
                        <div className='flex-1 bg-blue-300'>
                            
                        </div>
                        <div className='flex-1'>
                            <img src={grapics} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='flex'>
                        <div className='flex-1 bg-blue-300'>
                            
                        </div>
                        <div className='flex-1'>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper> */}
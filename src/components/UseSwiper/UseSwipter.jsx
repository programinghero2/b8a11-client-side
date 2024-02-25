import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './useSwiper.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import customer from "../../assets/customer.png"
import flexible from "../../assets/flexibility.png"
import transaction from "../../assets/transaction.png"

const UseSwipter = () => {
    return (
        <div>
            <Swiper
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
                className="md:w-[200px] lg:w-[300px] h-[300px]"
            >
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='md:w-3/4 lg:w-2/4' src={customer} alt="" />
                        <p className='text-base font-semibold text-white mt-5'>99% Customer Satisfaction</p>
                        <p className='text-white text-base'>Based on paid invoices</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='md:w-3/4 lg:w-2/4' src={flexible} alt="" />
                        <p className='text-base font-semibold text-white mt-5'>99% Customer Satisfaction</p>
                        <p className='text-white text-base'>Based on paid invoices</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='md:w-3/4 lg:w-2/4' src={transaction} alt="" />
                        <p className='text-base font-semibold text-white mt-5'>99% Customer Satisfaction</p>
                        <p className='text-white text-base'>Based on paid invoices</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default UseSwipter;
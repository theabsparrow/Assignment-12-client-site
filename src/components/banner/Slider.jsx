import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = ({ firstSixCards }) => {
    return (
        <div className='px-[60px] font-poppins'>
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
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    firstSixCards.map(sixCard => <SwiperSlide key={sixCard._id}>
                        <div className='felx flex-col items-center justify-center mt-20 h-[70vh]'>
                            <div className='text-center'>
                                <h1 className='text-white font-xl'>category: <span>{sixCard.category}</span></h1>
                            </div>
                            <div className='text-center space-y-6 mt-4'>
                                <h1 className='text-6xl font-bold text-white' >{sixCard.title}</h1>
                                <p className='text-white font-semibold text-xl'>{sixCard.description}</p>
                            </div>
                            <div className='text-white text-center mt-10 space-y-5'>
                                <h1> Total question in this Survey: {sixCard.questions.length}</h1>
                                {
                                    sixCard.questions.map((question, i) => <h1 className='text-lg font-medium' key={i}>{question.description}</h1> )
                                    
                                }
                            </div>
                            <div className='flex justify-center mt-5'>
                                <Link className='text-white bg-[#859770] px-2 py-2 rounded-xl'>Explore More to Participate</Link>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

Slider.propTypes = {
    firstSixCards: PropTypes.array,
}
export default Slider;
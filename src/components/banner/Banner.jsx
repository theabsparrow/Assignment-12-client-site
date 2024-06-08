import { useEffect, useState } from 'react';
import banner from '../../../public/images/banner.png'
import useSurveyCards from '../../hooks/useSurveyCards';
import Slider from './Slider';

const Banner = () => {
    const [cards] = useSurveyCards();
    const [firstSixCards, setFirstSixCards] = useState([]);

    useEffect(() => {
        const sixCards = cards.slice(0,6);
        setFirstSixCards(sixCards)
    }, [cards])
   

    return (
        <div style={{ backgroundImage: `url(${banner})` }} className='h-[85vh] bg-no-repeat bg-center bg-cover font-poppins rounded-xl'>
            <div className='bg-gradient-to-r from-[#151515] via-[rgba(21, 21, 21, 0)] to-[#15151569] h-full '>
                <Slider firstSixCards={firstSixCards}></Slider>
            </div>
        </div>
    );
};

export default Banner;


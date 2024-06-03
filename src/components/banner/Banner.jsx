import banner from '../../../public/images/banner.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className='h-[85vh] bg-no-repeat bg-center bg-cover font-poppins px-[60px] rounded-xl'>
            this is banner
        </div>
    );
};

export default Banner;
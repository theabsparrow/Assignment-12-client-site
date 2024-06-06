import banner from '../../../public/images/banner.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className='h-[85vh] bg-no-repeat bg-center bg-cover font-poppins rounded-xl'>
            <div className='bg-gradient-to-r from-[#151515] via-[rgba(21, 21, 21, 0)] to-[#15151569] h-full '>
                this is banner
            </div>
        </div>
    );
};

export default Banner;


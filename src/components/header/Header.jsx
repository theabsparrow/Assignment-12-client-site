import banner from '../../../public/images/banner.png'
import Navbar from '../../shared/Navbar';
import Banner from '../banner/Banner';

const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className='h-[85vh] bg-no-repeat bg-center bg-cover'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;
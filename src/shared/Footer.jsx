
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import logo from '../../public/images/logo.png'
import { RiTwitterXLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className="font-poppins mt-16 bg-base-200 mb-5 pb-5">
            <div className="px-[60px]">
                <footer className="footer p-10 text-base-content">
                    <aside>
                        <img className='w-[5vw]' src={logo} alt="" />
                        <p>The SurveyAtlas<br />A reliable site to get authentic survey</p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <div>
                        <div className="flex items-center gap-4">
                            <RiTwitterXLine className='text-2xl'/>
                            <FaFacebook className='text-2xl'/>
                            <FaYoutube className='text-3xl'/>
                        </div>
                        <div>
                            <form>
                                <h6 className="footer-title">Newsletter</h6>
                                <fieldset className="form-control w-80">
                                    <label className="label">
                                        <span className="label-text">Enter your email address</span>
                                    </label>
                                    <div className="join">
                                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                        <button className="btn btn-primary join-item">Subscribe</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </footer>
                <div className='flex justify-center'>
                    <p>Copyright © 2024 - All right reserved by SurveyAtlas</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
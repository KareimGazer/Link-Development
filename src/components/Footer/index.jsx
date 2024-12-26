import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaTwitter } from "react-icons/fa";

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
        <div className="footer__body">
            <div className="footer__content">
                <div className="footer__group">
                    <div className="logo">
                        <a href=""><img src="./../../../public/logo.svg" alt=""/></a>
                    </div>
                    <p className="footer__desc">
                        We make technology produce productive, adaptable and sustainable business experiences.                     
                    </p>
                </div>
    
                <div className="footer__group">
                    <h3 className="footer__group__title">Company</h3>
                    <ul className="">
                        <li className="footer__item"><a href="https://kareimgazer.github.io/blog/">About</a></li>
                        <li className="footer__item"><a href="https://bsky.app/profile/kareimgazer.bsky.social">Careers</a></li>
                        <li className="footer__item"><a href="https://leetcode.com/u/KareimGazer/">Mobile</a></li>
                    </ul>
                </div>

                <div className="footer__group">
                    <h3 className="footer__group__title">Contact</h3>
                    <ul className="footer__list">
                        <li className="footer__item"><a href="https://www.linkedin.com/in/kareimgazer/">Help/FAQ</a></li>
                        <li className="footer__item"><a href="https://github.com/KareimGazer">Press</a></li>
                        <li className="footer__item"><a href="https://medium.com/@kareimtarek1972">Affilates</a></li>
                    </ul>
                </div>

                <div className="footer__group">
                    <h3 className="footer__group__title">Media</h3>
                    <ul className="footer__list">
                        <li className="footer__item"><a href="https://www.linkedin.com/in/kareimgazer/">News</a></li>
                        <li className="footer__item"><a href="https://github.com/KareimGazer">Photo</a></li>
                        <li className="footer__item"><a href="https://medium.com/@kareimtarek1972">Video</a></li>
                    </ul>
                </div>

                <div className="footer__group">
                    <div className='indicators'>
                        <a href="#" className="social-btn"><BiLogoFacebook /></a>
                        <a href="#" className="social-btn"><FaInstagram /></a>
                        <a href="#" className="social-btn"><FaTwitter /></a>
                    </div>
                    <p className='app-desc'>Discover our app</p>
                    <div className='indicators'>
                        <a href="#" className="download-btn"></a>
                        <a href="#" className="download-btn"></a>
                    </div>
                </div>
            </div>
            <p className="copy-right">&copy; All rights reserved@Linkdevelopment.com</p>
        </div>
    </footer>
  );
}

export default Footer;
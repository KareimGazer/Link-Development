import { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";
import './Navbar.css';

const Navbar = () => {
    const [navShown, setNavShown] = useState(false);
    const [dropdownShown, setDropdownShown] = useState(false);
    const [lang, setLang] = useState('EN');
    const navClass = navShown ? 'nav-shown' : '';
    const dropdownClass = dropdownShown ? 'dropdown-shown' : '';

    return (
        <header className={`header ${navClass}`}>
        <div className="logo">
            <a href=""><img src="/logo.svg" alt=""/></a>
        </div>
        <button className='burger-btn' aria-label="toggle navigation" onClick={() => setNavShown(!navShown)}>
            <span className="burger-logo"></span>
        </button>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link info" onClick={() => setNavShown(!navShown)}>Home</a></li>
                <li className="nav__item"><a href="#about" className="nav__link info" onClick={() => setNavShown(!navShown)}>About Us</a></li>
                <li className="nav__item"><a href="#news" className="nav__link info" onClick={() => setNavShown(!navShown)}>News</a></li>
                <li className="nav__item"><a href="#footer" className="nav__link info" onClick={() => setNavShown(!navShown)}>Contact Us</a></li>
            </ul>
            <ul className="nav__list">
                <li className="nav__item"><a href="#" className="nav__link nob">Login</a></li>
                <li className="nav__item"><a href="#" className="nav__link nob" style={{border: "1px solid black", borderRadius: '0.4em'}}>Sign Up</a></li>
                <li className={`dropdown nav__item ${dropdownClass}`} >
                    <a 
                        href="#" 
                        className="dropdown__link nav__link nob" 
                        onClick={() => {
                                setDropdownShown(!dropdownShown)
                            }
                        }
                    >
                        <div>{lang}</div> <SlArrowDown className='dropdown__icon'/>
                    </a>
                        <div className="submenu">
                            <ul className="submenu__list">
                                <li><a href="#" className="submenu__link" onClick={() => setLang('EN')}>English - EN</a></li>
                                <li><a href="#" className="submenu__link" onClick={() => setLang('AR')}>Arabic - AR</a></li>
                            </ul>
                        </div>
                    </li>
            </ul>
        </nav>
        </header>
    );
}

export default Navbar;

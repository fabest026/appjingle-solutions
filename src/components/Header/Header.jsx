import React, { useRef, useEffect } from 'react';
import './header.css';
import appjingle_logo from '../../images/appjingle-logo.png';

const nav__links = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#service',
        display: 'Service'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#contact',
        display: 'Contact'
    },
];

const Header = ({ theme, toggleTheme }) => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const headerFunc = () => {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            headerRef.current.classList.add('header__shrink');
        } else {
            headerRef.current.classList.remove('header__shrink');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', headerFunc);
        return () => window.removeEventListener('scroll', headerFunc);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetAttr);

        if (targetElement) {
            const location = targetElement.offsetTop;
            window.scrollTo({
                left: 0,
                top: location - 80, // Adjust for the height of the header
            });
        } else {
            console.warn(`Element with the selector ${targetAttr} not found.`);
        }
    };

    const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="nav__wrapper">
                    <div className="logo">
                        <img src={appjingle_logo} alt="appjingle logo" />
                    </div>

                    {/* =========== navigation ========== */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu">
                            {nav__links.map((item, index) => (
                                <li className="menu__item" key={index}>
                                    <a
                                        href={item.path}
                                        onClick={handleClick}
                                        className="menu__item"
                                    >
                                        {item.display}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* =========== light mode ========== */}
                    <div className="light__mode">
                        <span onClick={toggleTheme}>
                            {theme === 'light-theme' ? (
                                <span>
                                    <i className="ri-moon-line"></i>
                                    Dark
                                </span>
                            ) : (
                                <span>
                                    <i className="ri-sun-line"></i>
                                    Light
                                </span>
                            )}
                        </span>
                    </div>

                    <span className="mobile__menu" onClick={toggleMenu}>
                        <i className="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;

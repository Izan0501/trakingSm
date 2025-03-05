import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    // handle Toggle function (show mobile menu)
    const [menuVisible, setMenuVisible] = useState(false);

    const handleToggle = () => {
        setMenuVisible(!menuVisible);
    };
    // handle toggle ends

    return (
        <>
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="/" className="nav__logo">
                        Trekking
                    </a>
                    <div className={menuVisible ? 'show-menu' : 'nav__menu'} id='nav-menu'>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <NavLink to="/" className={'nav__link'}>Home</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink to="/about" className={'nav__link'}>About</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink to="/blog" className={'nav__link'}>Blog</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink to="/contact" className={'nav__link'}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Toggle & close buttoms */}
                    <div onClick={handleToggle} className="nav-toggle">
                        {
                            !menuVisible
                                ? <i className="ri-menu-line"></i>
                                : <div className="nav__close" id='nav-close'>
                                    <i className="ri-close-large-line"></i>
                                </div>}
                    </div>
                </nav>
            </header>
            {/* <nav class="navbar">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                </ul>
            </nav> */}
        </>
    )
}

export default Navbar
import React from "react";
import { useEffect, useState,useContext } from "react";

import styled from './Header.scss'
import classNames from 'classnames/bind';
import { ThemContext } from "../../App";
import img from '../../Image/logoHeader.png'

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
// import MapIcon from '@mui/icons-material/Map';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SearchIcon from '@mui/icons-material/Search';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


import { Link } from "react-router-dom";

function Header() {
    const cx = classNames.bind(styled)
    const them = useContext(ThemContext)
    const [headerDwon, setHeaderDwon] = useState("header");
    const [noneHeader,setNoneHeader] = useState(true)
    // const [noneLogo,setNoneLogo] = useState(true)
    const [noneMenu,setNoneMenu] = useState(false)
    const [activeTab,setActiveTab] = useState(them);
    const [active, setActive] = useState(true);
    


    useEffect(() => {
        const down = () => {
            if (window.scrollY >= 10) {
                setHeaderDwon("header on-scroll");
                setNoneHeader(false)
            }
            else {
                setHeaderDwon("header ")
                setNoneHeader(true)
            }
        };
        window.addEventListener("scroll", down);
        return () => {
            window.removeEventListener("scroll", down);
        };
    }, []);
    

    const handleHideMenu = () => {
        setNoneMenu(!noneMenu)
    }
    const handelNavbar = (index) => {
        setActiveTab(index)
        setActive(!active)
    }

    return (  
        <div className={headerDwon}>
            <div className="container">
                <div className={cx('header-All')}>
                    <div className={noneHeader ? cx('content-header') : 'content-header none'}>
                        <div className={cx('content-contact')}>
                            {/* logo  */}
                            <div className={cx('logo')}>
                                <Link  to="/"  onClick={() => handelNavbar(1)} ><img width="130" height="100%" src={img}  alt="Internet Viettel"></img></Link>
                            </div>

                            <div className={noneMenu ? 'content-contact-pages' : 'content-contact-pages hide'}>
                                {/* item Menu */}
                                <div className={cx('content-contact-item')}>
                                    {/* content-Pages on Mobile */}
                                    <ul className={cx('content-Pages-ul-mobile')}>
                                        <li onClick={() => handleHideMenu()} >
                                            <Link to="/" className="page"  onClick={() => handelNavbar(1)}  >
                                                <HomeIcon className={cx('content-contact-icon')}/> 
                                                <p className = {activeTab === 1 ? 'active' : " "}>Trang Chủ</p>
                                            </Link>
                                        </li>
                                        <li onClick={() => handleHideMenu()}>
                                            <Link to="/Province" className="page" onClick={() => handelNavbar(2)}>
                                                <AdminPanelSettingsIcon className={cx('content-contact-icon')}/>
                                                <p className = {activeTab === 2 ? 'active' : " "}>Quy Trình</p>
                                            </Link>
                                        </li>
                                        <li onClick={() => handleHideMenu()} >
                                            <Link to="/Contact" className="page" onClick={() => handelNavbar(3)}> 
                                                <ContactMailIcon className={cx('content-contact-icon')}/>
                                                <p className = {activeTab === 3 ? 'active' : " "}>Liên Hệ</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className={cx('content-Pages unshow')}>
                                <ul className={cx('content-Pages-ul')}>
                                    <li >
                                        <Link to="/" className={activeTab === 1 ? 'page active' : " page"} onClick={() => handelNavbar(1)}>Trang Chủ</Link>
                                    </li >
                                    <li >
                                        <Link to="/Province"  className={activeTab === 2 ? 'page active' : " page"} onClick={() => handelNavbar(2)}>Quy Trình</Link>
                                    </li>
                                    <li >
                                        <Link to="/Contact" className={activeTab === 3 ? 'page active' : " page"} onClick={() => handelNavbar(3)}>Liên Hệ</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className={cx('content-nav')} >
                                <div className="header-search"> <SearchIcon/> </div>

                                <div onClick={() => handleHideMenu()} className="header-menu" ><MenuIcon /> </div>

                                <div className={cx('content-search')}>
                                    <SearchIcon className={cx('content-icon')}/>
                                    <input type="text" placeholder="Tìm kiếm"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* content-Pages on PC */}
                    
                </div>
            </div>
        </div>
    );
}

export default Header;
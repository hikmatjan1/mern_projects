import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { TfiYoutube } from 'react-icons/tfi';
import { TbResize } from 'react-icons/tb';
import { MdOutlineClose, MdOutlineMusicNote } from 'react-icons/md';
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';
import MobileMenu from './MobileMenu';
import './navbar.css';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='navbar_container'>
            <div className="navbar_wrapper">
                <div className="navbar_left"><img src="https://onlineconvertfree.com/img/logo.png" alt="" /> Useful Applications</div>
                <div className="navbar_right">
                    {openMenu ? (
                        <MdOutlineClose className='AiOutlineMenu' onClick={() => setOpenMenu(false)} />
                    ) : (
                        <AiOutlineMenu className='AiOutlineMenu' onClick={() => setOpenMenu(true)} />
                    )}
                    <ul className="navbar_list">
                        <li className={"navbar_list_item"}>
                            <span>More Tools</span>
                            <RxCaretDown className='RxCaretDown' />
                            <RxCaretUp className='RxCaretUp' />

                            <div className="movies_dropdowns">
                                <div className="movies_dropdowns_list">
                                    <ul>
                                        <a href="http://youtube-video-downloader.uz/">
                                            <li>
                                                <TfiYoutube />Youtube Downloader
                                            </li>
                                        </a>
                                        <a href="https://image-resizer-full.netlify.app">
                                            <li>
                                                <TbResize />Image Resizer
                                            </li>
                                        </a>
                                        <a href="https://lyurick-finder.netlify.app">
                                            <li>
                                                <MdOutlineMusicNote />Lyurics Finder
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* for mobile */}
            {
                openMenu && (
                    <MobileMenu />
                )
            }
        </div >
    )
}

export default React.memo(Navbar);
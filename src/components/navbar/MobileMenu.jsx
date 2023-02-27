import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineMusicNote } from 'react-icons/md';
import { TfiYoutube } from 'react-icons/tfi';
import { TbResize } from 'react-icons/tb';

function MobileMenu() {
    return (
        <ul className='mobile_liest_menu'>
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
    )
}

export default React.memo(MobileMenu);
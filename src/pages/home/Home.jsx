import React from 'react';
import image1 from '../../assets/youtube.jpg';
import image2 from '../../assets/images.png';
import image3 from '../../assets/1.jpg';
import './home.css';

let data = [{
    id: Math.random().toString(),
    name: "Youtube Downloader",
    image: image1,
    url: "http://youtube-video-downloader.uz/"
},
{
    id: Math.random().toString(),
    name: "Image Resizer",
    image: image2,
    url: "http://image-resizer.uz/"
},
{
    id: Math.random().toString(),
    name: "Lyurics Finder",
    image: image3,
    url: "https://lyurick-finder.netlify.app"
}];

function Home() {
    return (
        <div className='home_container'>
            <div className="home_wrapper">
                <ul className="lists">
                    {data.map(item => (
                        <a href={item.url}>
                            <li key={item.id} className="list_item1">
                                <img src={item.image} alt="" />
                                <h5>{item.name}</h5>
                                <div className="bg_dark"></div>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default React.memo(Home);
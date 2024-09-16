import React from "react";
import { assets } from '../../assets/assets.js';
import './AppDownload.css';

const AppDownload = () => {
    return (
        <div className="app-dowload" id='app-dowload'>
            <p>For Better Experience Dowload<br />Tomato App</p>
        <div className="app-download-platform">
            <img src={assets.playStore} alt="" />
            <img src={assets.appStore} alt="" />
        </div>


        </div>
    )
};

export default AppDownload;
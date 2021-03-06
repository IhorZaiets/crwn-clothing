import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import './menu-item.styles.scss'


const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigation = useNavigate()
    const location = useLocation()
    return(
        <div className={`${size} menu-item`} onClick = {() => {navigation(`${location.pathname}${linkUrl}`)}}>
            <div 
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="content">
                <h1 className="title"> { title.toUpperCase() } </h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;
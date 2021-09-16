import React from 'react'
import bannerImg from '../../assets/images/Banner/bannerimg.png'
import './Banner.scss'

export default function Banner() {
    return (
        <div className="bannerContainer">
            <div className="backgroundLeft">
                <div>El acceso a redes sociales y</div>
                <div>emprendimientos online</div>
                <div>desde el año pasado.</div>
            </div>
            <img className="bannerImg" src={bannerImg} alt="bannerImg"></img>
        </div>
    )
}

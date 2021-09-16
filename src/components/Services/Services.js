import React from 'react'
import './Services.scss'
import Vector from '../../assets/vectors/Vector.png'
import Vector1 from '../../assets/vectors/Vector1.png'
import Vector2 from '../../assets/vectors/Vector2.png'
import LineShort from '../../assets/images ChallengePresentation/LineShort.png'
import LineLong from '../../assets/images ChallengePresentation/LineLong.png'
import Rectangle from '../../assets/images ChallengePresentation/Rectangle.png'
import Rectangle1 from '../../assets/images ChallengePresentation/Rectangle1.png'

export default function Services() {
    return (
        <center>
        <div class="bannerContainerA">
            
            <div class="backgroundLeft">  
                <div class="bannerImg" >
                    <img class="img-center" src={Vector2} alt="Vector2"></img>
                </div>
                <div><h1 class="texto">Creación de marca gráﬁco e identidad corporativa</h1>
                <p class="textop">Desde el nombre, estructura hasta las aplicaciones de como se verá tu marca.</p></div>
            </div>
            <div class="backgroundLeft">  
                <div class="bannerImg" >
                    <img class="img-center" src={Vector1} alt="Vector1"></img>
                </div>
                <div><h1 class="texto">Diseño de páginas web</h1>
                <p class="textop">Ten una diseño digerible, intuitivo, flexible y adaptable.</p></div>
            </div>
            <div class="backgroundLeft">  
                <div class="bannerImg" >
                    <img class="img-center" src={Vector} alt="Vector"></img>
                </div>
                <div><h1 class="texto">Desarrollo de campañas digitales</h1>
                <p class="textop">Ten una diseño digerible, intuitivo, flexible y adaptable.</p></div>
            </div>
            
        </div>
        <div className="Container-img">
                    <a href="#" className="enlace">Otros Servicios </a>
            </div></center>
        
    )
}

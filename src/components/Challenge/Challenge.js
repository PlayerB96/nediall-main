    import React from 'react'
    import './Challenge.scss'
    import Rectangle from '../../assets/images ChallengePresentation/Rectangle.png'
    import Rectangle1 from '../../assets/images ChallengePresentation/Rectangle1.png'
    import LineShort from '../../assets/images ChallengePresentation/LineShort.png'
    import LineLong from '../../assets/images ChallengePresentation/LineLong.png'

    export default function Challenge() {
        return (
            <center>
            <><div className="Container">
                <h1 className="tittle">Algunos de nuestros</h1>
                <h1 className="tittle1">desafíos</h1>
                </div>    
                <div className="Container-line">
                <img className="Line" src={LineShort} alt="LineShort"></img>
                <img className="Line" src={LineLong} alt="LineLong"></img>
                <img className="Line" src={LineShort} alt="LineShort"></img>
                </div>
                <div className="Container">
                <a href="#" className="btn">Misceláneo</a>
                <a href="#" className="btn">Branding</a>
                <a href="#" className="btn">Páginas web</a>
                </div>
            
            <div className="Container-img">
                    <img className="Rectangle" src={Rectangle} alt="Rectangle"></img>
                    <img className="Rectangle" src={Rectangle1} alt="Rectangle1"></img>
                    <a href="#" className="enlace">más proyectos</a>
            </div></>
                </center>
        )
    }

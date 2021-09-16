import React from 'react'
import './Tittle.scss'
import background from '../../assets/images/Tittle/background.svg'
import background2 from '../../assets/images/Tittle/background2.png'
import MenuBar from './MenuBar/MenuBar'
import TittleInfo from './TittleInfo/TittleInfo'


const dataTittle = {
    'tittle': 'NEDIALL',
    'description1': 'Especialistas en soluciones',
    'description2': 'integrales del marketing digital',
    'buttonA': '¿Necesitas asesoría?',
    'buttonB': 'Servicios',

}


export default function Tittle(props) {
    return (
        <div className="tittleContainer">
            <img className="background" src={background} alt="background"></img>
            <img className="background2" src={background2} alt="background2"></img>
            <MenuBar className="menuBar" dataTittle={dataTittle} stateModal={props.stateModal}></MenuBar>
            <TittleInfo className="tittleInfo" dataTittle={dataTittle} stateModal={props.stateModal}></TittleInfo>
        </div>


    )
}

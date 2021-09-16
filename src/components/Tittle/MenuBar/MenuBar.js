import React from 'react'
import './MenuBar.scss'
import btnBar from '../../../assets/images/Tittle/menuBtn.svg'

const dataTittle = {
    'tittle':'',
    'description1': '',
    'description2': '',
    'buttonA': '',
    'buttonB': '',

}


export default function MenuBar(props) {
    return (
        <div className="menuBarContainer">
            <div className="tittleText">{props.dataTittle.tittle}</div>
            <img className="btnBar" src={btnBar} alt="btnBar" onClick={props.stateModal}></img>
        </div>
    )
}

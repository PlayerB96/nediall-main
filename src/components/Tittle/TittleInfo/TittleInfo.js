import React from 'react'
import man from '../../../assets/images/Tittle/man.png'
import './TittleInfo.scss'

const dataTittle = {
    'tittle': '',
    'description1': '',
    'description2': '',
    'buttonA': '',
    'buttonB': '',

}



export default function TittleInfo(props) {

    return (
        <div className="tittleInfoContainer">
            <div className="descriptionContainer">
                <div className="textDescription">{props.dataTittle.description1}</div>
                <div className="textDescription">{props.dataTittle.description2}</div>
                <div className="buttonsFlex">
                    <button className="buttonA" onClick={props.stateModal}>{props.dataTittle.buttonA}</button>
                    <button className="buttonB" onClick={props.stateModal}>{props.dataTittle.buttonB}</button>
                </div>
            </div>
            <img className="man" src={man} alt="man"></img>
        </div>
    )
}

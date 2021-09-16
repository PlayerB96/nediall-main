import React from 'react'
import './Modal.scss'
import Input from '../DataForm/Input/Input'
import {useState} from 'react';


export default function Modal(props) {


    const [data, setData] = useState({
        fName: "",
        lName: "",
        contact_number: "",
        email: ""
    });

    const setForm = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const sendData = (e) => {
        let axios = require("axios");
        let data2 = JSON.stringify({
            name: data.fName,
            lastname: data.lName,
            contact_number: data.contact_number,
            email: data.email
        });

        let config = {
            method: "post",
            url: "https://nediall-backend.herokuapp.com/api/contact",
            headers: {
                "Content-Type": "application/json",
            },
            data: data2,
        };

        axios(config)
            .then(function (response) {
                if (response.data === "contacto añadido") {
                    alert(JSON.stringify(response.data));

                }
                else {
                    alert(JSON.stringify(response.data));
                }
            }).catch(function (error) {
                console.log(error)
            });
    };


    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="exitBtn"><button onClick={props.stateModal}> X </button></div>
                <div className="form">
                    <Input
                        type="text"
                        placeholer="Nombres y Apellidos"
                        name="fullname"
                        onChange={setForm}
                    />
                    <Input
                        type="text"
                        placeholer="Número de Contacto"
                        name="phonenumber"
                        onChange={setForm}
                    />
                    <Input
                        type="email"
                        placeholer="Email"
                        name="email"
                        onChange={setForm}
                    />
                </div>
                <div className="footer">
                    <button onClick={sendData}>¡Llámenme ahora!</button>
                </div>
            </div>

        </div>
    )
}

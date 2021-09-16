import "./Form.scss";
import  Input from '../Input/Input';
import {useState} from 'react';
import womenImg from '../../../assets/imgs/woman.png';

function Form(props){
    const [data, setData] = useState({
        fName: "",
        lName: "", 
        contact_number: "", 
        email: ""
    });

    const setForm = (e) =>{
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value});
    }

    const sendData = (e) => {
        let axios = require("axios");
        let data2 = JSON.stringify({
            name: data.fName,
            lastname: data.lName,
            contact_number: data.contact_number,
            email: data.email
        });

        let config ={
            method: "post",
            url: "https://nediall-backend.herokuapp.com/api/contact",
            headers: {
               "Content-Type": "application/json",
            },
            data: data2,
        };

        axios(config)
            .then(function (response){
                if(response.data === "contacto añadido"){
                    alert(JSON.stringify(response.data));

                }
                else{
                    alert(JSON.stringify(response.data));
                }
            }).catch(function (error){
                console.log(error)
            });
    };

    return(
        <div className="formContainer">
            <div className="form">
                <Input
                    type="text"
                    placeholder="Nombres"
                    name="fName"
                    onChange={setForm}
                />
                <Input
                    type="text"
                    placeholder="Apellidos"
                    name="lName"
                    onChange={setForm}
                />
                <Input
                    type="text"
                    placeholder="Número de Contacto"
                    name="contact_number"
                    onChange={setForm}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={setForm}
                />
                <div className="buttonContainer">
                    <div className="buttonCall" 
                        onClick={sendData}>
                        ¡Llámenme ahora!
                    </div>
                </div>
            </div>
            <div className="Img">
                <img className="womanImg" src={womenImg} alt="ga"/>
            </div>
            
        </div>
    );
}

export default Form;
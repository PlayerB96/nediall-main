import './DataForm.scss'
import Form from './Form/Form';
import backgroundImage from '../../assets/imgs/citiybackground.png';
import Footer from '../Footer/footer'

export default function DataForm(props){

    return (
        <div className="dForm-container">
            <div>
                <img className="dForm-img-background" src={backgroundImage} alt="backgroundImage"/> 
                <p>¡Comencemos con
                tu proyecto!
                </p>
            </div>
            <div className="dForm-background">
                <Form className="form-pos"/>
                <Footer className="footer-pos"/>
            </div>        
        </div>
    );   
}
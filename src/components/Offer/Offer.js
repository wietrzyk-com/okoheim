import { Fade } from "react-awesome-reveal";

import mitsubishiPhoto from './mitsubishi.jpg'
import mitsubishiLogo from '../Footer/mitsubishi.png';


import vaillantPhoto from './vaillant.jpg';
import vaillantLogo from '../Footer/vaillant.png';
import smarthomePhoto from './smarthome.png';
import smarthomeLogo from '../Footer/loxone.png';

import './Offer.scss';

export default function Offer() {
    return (
        <section id="angebot">
            <Fade triggerOnce>
            <div className="container">
                <h2 className="display-6">Angebot</h2>
                <div>
                    <a href="/angebot/warmepumpe/mitsubishi">
                        <img className="img-fluid" src={mitsubishiPhoto} alt="Mitsubishi" />
                        <span className="display-6">Warmepumpe</span>
                        <img className="img-fluid" src={mitsubishiLogo} alt="Mitsubishi" />
                    </a>
                    <a href="/angebot/warmepumpe/vaillant">
                        <img className="img-fluid" src={vaillantPhoto} alt="Vaillant" />
                        <span className="display-6">Warmepumpe</span>
                        <img className="img-fluid" src={vaillantLogo} alt="Vaillant" />
                    </a>
                    <a href="/angebot/warmepumpe/smart-home">
                        <img className="img-fluid" src={smarthomePhoto} alt="Smart Home" />
                        <span className="display-6">Smart home</span>
                        <img className="img-fluid" src={smarthomeLogo} alt="Mitsubishi" />
                    </a>
                </div>
            </div>

            </Fade>
        </section>
    )
}
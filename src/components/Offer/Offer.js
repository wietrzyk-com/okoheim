import { Fade } from "react-awesome-reveal";

import mitsubishiPhoto from './mitsubishi.jpg'
import mitsubishiLogo from '../Footer/mitsubishi.png';

import vaillantPhoto from './vaillant.jpg';
import vaillantLogo from '../Footer/vaillant.png';
import smarthomePhoto from './smarthome.jpg';
import smarthomeLogo from '../Footer/loxone.png';

import './Offer.scss';
import { useTranslation } from 'react-i18next';

export default function Offer() {
    const { t } = useTranslation()
    return (
        <section id="angebot">
            <Fade triggerOnce>
            <div className="container">
                <h2 className="display-6">{t('offer.title')}</h2>
                <div>
                    <a href="/angebot/warmepumpe/mitsubishi">
                        <img className="img-fluid" src={mitsubishiPhoto} alt={t('offer.mitsubishi')} />
                        <span className="display-6">{t('offer.mitsubishi')}</span>
                        <img className="img-fluid" src={mitsubishiLogo} alt={t('offer.mitsubishi')} />
                    </a>
                    <a href="/angebot/warmepumpe/vaillant">
                        <img className="img-fluid" src={vaillantPhoto} alt={t('offer.vaillant')} />
                        <span className="display-6">{t('offer.vaillant')}</span>
                        <img className="img-fluid" src={vaillantLogo} alt={t('offer.vaillant')} />
                    </a>
                    <a href="/angebot/warmepumpe/smart-home">
                        <img className="img-fluid" src={smarthomePhoto} alt={t('offer.smarthome')} />
                        <span className="display-6">{t('offer.smarthome')}</span>
                        <img className="img-fluid" src={smarthomeLogo} alt={t('offer.smarthome')} />
                    </a>
                </div>
            </div>

            </Fade>
        </section>
    )
}
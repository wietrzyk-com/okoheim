import { useTranslation } from 'react-i18next';
import { useState } from "react";
import validator from 'validator';
import { isValidNumber, parsePhoneNumber } from 'libphonenumber-js';
import {
    StaticGoogleMap,
    Marker
} from 'react-static-google-map';

import "./Contact.scss";

const MAPS_API_KEY = 'AIzaSyDnKUtBdy6dVQuvd5JTcZYai0njjRcZiA8';

export default function Contact() {
    const { t } = useTranslation();
    const [ errorEmail, setErrorEmail ] = useState(false);
    const [ errorPhone, setErrorPhone ] = useState(false);

    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ message, setMessage ] = useState('');

    const [ formState, setFormState ] = useState('default')

    const validateEmail = () => {
        setEmail(email);
        return validator.isEmail(email)
    };

    const validatePhone = () => {
        const phoneNumber = phone
        try {
            const parsedNumber = parsePhoneNumber(phoneNumber, 'DE');
            return (parsedNumber && isValidNumber(phoneNumber, 'DE'))
        } catch (e) {
            return false
        }
    }

    const handleSubmit = () => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                phone,
                email,
                message,
                'form-name': 'contact'
            }).toString(),
        })
            .then(() => setFormState('success'))
            .catch((error) => setFormState('error'));
    };

    return (
        <section id="kontakt" className="Contact">
            <div className="container">
                <iframe
                    title="Google Maps"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${encodeURIComponent(t('contact.mapLocation'))}`}
                    allowFullScreen>
                </iframe>
                <div>
                    <h2>{t('contact.title')}</h2>

                    { formState === 'default' &&

                    <form id="contactForm" name="contact" data-netlify={true}>
                        <input type="hidden" name="form-name" value="contact" />
                    <div className="mb-3">
                        <label htmlFor="formEmail" className="form-label">{t('contact.email')}</label>
                        <div className="input-group has-validation">
                            <input value={email} onChange={e => setEmail(e.currentTarget.value)} onBlur={() => {
                                if (email) {
                                    setErrorEmail(!validateEmail())
                                } else {
                                    setErrorEmail(false)
                                }
                            }
                            } type="email" placeholder={t('contact.emailPlaceholder')} className={`${errorEmail ? 'is-invalid' : ''} form-control`} id="formEmail" />
                            { errorEmail && <div className="invalid-feedback">
                                {t('contact.errorEmailMessage')}
                            </div> }
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formPhone" className="form-label">{t('contact.phone')}</label>
                        <div className="input-group has-validation">
                            <input value={phone} onChange={e => setPhone(e.currentTarget.value)} onBlur={() => {
                                if (phone) {
                                    setErrorPhone(!validatePhone())
                                } else {
                                    setErrorPhone(false)
                                }
                            }
                            } type="text" placeholder={t('contact.phonePlaceholder')} className={`${errorPhone ? 'is-invalid' : ''} form-control`} id="formPhone" />
                            { errorPhone && <div className="invalid-feedback">
                                {t('contact.errorPhoneMessage')}
                            </div> }
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formMessage" className="form-label">{t('contact.message')}</label>
                        <div className="input-group has-validation">
                            <textarea
                                onChange={e => setMessage(e.currentTarget.value)}
                                rows={3} placeholder={t('contact.messagePlaceholder')}
                                className='form-control' id="formMessage">{ message }</textarea>
                        </div>
                    </div>

                    <a href="/contact" onClick={e => {
                        e.preventDefault()
                        if (!email && !phone) {
                            setErrorPhone(true);
                            return false;
                        }

                        if (errorEmail || errorPhone) {
                            return false;
                        }
                        handleSubmit()
                    }
                    } className="btn btn-outline-secondary"> {t('contact.send')} </a>
                    </form> }
                    { formState === 'success' &&
                     <p>
                         {t('contact.success')}
                     </p>
                    }
                    { formState === 'error' &&
                    <p>
                        {t('contact.error')}
                    </p> }
                </div>
            </div>
            <a href="https://www.google.com/maps/place/%C3%96koheim,+Georgstra%C3%9Fe+38,+30159+Hannover,+Niemcy/@52.3727269,9.7389473,15z/data=!4m6!3m5!1s0x4906a7775b1de2e7:0xa9a3feb3867af2c6!8m2!3d52.3727269!4d9.7389473!16s%2Fg%2F11l327z6zp">
                <StaticGoogleMap size="430x430" className="img-fluid static-map" apiKey={MAPS_API_KEY}>
                        <Marker location="52.372989, 9.738915" color="blue" label={t('common.companyName')} />
                    </StaticGoogleMap>
                </a>
        </section>
    )
}
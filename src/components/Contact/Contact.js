import { useTranslation } from 'react-i18next';
import { useState } from "react";
import validator from 'validator';
import { isValidNumber, parsePhoneNumber } from 'libphonenumber-js';

import "./Contact.scss";

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
                message
            }).toString(),
        })
            .then(() => setFormState('success'))
            .catch((error) => setFormState('error'));
    };

    return (
        <section className="Contact">
            <div className="container">
                <iframe
                    title="Google Maps"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDnKUtBdy6dVQuvd5JTcZYai0njjRcZiA8&q=Zielna%2028b%2F4%2C%20Wroc%C5%82aw"
                    allowFullScreen>
                </iframe>
                <div>
                    <h2>{t('contact.Title')}</h2>

                    { formState === 'default' &&

                    <form id="contactForm" name="contact" data-netlify={true}>
                        <input type="hidden" name="form-name" value="contact" />
                    <div className="mb-3">
                        <label htmlFor="formEmail" className="form-label">{t('contact.Email')}</label>
                        <div className="input-group has-validation">
                            <input value={email} onChange={e => setEmail(e.currentTarget.value)} onBlur={() => {
                                if (email) {
                                    setErrorEmail(!validateEmail())
                                } else {
                                    setErrorEmail(false)
                                }
                            }
                            } type="email" placeholder={t('contact.EmailPlaceholder')} className={`${errorEmail ? 'is-invalid' : ''} form-control`} id="formEmail" />
                            { errorEmail && <div className="invalid-feedback">
                                {t('contact.ErrorEmailMessage')}
                            </div> }
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formPhone" className="form-label">{t('contact.Phone')}</label>
                        <div className="input-group has-validation">
                            <input value={phone} onChange={e => setPhone(e.currentTarget.value)} onBlur={() => {
                                if (phone) {
                                    setErrorPhone(!validatePhone())
                                } else {
                                    setErrorPhone(false)
                                }
                            }
                            } type="text" placeholder={t('contact.PhonePlaceholder')} className={`${errorPhone ? 'is-invalid' : ''} form-control`} id="formPhone" />
                            { errorPhone && <div className="invalid-feedback">
                                {t('contact.ErrorPhoneMessage')}
                            </div> }
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formMessage" className="form-label">{t('contact.Message')}</label>
                        <div className="input-group has-validation">
                            <textarea
                                onChange={e => setMessage(e.currentTarget.value)}
                                rows={3} placeholder={t('contact.MessagePlaceholder')}
                                className='form-control' id="formMessage">{ message }</textarea>
                        </div>
                    </div>

                    <a href="/contact" onClick={e => {
                        e.preventDefault()
                        if (!email && !phone) {
                            setErrorPhone(true);
                            return false;
                        }
                        handleSubmit()
                    }
                    } className="btn btn-outline-secondary"> {t('contact.Send')} </a>
                    </form> }
                    { formState === 'success' &&
                     <p>
                         {t('contact.Success')}
                     </p>
                    }

                    { formState === 'error' &&
                    <p>
                        {t('contact.Error')}
                    </p> }
                </div>
            </div>
        </section>
    )
}
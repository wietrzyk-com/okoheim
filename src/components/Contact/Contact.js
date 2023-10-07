import { useTranslation } from 'react-i18next';
import "./Contact.scss";

export default function Contact() {
    const { t } = useTranslation();
    return (
        <section className="Contact">
            <div className="container">
                <div>
                    // TODO: Map here
                </div>
                <div>
                    <h2>{t('contact.Title')}</h2>
                    <p>
                        TODO: Form here
                    </p>
                </div>
            </div>
        </section>
    )
}
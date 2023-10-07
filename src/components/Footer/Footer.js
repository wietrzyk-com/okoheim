import "./Footer.scss";
import logo from './logo.png';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation()
    return (
        <footer className>
            <div className="container">
                <div>
                    <img alt={t('common.companyName')} src={logo} />
                </div>
                <div>
                    <h6>{t('common.companyName')}</h6>
                    {t('common.companyAddress').split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                </div>

            </div>
        </footer>
    )
}
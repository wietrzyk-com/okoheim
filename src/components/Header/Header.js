import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from "../../gfx/logo_white.svg";
import { useTranslation } from 'react-i18next';
import "./Header.scss";

export default function Header () {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <header>
            <div className="container">
                <a onClick={() => navigate('/#top')}  href="#top">
                    <img src={logo} alt={t('common.companyName')} height="25" />
                </a>
                <h1>{t('common.companyName')}</h1>
                <ul>
                    <li><a onClick={() => navigate('/#uber-uns')} href="#uber-uns">{t('header.aboutUs')}</a></li>
                    <li><a onClick={() => navigate('/#angebot')} href="#angebot">{t('header.offer')}</a></li>
                    <li><a onClick={() => navigate('/#projekte')} href="#projekte">{t('header.projects')}</a></li>
                    <li><a onClick={() => navigate('/#kontakt')} href="#kontakt">{t('header.contact')}</a></li>
                </ul>
                <a onClick={() => navigate('/#kontakt')} href="#kontakt" className="btn btn-outline-secondary">{t('header.support')}</a>
            </div>
        </header>
    );
}
import React from "react";
import logo from "../gfx/logo_white.svg";
import { useTranslation } from 'react-i18next';
import "./Header.scss";

export default function Header () {
    const { t } = useTranslation();

    return (
        <header>
            <div className="container">
                <a href="/">
                    <img src={logo} alt={t('common.companyName')} height="25" />
                </a>
                <h1>{t('common.companyName')}</h1>
                <ul>
                    <li><a href="/uber-uns">{t('header.aboutUs')}</a></li>
                    <li><a href="/angebot">{t('header.offer')}</a></li>
                    <li><a href="/projekte">{t('header.projects')}</a></li>
                    <li><a href="/kontakt">{t('header.contact')}</a></li>
                </ul>
                <a href="/support" className="btn btn-outline-secondary">{t('header.support')}</a>
            </div>
        </header>
    );
}
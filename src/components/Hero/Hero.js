import React from "react";
import "./Hero.scss";
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

	return (
        <div id="Hero">
            <div className="container height">
                <div />
                <div>
                    <p className="display-3 w-50">{t("hero.slogan")}</p>
                    <p className="last">
                        <a className="btn btn-outline-primary btn-lg" href="/kontakt">{t("hero.contactUs")}</a>
                    </p>
                </div>
                <div className="arrow-container">
                    <div className="arrow-down" />
                </div>
            </div>
        </div>
    );
}
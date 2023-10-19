import React from "react";
import "./Hero.scss";
import { useTranslation } from 'react-i18next';
import {useNavigate} from "react-router-dom";

export default function Hero() {
    const { t } = useTranslation();
    const navigate = useNavigate();

	return (
        <div id="Hero">
            <div className="container height">
                <div />
                <div>
                    <p className="display-3 w-50">{t("hero.slogan")}</p>
                    <p className="last">
                        <a onClick={() => navigate("#kontakt")} className="btn btn-outline-primary btn-lg" href="#kontakt">{t("hero.contactUs")}</a>
                    </p>
                </div>
                <div className="arrow-container">
                    <div onClick={() => navigate("#uber-uns")} className="arrow-down" />
                </div>
            </div>
        </div>
    );
}
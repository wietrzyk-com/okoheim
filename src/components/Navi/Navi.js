import React,  {useState, useEffect} from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import './Navi.scss';

export default function Navi() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [navIsFixed, setNavIsFixed] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);


    useEffect(() => {

        const handleScroll = () => {
            const header = document.querySelector('#Header');
            const navigation = document.querySelector('#Navi');
            const naviFiller = document.querySelector("#NaviFiller");
    
           
            if (header && navigation) {
                const navigatationRect = navigation.getBoundingClientRect();
                const headerRect = header.getBoundingClientRect();
                if (navigatationRect.y < headerRect.height) {
                    navigation.classList.add('sticky');
                    navigation.style.top = headerRect.height + 'px';
                    naviFiller.style.height = navigatationRect.height + 'px';
                    setNavIsFixed(true);
                    setScrollPosition(window.scrollY);
                } 
    
                if (navIsFixed && window.scrollY < scrollPosition) {
                    setScrollPosition(0);
                    setNavIsFixed(false);
                    naviFiller.style.height = '0';
                    navigation.classList.remove('sticky');
                }
            }
          };

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [navIsFixed, scrollPosition]);
    
      
    

    return (
        <>
        <section id="NaviFiller" />
        <section id="Navi">
            <ul>
                <li>
                    <a onClick={() => navigate("/#top")} href="/#top">
                        {t("header.aboutUs")}
                    </a>
                </li>
                <li>
                    <a onClick={() => navigate("/#angebot")} href="/#angebot">
                        {t("header.offer")}
                    </a>
                </li>
                <li>
                    <a onClick={() => navigate("/#projekte")} href="/#projekte">
                        {t("header.projects")}
                    </a>
                </li>
                <li>
                    <a onClick={() => navigate("/zuschusse")} href="/zuschusse">
                        {t("header.subventions")}
                    </a>
                </li>
            </ul>
        </section> 
        </>   
    )
}
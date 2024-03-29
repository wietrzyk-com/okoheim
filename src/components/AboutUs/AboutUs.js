import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./AboutUs.scss";
import mainImage from "./mainImage.webp";
import image1 from "./image1.webp";
import image2 from "./image2.webp";
import image3 from "./image3.webp";
import timeline from "./timeline.webp";
import timelineV from "./timelineVertical.webp";
import aboutMeImage from "./aboutMeImage.webp";
import { Slide } from "react-awesome-reveal";

export default function AboutUs() {
  const { t } = useTranslation();
  const [aboutMeVisible, setAboutMeVisible] = useState(false);

  const allParagraphs = t("aboutUs.aboutMeText").split("\n");

  const firstParagraph = allParagraphs.shift();

  return (
    <section id="uber-uns" className="AboutUs">
      <div>
        <div className="container first">
          <div className="">
            <h2>{t("aboutUs.title")}</h2>
            {t("aboutUs.text")
              .split("\n")
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </div>
          <div>
            <img src={mainImage} alt={t("aboutUs.mainImageDescription")} />
          </div>
        </div>
      </div>
      <div>
        <div className="container last">
          <div>
            <img src={image1} alt={t("aboutUs.image1Description")} />
            <img src={image2} alt={t("aboutUs.image1Description")} />
            <img src={image3} alt={t("aboutUs.image1Description")} />
          </div>
        </div>
      </div>
      <div id="timeline">
        <div className="container">
          <h6>{t("aboutUs.timelineSubtitle")}</h6>
          <h2>{t("aboutUs.timelineTitle")}</h2>
          <img
            id="timelineImageDesktop"
            src={timeline}
            alt={t("aboutUs.timelineDescription")}
          />
          <img
            id="timelineImageMobile"
            src={timelineV}
            alt={t("aboutUs.timelineDescription")}
          />
        </div>
      </div>
      <div>
        <div className="container">
          <img src={aboutMeImage} alt={t("aboutUs.aboutMeImageDescription")} />
          <Slide direction="right" triggerOnce>
            <div>
              <h2>{t("aboutUs.aboutMeTitle")}</h2>
              <p>{firstParagraph}</p>
              {!aboutMeVisible && (
                <p id="showMore">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setAboutMeVisible(true);
                      return false;
                    }}
                    href="/#"
                  >
                    {t("aboutUs.showMore")} &raquo;
                  </a>
                </p>
              )}
              <div
                className={`restOfTheParagraphs ${
                  aboutMeVisible ? "visible" : ""
                }`}
              >
                {allParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from "react-i18next";
import howWeWorkImg from "./howWeWork.webp";
import "./HowWeWork.scss";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import howWeWorkImgV from "./HowWeWorkV.webp";

export default function HowWeWork() {
  const { t } = useTranslation();
  return (
    <>
    <section className="HowWeWork">
      <div className="container">
        <Slide direction="left" triggerOnce>
          <div>
            <h2 className="display-5">
              {t("howWeWork.title").replace(/&nbsp;/g, "\u00A0")}
            </h2>
          </div>
        </Slide>
        <Fade triggerOnce>
          <div>
            <img
              src={howWeWorkImg}
              alt={t("howWeWork.title").replace(/&nbsp;/g, "\u00A0")}
            />
          </div>
        </Fade>
      </div>
    </section>
    <section className="HowWeWorkMobile">
      <h2 className="display-5">
        {t("howWeWork.title").replace(/&nbsp;/g, "\u00A0")}
      </h2>
      <div className="images">
      <img
              className="img-fluid block"
              src={howWeWorkImgV}
              alt={t("howWeWork.title").replace(/&nbsp;/g, "\u00A0")}
            />
      </div>
    </section>
    </>
  );
}

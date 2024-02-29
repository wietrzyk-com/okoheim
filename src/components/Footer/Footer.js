import "./Footer.scss";
import logo from "./logo.webp";
import vaillantImg from "./vaillant.webp";
import teceImg from "./tece.webp";
import loxoneImg from "./loxone.webp";
import mitsubishiImg from "./mitsubishi.webp";
import facebookLogo from "./facebookLogo.webp";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { parsePhoneNumber } from "libphonenumber-js";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className>
      <div className="container">
        <div>
          <Fade triggerOnce delay={500}>
            <img id="footerLogo" alt={t("common.companyName")} src={logo} />
          </Fade>
          <p>
            <span className="name">{t("footer.person1Name")}</span>
            <br />
            <span className="education">{t("footer.person1Education")}</span>
            <br />
            <span className="position">{t("footer.person1Position")}</span>
            <br />
            <a href={`tel:${t("footer.person1Phone")}`}>
              {t("footer.person1Phone")}
            </a>
          </p>
          <p>
            <span className="name">{t("footer.contactInformation")}</span>
            <br />
            <a href={`tel:${t("footer.contactPhone")}`}>
              {t("footer.contactPhone")}
            </a>
          </p>
          <p>
            <a href={`mailto:${t("common.email")}`} className="email">
              {t("common.email")}
            </a>
          </p>
          <p>
            <a href="/datenschutzrichtlinie">Datenschutzrichtlinie</a>
          </p>
          <p>
            <a href="https://www.facebook.com/profile.php?id=61551334431039">
              <img src={facebookLogo} width={24} height={24} alt="Facebook" />
            </a>
          </p>
        </div>
        <div className="partners">
          <h5>{t("common.companyName")}</h5>
          {t("common.companyAddress")
            .split("\n")
            .map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          {t("common.companyAccounts")
            .split("\n")
            .map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

          <p>
            <a
              href={`tel:${
                parsePhoneNumber(t("common.companyPhone"), "DE").number
              }`}
            >
              {t("common.companyPhone")}
            </a>
          </p>
          <p>
            <a href={`mailto://${t("common.email")}`}>{t("common.email")}</a>
          </p>

          <h5>{t("footer.partnersTitle")}</h5>
          <div>
            <img src={mitsubishiImg} alt="Mitsubishi" />
            <img src={vaillantImg} alt="Vaillant" />
            <img src={loxoneImg} alt="Loxone" />
            <img src={teceImg} alt="TECE" />
          </div>
        </div>
      </div>
    </footer>
  );
}

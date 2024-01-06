import "./Privacypolicy.scss";
import { useTranslation } from "react-i18next";

export default function Privacypolicy() {
  const { t } = useTranslation();
  return (
    <section id="privacypolicy">
      <div className="container">
        <h1>Datenschutzrichtlinie</h1>
        <h2>1. Einleitung</h2>
        <p>
          Diese Datenschutzrichtlinie soll die Nutzer unserer Website über Art,
          Umfang und Zweck der Erhebung und Verwendung personenbezogener Daten
          durch {t("common.companyName")} informieren.
        </p>
        <h2>2. Datenverantwortlicher</h2>
        <p>
          Der Datenverantwortliche ist {t("common.companyName")},<br />
          {t("common.companyAddress")}, {t("common.email")},{" "}
          {t("common.companyPhone")}.
        </p>
        <h2>3. Personenbezogene Daten</h2>
        <p>
          Personenbezogene Daten sind alle Informationen, die sich auf eine
          identifizierte oder identifizierbare natürliche Person beziehen.
        </p>

        <h2>4. Datenerhebung</h2>
        <p>
          Wir sammeln personenbezogene Daten, wenn Sie: Unser Kontaktformular
          auf unserer Webseite ausfüllen (z.B. Name, E-Mail-Adresse). Unsere
          Webseite besuchen (z.B. IP-Adresse, Cookies).
        </p>
        <h2>5. Zweck der Verarbeitung</h2>
        <p>
          Die über das Kontaktformular gesammelten Daten werden ausschließlich
          dazu verwendet, um auf Ihre Anfrage zu antworten.
        </p>
        <h2>6. Speicherfrist</h2>
        <p>
          Daten werden nur so lange gespeichert, wie es notwendig ist, um den
          Zweck zu erreichen, für den sie gesammelt wurden, oder solange
          gesetzliche Vorschriften dies vorschreiben.
        </p>
        <h2>7. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Zugang, Berichtigung, Löschung oder
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das
          Recht, der Verarbeitung zu widersprechen und das Recht auf
          Datenübertragbarkeit.
        </p>
        <h2>8. Kontakt</h2>
        <p>
          Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten können Sie
          uns über die im Abschnitt "Datenverantwortlicher" angegebenen Daten
          kontaktieren.
        </p>
      </div>
    </section>
  );
}

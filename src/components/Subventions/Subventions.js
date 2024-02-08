import "./Subventions.scss";

import stamp1 from "./stamp1.webp";
import stamp2 from "./stamp2.webp";
import { useTranslation } from "react-i18next";
import subventionImage from "./subventions.png";

export default function Subventions() {
  const { t } = useTranslation();
  return (
    <>
      <section className="subventions grid">
        <div className="container">
          <div>
            <h2>Zuschusse</h2>
            <p className="lead">
              Wir wissen, dass die Investition in eine Wärmepumpe oder eine
              Photovoltaikanlage ein wichtiger Schritt in Ihrem Leben ist.
              Deshalb versuchen wir nicht nur, die effizientesten Geräte
              auszuwählen, sondern begleiten Sie auch durch den gesamten Prozess
              der Finanzierung, damit Ihre Investition sowohl umweltfreundlich
              als auch so wirtschaftlich wie möglich ist.
            </p>
            <p>
              Wir führen das gesamte Verfahren zur Gewinnung von Fördermitteln
              persönlich in Ihrem Namen durch. Während des Prozesses bereiten
              wir die von den Bewilligungsbehörden geforderten Unterlagen vor.
              Sie müssen dann nur noch die Rückzahlung der bewilligten Mittel
              abwarten.
            </p>
            <p>In Ihrem Namen</p>
            <ul>
              <li>beantragen wir Fördermittel.</li>
              <li>beantworten wir Fragen der Behörden.</li>
              <li>
                reichen wir die für die Bewilligung erforderlichen Unterlagen
                ein.
              </li>
            </ul>
            <p>
              Nach der endgültigen Bewilligung des Zuschusses überweist die
              Behörde die Mittel innerhalb von 14 Tagen nach der Bewilligung auf
              Ihr Konto zurück.
            </p>
          </div>

          <div>
            <img
              src={stamp1}
              className="img-fluid"
              alt={t("subventions.warranty1")}
            />
            <img
              src={stamp2}
              className="img-fluid"
              alt={t("subventions.warranty2")}
            />
          </div>
        </div>
      </section>
      <div id="subventionImage">
        <div className="container">
          <img src={subventionImage} alt={t("aboutUs.timelineDescription")} />
        </div>
      </div>
      <section className="subventions">
        <div className="container">
          <p className="lead">
            Insgesamt ist die Förderung ab 2024 laut KfW auf maximal{" "}
            <strong>70 %</strong> der Gesamtkosten gedeckelt. Die maximal
            förderfähige Investitionssumme beträgt <strong>30.000 €</strong> für
            ein Einfamilienhaus (1. Wohneinheit).
          </p>
          <p>
            Der höchstmögliche Zuschuss für den Heizungstausch beläuft sich also
            – bei einem Fördersatz von <strong>70 %</strong> – auf{" "}
            <strong>21.000 €</strong>.
          </p>
          <p>Die Höhe der individuellen Förderungen:</p>
          <ul>
            <li>
              <strong>30 % Basisförderung</strong> für alle Wärmepumpen
            </li>
            <li>
              <strong>20 % Klimageschwindigkeitsbonus</strong>
              für den Austausch von funktionsfähigen
            </li>
          </ul>
          <p>
            Heizungen: Öl, Kohle, Gasetage oder Nachtspeicher jeden Alters oder
            für den Austausch von funktionsfähigen Gas- oder Biomasseheizungen,
            die älter als 20 Jahre sind. Der Bonus in Höhe von 20% ist befristet
            bis 2028 – danach reduziert er sich jährlich.
          </p>
          <ul>
            <li>
              <strong>30 % Einkommensbonus</strong>
              für selbstnutzende Wohneigentümer bis max. 40.000 € zu
              versteuerndes für förderfähige Heizungsanlagen.
            </li>
            <li>
              <strong>5 % Effizienzbonus</strong> für Wärmepumpen mit der
              Nutzung der Wärmequelle Wasser, Erdreich oder Abwasser oder eines
              natürlichen Kältemittels.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

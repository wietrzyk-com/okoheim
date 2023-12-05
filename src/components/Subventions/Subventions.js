import "./Subventions.scss";

import stamp1 from './stamp1.webp';
import stamp2 from './stamp2.webp';
import {useTranslation} from "react-i18next";

export default function Subventions() {
    const { t } = useTranslation()
    return (
        <section id="subventions">
            <div className="container">
                <div>
                    <h2>Zuschusse</h2>
                    <p className="lead">
                        Wir wissen, dass die Investition in eine Wärmepumpe oder eine Photovoltaikanlage ein
                        wichtiger Schritt in Ihrem Leben ist. Deshalb versuchen wir nicht nur, die effizientesten
                        Geräte auszuwählen, sondern begleiten Sie auch durch den gesamten Prozess der
                        Finanzierung, damit Ihre Investition sowohl umweltfreundlich als auch so wirtschaftlich wie
                        möglich ist.
                    </p>
                    <p>
                        Wir führen das gesamte Verfahren zur Gewinnung von Fördermitteln persönlich in Ihrem
                        Namen durch. Während des Prozesses bereiten wir die von den Bewilligungsbehörden
                        geforderten Unterlagen vor. Sie müssen dann nur noch die Rückzahlung der bewilligten
                        Mittel abwarten.
                    </p>
                    <p>
                        In Ihrem Namen
                    </p>
                    <ul><li>beantragen wir Fördermittel.
                    </li><li>beantworten wir Fragen der Behörden.
                    </li><li>reichen wir die für die Bewilligung erforderlichen Unterlagen ein.</li>
                    </ul>
                    <p>
                        Nach der endgültigen Bewilligung des Zuschusses überweist die Behörde die Mittel
                        innerhalb von 14 Tagen nach der Bewilligung auf Ihr Konto zurück.
                    </p>
                </div>
                <div>
                    <img src={stamp1} className="img-fluid" alt={t('subventions.warranty1')} />
                    <img src={stamp2} className="img-fluid" alt={t('subventions.warranty2')} />
                </div>
            </div>
        </section>
    )
}
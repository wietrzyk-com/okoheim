import OfferCommon from "../OfferCommon";

export default function OfferVaillant() {
  return (
    <section id="offerItem">
      <div className="container">
        <OfferCommon logo={require("../../Footer/vaillant.webp")} />
        <div className="">
          <h3>
            Vaillant aroTHERM split und aro THERMPLUS Luft/Wasser-Wärmepumpe
          </h3>
          <h4>Ideal für die klimabewusste Modernisierung</h4>
          <ul>
            <li>Leistungsspektrum: 3,5-12 kW</li>
            <li>Platzsparend außen aufgestellt, modernes Design</li>
            <li>Leiser Betrieb – stört weder Sie noch Ihre Nachbarn</li>
            <li>Smarte Bedienung, auf Wunsch auch per App</li>
            <li>Auch für den Neubau geeignet</li>
            <li>Besonders wirtschaftlich mit Photovoltaik</li>
            <li>Kältemittel R32, R290</li>
            <li>Energieklasse A++/A+++</li>
          </ul>
          <p>
            Vaillant Split-Wärmepumpen, wie die aroTHERM-Modelle, zeichnen sich
            durch mehrere Merkmale aus:
          </p>
          <ol>
            <li>
              Effizienz. Vaillant Wärmepumpen sind für ihre hohe Leistung und
              Energieeffizienz bekannt, was sich in Einsparungen bei den
              Heizkosten niederschlagen kann.
            </li>
            <li>
              {" "}
              iQ-Technologie. Vaillant verwendet die fortschrittliche Green
              iQ-Technologie, die die Wärmepumpe mit anderen Heizsystemen
              integriert und ein intelligentes Energiemanagement ermöglicht.
            </li>
            <li>
              {" "}
              Leiser Betrieb: Vaillant Modelle bieten oft einen leisen Betrieb,
              was für den Benutzerkomfort wichtig ist.
            </li>
            <li>
              {" "}
              Einfache Bedienung: Vaillant bemüht sich um eine intuitive
              Bedienung seiner Wärmepumpen, so dass das System einfach zu
              bedienen ist.
            </li>
            <li>
              {" "}
              Hohe Qualität: Vaillant ist ein seriöses Unternehmen, was
              bedeutet, dass seine Produkte sorgfältig entwickelt und
              hergestellt werden.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

import diagramImage from './diagramImage.jpeg';

export default function OfferCommon({ logo }) {
    return (
        <>
            <div className="OfferCommon">
                <div>
                    <h2>Wärmepumpe</h2>
                    <p className="lead">
                        Umweltfreundliche Wärmequelle, kein CO2-Fußabdruck, kein Schornstein,
                        keine Wartung, kein Heizen und Kühlen in einem Gerät.
                    </p>
                    <p>
                        Eine Luft/Wasser-Wärmepumpe ist ein Gerät, das die in der Außenluft enthaltene
                        Wärmeenergie nutzt, um Wasser oder Räume zu heizen. Sie wandelt die Wärme aus der
                        Außenluft in Wärme um, die zum Beheizen von Wasser oder Luft für die Zentralheizung
                        genutzt werden kann.
                    </p>
                    <p>
                        Die derzeit für die Beheizung von Einfamilienhäusern eingesetzten Wärmepumpen
                        unterscheiden sich in erster Linie durch die Art der Energiegewinnung. Die Wärmepumpe ist
                        die Komponente der Gesamtanlage, die für die Gewinnung erneuerbarer Energie aus der
                        Luft, dem Boden oder dem Wasser zuständig ist. Dies wirkt sich letztlich auf den Preis der
                        gesamten Heizungsanlage, den Preis der Installation und die Effizienz der Wärmepumpe
                        aus und hat Einfluss auf die jährlichen Kosten für die Beheizung des Gebäudes aus.
                        Deshalb ist es besonders auf lange Sicht wichtig, eine geeignete Wärmepumpe mit hoher
                        Zuverlässigkeit zu wählen. Darüber hinaus sind die Qualität der bei der Installation
                        verwendeten Materialien, der Durchmesser der Rohre sowie die Leistung der Wärmepumpe
                        selbst von Bedeutung.
                    </p>
                    <p>
                        Eine zu geringe Leistung führt dazu, dass der Zuheizer häufiger anspringt, wodurch viel
                        Strom verbraucht wird, während eine Überdimensionierung der Wärmepumpe dazu führen
                        kann, dass der Kompressor zu oft anspringt, sodass die Lebensdauer des Herzstücks des
                        Systems – der Kompressor – verkürzt wird.
                    </p>
                    <h3>Firmen</h3>
                    <p>
                        Wir arbeiten seit vielen Jahren mit mehreren Herstellern zusammen. Aufgrund unserer
                        Erfahrung sind wir davon überzeugt, Ihnen Wärmepumpen von höchster Qualität mit einem
                        hohen Maß an Fehlerfreiheit zu präsentieren.
                    </p>
                    <p>
                        Ein richtig ausgewähltes Gerät ist für Sie sowohl eine Garantie für Sicherheit als auch für
                        eine hohe Energieeffizienz. Diese Geräteklasse wählt aufgrund der verwendeten Steuerlogik
                        die geeignete Vorlauftemperatur entsprechend den aktuellen äußeren Bedingungen,
                        wodurch das gesamte System für Sie wartungsfrei ist.
                    </p>
                </div>
                <div>
                    <img className="img-fluid" src={logo} alt="Mitsubishi" />
                    <img className="img-fluid" src={diagramImage} alt="Warmepumpe diagram" />
                </div>
            </div>


        </>
    )
}
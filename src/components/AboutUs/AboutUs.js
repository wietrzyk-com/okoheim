import { useTranslation } from 'react-i18next';
import './AboutUs.scss';
import mainImage from './mainImage.png'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import timeline from './timeline.png'
import aboutMeImage from './aboutMeImage.png'
import { Slide } from "react-awesome-reveal";

export default function AboutUs (
    ) {
    const { t } = useTranslation()
    return (
        <section id="uber-uns" className="AboutUs">
            <div>
                <div className="container first">
                    <div className="">
                        <h2>{t('aboutUs.title')}</h2>
                        {t('aboutUs.text').split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                    </div>
                    <div>
                        <img src={mainImage} alt={t('aboutUs.mainImageDescription')}/>
                    </div>

                </div>
            </div>
            <div>
                <div className="container last">
                    <div>
                        <img src={image1} alt={t('aboutUs.image1Description')}/>
                        <img src={image2} alt={t('aboutUs.image1Description')}/>
                        <img src={image3} alt={t('aboutUs.image1Description')}/>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <h6>
                        {t('aboutUs.timelineSubtitle')}
                    </h6>
                    <h2>
                        {t('aboutUs.timelineTitle')}
                    </h2>
                    <img src={timeline} alt={t('aboutUs.timelineDescription')} />
                </div>
            </div>
            <div>
                <div className="container">
                    <img src={aboutMeImage} alt={t('aboutUs.aboutMeImageDescription')} />
                    <Slide direction="right" triggerOnce>
                        <div>
                            <h2>
                                {t('aboutUs.aboutMeTitle')}
                            </h2>
                            {t('aboutUs.aboutMeText').split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
}
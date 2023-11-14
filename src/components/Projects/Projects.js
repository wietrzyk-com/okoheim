import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "./Projects.scss";
import { useTranslation } from "react-i18next";

import authorPhoto from './author.png';

import image1_1 from './1.1.png';
import image1_2 from './1.2.png';

import image2_1 from './2.1.png';
import image2_2 from './2.2.png';

import image3_1 from './3.1.png';
import image3_2 from './3.2.png';

import image4_1 from './4.1.png';
import image4_2 from './4.2.png';

import image5_1 from './5.1.png';
import image5_2 from './5.2.png';

import image6_1 from './6.1.png';
import image6_2 from './6.2.png';

const image = [
    [image1_1, image1_2],
    [image2_1, image2_2],
    [image3_1, image3_2],
    [image4_1, image4_2],
    [image5_1, image5_2],
    [image6_1, image6_2]
];


function Project ({ images, testimonial, author, address, stars }) {
    return (
        <div className="project">
            {images.map((image, index) => (
                <img src={image} alt="" key={index} />
            ))}
            <div className="description">
                <address><i className="fas fa-map-marker-alt"></i> {address}</address>
                <div className="testimony">
                    <div className="author-container">
                        <img src={authorPhoto} alt="" />
                    </div>
                    <div>
                        <h4>{author}</h4>
                        <p>&bdquo;{testimonial.split('\n').join('<br />')}&ldquo;</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default function Projects() {
    const { t } = useTranslation();
    return (
        <section id="projekte">
            <div className="container">
            <h2>{t('projects.title')}</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
            >
                {[1,2,3,4,5,6].map(i => (
                    <SwiperSlide>
                        <Project address={t(`projects.project${i}.address`)}
                                 author={t(`projects.project${i}.author`)}
                                 authorPhoto={authorPhoto[i-1]} testimonial={t(`projects.project${i}.testimonial`)}
                                 images={image[i-1]} stars={t(`projects.project${i}.stars`)} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </section>
    )
}
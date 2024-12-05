import React from 'react';
import './AboutPage.scss';
import { ABOUT, ABOUT_DESCRIPTION } from '../shared/lib/consts.ts';

const AboutPage: React.FC = () => {
  const photos = [
    { id: 1, src: '/grandma/grandma1.jpg', alt: 'Бабушка за работой' },
    { id: 2, src: '/grandma/grandma1.jpg', alt: 'На природе' },
    { id: 3, src: '/grandma/grandma1.jpg', alt: 'В мастерской' },
  ];

  return (
    <div className="about-page">
      <h1 className="about-page__title">{ABOUT}</h1>
      <p className="about-page__text">{ABOUT_DESCRIPTION}</p>
      <div className="about-page__photos">
        {photos.map((photo) => (
          <div key={photo.id} className="about-page__photo-wrapper">
            <img
              src={photo.src}
              alt={photo.alt}
              className="about-page__photo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

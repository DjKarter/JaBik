import React from 'react';
import './AboutPage.scss';

const AboutPage: React.FC = () => {
  const photos = [
    { id: 1, src: '/assets/grandma1.jpg', alt: 'Бабушка за работой' },
    { id: 2, src: '/assets/grandma2.jpg', alt: 'На природе' },
    { id: 3, src: '/assets/grandma3.jpg', alt: 'В мастерской' },
  ];

  return (
    <div className="about-page">
      <h1 className="about-page__title">О художнике</h1>
      <p className="about-page__text">
        Наша художница — талантливая бабушка, которая всю свою жизнь посвятила
        искусству. Она начала рисовать еще в детстве, и с тех пор ее картины
        вдохновляют и радуют людей. Ее работы отличаются глубокими эмоциями,
        уникальным стилем и любовью к деталям.
      </p>
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

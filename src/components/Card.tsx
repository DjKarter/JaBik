import React, { useState } from 'react';
import './Card.scss';

interface CardProps {
  title: string;
  year: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, year, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card__image"
        onClick={openModal}
      />
      <div className="card__info">
        <h3 className="card__title">{title}</h3>
        <p className="card__year">{year}</p>
      </div>

      {isModalOpen && (
        <div className="card__modal" onClick={closeModal}>
          <div
            className="card__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="card__modal-close" onClick={closeModal}>
              ×
            </button>
            <img src={image} alt={title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

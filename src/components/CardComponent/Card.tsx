import React, { useCallback, useEffect, useState } from 'react';
import './Card.scss';
import { CardProps } from '../../shared/lib/types.ts';

const Card: React.FC<CardProps> = ({ index, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);
  const [tempIndex, setTempIndex] = useState(index);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }, [images.length]);

  const handleArrowsEvent = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'ArrowLeft') {
        goToPrevious();
      }
    },
    [goToNext, goToPrevious],
  );

  useEffect(() => {
    if (isModalOpen) {
      setTempIndex(currentIndex);
      window.addEventListener('keydown', handleArrowsEvent);
    }
    return () => {
      if (isModalOpen) {
        setCurrentIndex(tempIndex);
      }
      window.removeEventListener('keydown', handleArrowsEvent);
    };
  }, [handleArrowsEvent, isModalOpen]);

  return (
    <div className="card">
      <img
        src={images[index]?.image}
        alt={images[index]?.title}
        className="card__image"
        onClick={openModal}
      />
      <div className="card__info">
        <h3 className="card__title">{images[index]?.title}</h3>
        <p className="card__year">{images[index]?.year}</p>
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
            <img
              src={images[currentIndex]?.image}
              alt={images[currentIndex]?.title}
            />
            <button
              className="card__modal-arrow card__modal-arrow--left"
              onClick={goToPrevious}
            >
              ‹
            </button>
            <button
              className="card__modal-arrow card__modal-arrow--right"
              onClick={goToNext}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

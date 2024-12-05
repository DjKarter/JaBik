import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../shared/store/store.ts';
import './ArtworkPage.scss';

const ArtworkPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = useSelector((state: RootState) =>
    state.artworks.list.find((art) => art.id === Number(id)),
  );

  if (!artwork) {
    return <div className="artwork-page">Картина не найдена</div>;
  }

  return (
    <div className="artwork-page">
      <img
        src={artwork.image}
        alt={artwork.title}
        className="artwork-page__image"
      />
      <div className="artwork-page__details">
        <h1>{artwork.title}</h1>
        <p>Год создания: {artwork.year}</p>
        {artwork.description && <p>{artwork.description}</p>}
        <button className="artwork-page__order-button">
          <Link to="/order">Заказать картину</Link>
        </button>
      </div>
    </div>
  );
};

export default ArtworkPage;

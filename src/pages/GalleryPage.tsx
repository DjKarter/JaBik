import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../shared/store/store.ts';
import { selectFilteredArtworks } from '../shared/store/artworksSlice.ts';
import Card from '../components/CardComponent/Card.tsx';
import './GalleryPage.scss';
import { Filter } from '../components/FilterComponent/Filter.tsx';

const GalleryPage: React.FC = () => {
  const filteredArtworks = useSelector((state: RootState) =>
    selectFilteredArtworks(state.artworks),
  );

  return (
    <div>
      <Filter />
      <div className="gallery">
        {filteredArtworks.map((_art, index) => (
          <Card key={index} index={index} images={filteredArtworks} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;

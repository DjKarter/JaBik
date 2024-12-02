import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../features/store';
import {
  setSearchFilter,
  setYearFilter,
  selectFilteredArtworks,
} from '../features/artworksSlice';
import Card from '../components/Card';
import './GalleryPage.scss';

const GalleryPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const filteredArtworks = useSelector((state: RootState) =>
    selectFilteredArtworks(state.artworks),
  );
  const filters = useSelector((state: RootState) => state.artworks.filters);

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Поиск по названию"
          value={filters.search}
          onChange={(e) => dispatch(setSearchFilter(e.target.value))}
        />
        <input
          type="number"
          placeholder="Год создания"
          value={filters.year}
          onChange={(e) => dispatch(setYearFilter(e.target.value))}
        />
      </div>
      <div className="gallery">
        {filteredArtworks.map((art) => (
          <Card key={art.id} index={art.id} images={filteredArtworks} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;

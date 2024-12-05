import React from 'react';
import {
  setSearchFilter,
  setYearFilter,
} from '../../shared/store/artworksSlice.ts';
import { AppDispatch, RootState } from '../../shared/store/store.ts';
import { useDispatch, useSelector } from 'react-redux';

export const Filter: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.artworks.filters);
  return (
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
  );
};

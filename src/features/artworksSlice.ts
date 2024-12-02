import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import p1 from '../../../../../Downloads/JaBik-main/src/assets/download.jpg';

export interface Artwork {
  id: number;
  title: string;
  image: string;
  year: number;
  description?: string;
}

interface FilterState {
  search: string;
  year: string; // Храним год как строку для удобства обработки пустого значения
}

interface ArtworksState {
  list: Artwork[];
  filters: FilterState;
}

const initialState: ArtworksState = {
  list: [
    { id: 1, title: 'Картина 1', image: p1, year: 2021 },
    { id: 2, title: 'Картина 2', image: '/assets/art2.jpg', year: 2019 },
    { id: 3, title: 'Картина 3', image: '/assets/art3.jpg', year: 2020 },
  ],
  filters: {
    search: '',
    year: '',
  },
};

const artworksSlice = createSlice({
  name: 'artworks',
  initialState,
  reducers: {
    setSearchFilter(state, action: PayloadAction<string>) {
      state.filters.search = action.payload;
    },
    setYearFilter(state, action: PayloadAction<string>) {
      state.filters.year = action.payload;
    },
  },
  //extraReducers: {},
});

export const { setSearchFilter, setYearFilter } = artworksSlice.actions;

export const selectFilteredArtworks = (state: ArtworksState) => {
  const { list, filters } = state;
  return list.filter((artwork) => {
    const matchesSearch = artwork.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesYear = filters.year
      ? artwork.year.toString() === filters.year
      : true;
    return matchesSearch && matchesYear;
  });
};

export default artworksSlice.reducer;

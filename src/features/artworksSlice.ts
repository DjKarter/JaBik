import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const images = import.meta.glob('/public/assets/*.{jpg,jpeg,png,gif,webp}');

const artworks: Artwork[] = Object.keys(images).map((path, index) => {
  const fileName = path.split('/').pop(); // Извлекаем имя файла
  const title = fileName?.split('.')[0] || ''; // Например, название может быть в формате "title_year.extension"

  console.log(path);

  return {
    id: index,
    title: title || `Artwork ${index + 1}`, // Если не удалось извлечь название
    year: 2024, // Год без расширения
    image: '/assets/' + title + '.jpg', // Корректируем путь
  };
});

const initialState: ArtworksState = {
  list: artworks,
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

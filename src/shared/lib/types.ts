export interface CardProps {
  index: number;
  images: Artwork[];
}

export interface Artwork {
  id: number;
  title: string;
  image: string;
  year: number;
  description?: string;
}

export interface FilterState {
  search: string;
  year: string; // Храним год как строку для удобства обработки пустого значения
}

export interface ArtworksState {
  list: Artwork[];
  filters: FilterState;
}
export interface CustomSelectProps {
  artworks: Artwork[];
  onSelect: (id: string) => void;
}

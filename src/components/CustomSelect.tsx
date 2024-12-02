import React, { useState } from 'react';
import { Artwork } from '../features/artworksSlice';
import './CustomSelect.scss';

interface CustomSelectProps {
  artworks: Artwork[];
  onSelect: (id: string) => void;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  artworks,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const handleSelect = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    onSelect(artwork.id.toString());
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div
        className="custom-select__selected"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedArtwork ? (
          <>
            <img src={selectedArtwork.image} alt={selectedArtwork.title} />
            <span>
              {selectedArtwork.title} ({selectedArtwork.year})
            </span>
          </>
        ) : (
          <span>Выберите картину для ориентира</span>
        )}
      </div>

      {isOpen && (
        <div className="custom-select__dropdown">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="custom-select__option"
              onClick={() => handleSelect(artwork)}
            >
              <img src={artwork.image} alt={artwork.title} />
              <span>
                {artwork.title} ({artwork.year})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

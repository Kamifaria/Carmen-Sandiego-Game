import React, { useState, useEffect } from "react";
import {
  SearchContainer,
  ImageContainer,
  SearchImage,
  NameList,
  NameItem,
} from "./SearchOptions.styles";

interface Place {
  name: string;
  image: string;
}

interface PlaceGroups {
  [group: string]: Place[];
}

interface CountryGroups {
  [group: string]: string[];
}

interface SearchOptionsProps {
  currentCountry: string;
  onSearch: (placeName: string) => void;
}

const placeGroups: PlaceGroups = {
  Group1: [
    { name: "Mercado", image: "https://static.vecteezy.com/system/resources/previews/018/741/694/original/isometric-supermarket-store-building-isolated-png.png" },
    { name: "Porto", image: "https://png.pngtree.com/png-vector/20220725/ourmid/pngtree-isometric-seaport-cargo-service-png-image_6072367.png" },
    { name: "Delegacia", image: "https://i.pinimg.com/originals/45/26/f7/4526f7a68eef0a5220cff5cd90a84745.png" },
  ],
  Group2: [
    { name: "Cinema", image: "https://png.pngtree.com/png-clipart/20230815/original/pngtree-isometric-room-interior-with-modern-home-theater-and-comfortable-armchairs-on-white-background-3d-vector-illustration-picture-image_7957663.png" },
    { name: "Cassino", image: "https://w7.pngwing.com/pngs/6/811/png-transparent-artist-building-concept-art-building.png" },
    { name: "Prisão", image: "https://i.pinimg.com/564x/3d/1b/27/3d1b2730bd1ef2001a6a8036da0c4834.jpg" },
  ],
  Group3: [
    { name: "Praia", image: "https://png.pngtree.com/png-vector/20240129/ourmid/pngtree-3d-realistic-isometric-illustration-of-summer-beach-ai-generated-png-image_11566519.png" },
    { name: "Porto", image: "https://png.pngtree.com/png-vector/20220725/ourmid/pngtree-isometric-seaport-cargo-service-png-image_6072367.png" },
    { name: "Museu", image: "https://i.pinimg.com/564x/2e/b6/42/2eb6420e84a0409a9dcfaeb92f60b058.jpg" },
  ],
};

const countryGroups: CountryGroups = {
  Group1: ["TORONTO", "NOVA YORK", "BERLIM", "ROTERDÃ", "PRETÓRIA", "MOSCOU", "SEUL", "TÓQUIO"],
  Group2: ["BANGU", "GUADALAJARA", "BOGOTÁ", "LIMA", "PARIS", "KIGALI", "CAIRO", "NOVA DELHI"],
  Group3: ["HAVANA", "ROMA", "LONDRES", "ATENAS", "RABAT", "DUBAI", "HONG KONG", "PEQUIM", "MELBOURNE"],
};

const getGroupByCountry = (country: string): string | undefined => {
  for (const group in countryGroups) {
    if (countryGroups[group].includes(country)) return group;
  }
  return undefined;
};



const SearchOptions: React.FC<SearchOptionsProps> = ({ currentCountry, onSearch }) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const groupKey = getGroupByCountry(currentCountry);
  const options = groupKey ? placeGroups[groupKey] : [];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : prev));
      } else if (event.key === "ArrowUp") {
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [options.length]);

  const handleItemClick = (index: number, placeName: string) => {
    setFocusedIndex(index);
    onSearch(placeName);
  };

  return (
    <SearchContainer>
      <ImageContainer>
        {options.map((option, index) => (
          <SearchImage
            key={option.name}
            src={option.image}
            alt={option.name}
            index={index}
            onClick={() => handleItemClick(index, option.name)}
          />
        ))}
      </ImageContainer>
      <NameList>
        {options.map((option, index) => (
          <NameItem
            key={option.name}
            onClick={() => handleItemClick(index, option.name)}
            isFocused={index === focusedIndex}
          >
            {option.name}
          </NameItem>
        ))}
      </NameList>
    </SearchContainer>
  );
};

export default SearchOptions;

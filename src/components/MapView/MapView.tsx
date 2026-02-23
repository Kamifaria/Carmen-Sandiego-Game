// MapView.tsx
import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  MapImage,
  CityButton,
  CityName,
  Line
} from './MapView.styles';
import { isLeftPosition, LocationData, locationsData } from '../../utils/localUtils';

interface MapViewProps {
  selectedCity: string | null;
  currentLocation: LocationData;
  onCitySelect: (city: string) => void;
}

const MapView: React.FC<MapViewProps> = ({ selectedCity, currentLocation, onCitySelect }) => {
  const [line, setLine] = useState<{ startX: number, startY: number, endX: number, endY: number } | null>(null);

  useEffect(() => {
    if (currentLocation) {
      const startCity = locationsData.find(cityObj => cityObj.name === currentLocation.name);
      if (startCity) {
        setLine({
          startX: startCity.left,
          startY: startCity.top,
          endX: startCity.left,
          endY: startCity.top,
        });
      }
    }
  }, [currentLocation]);

  const handleCitySelect = (city: string) => {
    onCitySelect(city);
    const startCity = locationsData.find(cityObj => cityObj.name === currentLocation.name);
    const endCity = locationsData.find(cityObj => cityObj.name === city);

    if (startCity && endCity) {
      setLine({
        startX: startCity.left,
        startY: startCity.top,
        endX: endCity.left,
        endY: endCity.top,
      });
    }
  };

  return (
    <MapContainer>
      <MapImage src="https://img.freepik.com/vetores-gratis/contorno-de-mapa-mundial-em-fundo-preto_1017-46153.jpg" alt="Mapa Mundi" />
      {locationsData.map(city => (
        <React.Fragment key={city.name}>
          <CityButton
            top={city.top}
            left={city.left}
            onClick={() => handleCitySelect(city.name)}
          >
            <span style={{
              display: 'block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'red',
            }} />
            <CityName leftPosition={isLeftPosition(city.name)}>{city.name}</CityName>
          </CityButton>
        </React.Fragment>
      ))}
      {line && (
        <Line
          startX={line.startX}
          startY={line.startY}
          endX={line.endX}
          endY={line.endY}
        />
      )}
    </MapContainer>
  );
};

export default MapView;

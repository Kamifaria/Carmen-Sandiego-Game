import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  MapImage,
  CityButton,
  CityName,
  Line,
  PlaneIcon
} from './MapView.styles';
import { isLeftPosition, LocationData, locationsData } from '../../utils/localUtils';

interface MapViewProps {
  selectedCity: string | null;
  currentLocation: LocationData;
  onCitySelect: (city: string) => void;
}

const MapView: React.FC<MapViewProps> = ({ selectedCity, currentLocation, onCitySelect }) => {
  const [line, setLine] = useState<{ startX: number, startY: number, endX: number, endY: number } | null>(null);
  
  // Animation states
  const [planePos, setPlanePos] = useState<{ x: number, y: number, angle: number } | null>(null);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    if (currentLocation && !isFlying) {
      const startCity = locationsData.find(cityObj => cityObj.name === currentLocation.name);
      if (startCity) {
        setPlanePos({ x: startCity.left, y: startCity.top, angle: 0 });
      }
    }
  }, [currentLocation, isFlying]);

  const handleCitySelect = (city: string) => {
    if (isFlying) return; // Prevent double click

    const startCity = locationsData.find(cityObj => cityObj.name === currentLocation.name);
    const endCity = locationsData.find(cityObj => cityObj.name === city);

    if (startCity && endCity) {
      setIsFlying(true);
      
      // Calculate angle for the airplane to point to destination
      // Adding Math.PI/4 (45deg) because most airplane icons point to top-right diagonally by default!
      const angle = Math.atan2(endCity.top - startCity.top, endCity.left - startCity.left) + (Math.PI / 4);

      setLine({
        startX: startCity.left,
        startY: startCity.top,
        endX: endCity.left,
        endY: endCity.top,
      });

      // Prepare airplane base rotation instantly
      setPlanePos({ x: startCity.left, y: startCity.top, angle: angle });

      // In the next tick, change coordinates to trigger CSS transition
      setTimeout(() => {
        setPlanePos({ x: endCity.left, y: endCity.top, angle: angle });
      }, 50);

      // Wait for flight CSS animation (2s) to finish before notifying parent
      setTimeout(() => {
        setIsFlying(false);
        setLine(null);
        onCitySelect(city);
      }, 2050);
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
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: currentLocation.name === city.name ? 'yellow' : 'red',
              boxShadow: currentLocation.name === city.name ? '0 0 10px yellow' : 'none'
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

      {planePos && (
        <PlaneIcon 
          angle={planePos.angle} 
          style={{ top: planePos.y, left: planePos.x }} 
        />
      )}
    </MapContainer>
  );
};

export default MapView;

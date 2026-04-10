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

const DESIGN_WIDTH = 1300;
const DESIGN_HEIGHT = 720;

const toPct = (val: number, base: number) => (val / base) * 100;

const MapView: React.FC<MapViewProps> = ({ currentLocation, onCitySelect }) => {
  const [line, setLine] = useState<{ startX: number; startY: number; endX: number; endY: number } | null>(null);
  const [planePos, setPlanePos] = useState<{ x: number; y: number; angle: number } | null>(null);
  const [isFlying, setIsFlying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // Place plane at current city on load / city change
  useEffect(() => {
    if (!isFlying) {
      const city = locationsData.find(c => c.name === currentLocation.name);
      if (city) {
        setPlanePos({ 
          x: toPct(city.left, DESIGN_WIDTH), 
          y: toPct(city.top, DESIGN_HEIGHT), 
          angle: 0 
        });
      }
    }
  }, [currentLocation, isFlying]);

  const handleCitySelect = (cityName: string) => {
    if (isFlying) return;
    if (cityName === currentLocation.name) return; // can't go to same city

    const start = locationsData.find(c => c.name === currentLocation.name);
    const end = locationsData.find(c => c.name === cityName);
    if (!start || !end) return;

    setIsFlying(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    // Angle: atan2 of direction + 45° because emoji ✈ naturally points NE
    const angle = Math.atan2(end.top - start.top, end.left - start.left) + Math.PI / 4;

    const sX = toPct(start.left, DESIGN_WIDTH);
    const sY = toPct(start.top, DESIGN_HEIGHT);
    const eX = toPct(end.left, DESIGN_WIDTH);
    const eY = toPct(end.top, DESIGN_HEIGHT);

    setLine({ startX: sX, startY: sY, endX: eX, endY: eY });
    setPlanePos({ x: sX, y: sY, angle });

    // Kick off CSS transition
    requestAnimationFrame(() => {
      setTimeout(() => {
        setPlanePos({ x: eX, y: eY, angle });
      }, 80);
    });

    // After flight finishes notify parent
    setTimeout(() => {
      setIsFlying(false);
      setLine(null);
      onCitySelect(cityName);
    }, 2100);
  };

  return (
    <MapContainer>
      <audio ref={audioRef} src="https://actions.google.com/sounds/v1/transportation/airplane_flyby.ogg" preload="auto" />
      <MapImage
        src="https://img.freepik.com/vetores-gratis/contorno-de-mapa-mundial-em-fundo-preto_1017-46153.jpg"
        alt="Mapa Mundi"
      />

      {locationsData.map(city => {
        const isCurrent = city.name === currentLocation.name;
        return (
          <CityButton
            key={city.name}
            top={toPct(city.top, DESIGN_HEIGHT)}
            left={toPct(city.left, DESIGN_WIDTH)}
            $isCurrent={isCurrent}
            onClick={() => handleCitySelect(city.name)}
            title={city.name}
          >
            <span className="dot" />
            <CityName leftPosition={isLeftPosition(city.name)} $isCurrent={isCurrent}>
              {city.name}
            </CityName>
          </CityButton>
        );
      })}

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
          style={{ top: `${planePos.y}%`, left: `${planePos.x}%` }}
        >
          ✈️
        </PlaneIcon>
      )}
    </MapContainer>
  );
};

export default MapView;

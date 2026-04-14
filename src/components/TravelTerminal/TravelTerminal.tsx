import React, { useState } from "react";
import { LocationData } from "../../utils/localUtils";
import {
  TerminalWrapper,
  TerminalHeader,
  ContentRow,
  DepartureBoard,
  FlightRow,
  RadarPanel,
  TargetDot,
  ConfirmButton,
} from "./TravelTerminal.styles";

interface TravelTerminalProps {
  availableDestinations: LocationData[];
  onCitySelect: (cityName: string) => void;
}

const TravelTerminal: React.FC<TravelTerminalProps> = ({ availableDestinations, onCitySelect }) => {
  const [selectedCity, setSelectedCity] = useState<LocationData | null>(null);

  // Simulated radar positions based on city metadata or index for visual variety
  const getRadarPos = (index: number) => {
    const positions = [
      { x: 30, y: 40 },
      { x: 70, y: 20 },
      { x: 50, y: 70 },
      { x: 80, y: 60 },
    ];
    return positions[index % positions.length];
  };

  return (
    <TerminalWrapper>
      <TerminalHeader>
        <h2>Painel de Embarque</h2>
        <span>SISTEMA DE RADAR: ATIVO</span>
      </TerminalHeader>

      <ContentRow>
        <DepartureBoard>
          {availableDestinations.map((city, index) => (
            <FlightRow 
              key={city.name}
              $isSelected={selectedCity?.name === city.name}
              onClick={() => setSelectedCity(city)}
            >
              <div className="city-name">{city.name.toUpperCase()}</div>
              <div className="status">
                {selectedCity?.name === city.name ? "CONFIRMAR?" : "DISPONÍVEL"}
              </div>
            </FlightRow>
          ))}

          <ConfirmButton 
            disabled={!selectedCity}
            onClick={() => selectedCity && onCitySelect(selectedCity.name)}
          >
            {selectedCity ? `DECOLAR PARA ${selectedCity.name.toUpperCase()} ✈️` : "SELECIONE UM DESTINO"}
          </ConfirmButton>
        </DepartureBoard>

        <RadarPanel>
          {availableDestinations.map((city, index) => {
            const pos = getRadarPos(index);
            return (
              <TargetDot 
                key={city.name}
                $x={pos.x}
                $y={pos.y}
                $active={selectedCity?.name === city.name}
              />
            );
          })}
        </RadarPanel>
      </ContentRow>
    </TerminalWrapper>
  );
};

export default TravelTerminal;

import React from "react";
import {
  TransitionOverlay,
  MapBackground,
  Plane,
  Clouds,
  destinationInfo as DestinationInfo,
} from "./FlightTransition.styles";

interface FlightTransitionProps {
  isVisible: boolean;
  destinationName: string;
}

const FlightTransition: React.FC<FlightTransitionProps> = ({ isVisible, destinationName }) => {
  return (
    <TransitionOverlay isVisible={isVisible}>
      <MapBackground />
      <Clouds />
      <Plane src="/assets/ui/airplane.png" alt="Airplane" />
      
      <DestinationInfo>
        <p>REDIRECIONANDO ROTA PARA...</p>
        <h2>{destinationName}</h2>
      </DestinationInfo>
    </TransitionOverlay>
  );
};

export default FlightTransition;

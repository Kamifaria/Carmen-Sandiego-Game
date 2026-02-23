// MapView.styles.ts
import styled from 'styled-components';

export const MapContainer = styled.div`
  position: absolute;
  width: 80%;
  max-width: 100%;
  height: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -67%);
  z-index: 3;
  overflow: hidden;
`;

export const MapImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CityButton = styled.button<{ top: number; left: number }>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: red;
  border: none;
  display: flex;
  align-items: center;
  color: white;
`;

export const CityName = styled.span<{ leftPosition: boolean }>`
  position: absolute;
  ${props => props.leftPosition ? 'right: calc(100% + 10px)' : 'left: calc(100% + 10px)'};
  top: 50%;
  transform: translateY(-50%);
  color: white;
  white-space: nowrap;
  background-color: black;
`;

export const Line = styled.div<{ startX: number; startY: number; endX: number; endY: number }>`
  position: absolute;
  border-top: 2px dashed red;
  width: ${props => Math.sqrt((props.endX - props.startX) ** 2 + (props.endY - props.startY) ** 2)}px;
  top: ${props => props.startY}px;
  left: ${props => props.startX}px;
  transform: rotate(${props => Math.atan2(props.endY - props.startY, props.endX - props.startX)}rad);
  transform-origin: 0 0;
`;

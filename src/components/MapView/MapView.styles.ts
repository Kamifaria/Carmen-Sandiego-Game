// MapView.styles.ts
import styled from 'styled-components';

export const MapContainer = styled.div`
  position: relative; /* Change from absolute so it fills correctly */
  width: 100%;
  height: 100%;
  z-index: 3;
  overflow: hidden;
  background-color: #0b1a26;
`;

export const MapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: opacity(0.85);
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

export const PlaneIcon = styled.div<{ angle: number }>`
  position: absolute;
  width: 40px;
  height: 40px;
  background-image: url('https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: translate(-50%, -50%) rotate(${props => props.angle}rad);
  transition: top 2s ease-in-out, left 2s ease-in-out;
  z-index: 10;
  filter: invert(1); /* makes the black plane icon white */
`;

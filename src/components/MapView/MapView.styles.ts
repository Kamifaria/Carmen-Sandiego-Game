import styled from 'styled-components';

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #061523;
  overflow: hidden;
`;

export const MapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  opacity: 0.75;
  display: block;
`;

export const CityButton = styled.button<{ top: number; left: number; $isCurrent: boolean }>`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  z-index: 5;

  .dot {
    width: ${props => props.$isCurrent ? '14px' : '9px'};
    height: ${props => props.$isCurrent ? '14px' : '9px'};
    border-radius: 50%;
    background-color: ${props => props.$isCurrent ? '#ffd700' : '#ff3333'};
    box-shadow: ${props => props.$isCurrent
      ? '0 0 0 3px rgba(255,215,0,0.3), 0 0 12px #ffd700'
      : '0 0 6px rgba(255,50,50,0.7)'};
    transition: all 0.3s ease;
  }

  &:hover .dot {
    background-color: #ff8800;
    box-shadow: 0 0 12px #ff8800;
    transform: scale(1.3);
  }
`;

export const CityName = styled.span<{ leftPosition: boolean; $isCurrent: boolean }>`
  position: absolute;
  ${props => props.leftPosition ? 'right: calc(100% + 8px)' : 'left: calc(100% + 8px)'};
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.$isCurrent ? '#ffd700' : '#cce8ff'};
  font-family: "Courier New", monospace;
  font-size: 0.7rem;
  font-weight: ${props => props.$isCurrent ? 'bold' : 'normal'};
  white-space: nowrap;
  background: rgba(0,0,0,0.7);
  padding: 1px 5px;
  border-radius: 2px;
  letter-spacing: 0.5px;
  pointer-events: none;
`;

export const Line = styled.div<{ startX: number; startY: number; endX: number; endY: number }>`
  position: absolute;
  border-top: 2px dashed rgba(255, 100, 100, 0.7);
  /* Use viewport units for distance calculation to keep it relative */
  width: ${props => Math.sqrt((props.endX - props.startX) ** 2 + (props.endY - props.startY) ** 2)}%;
  top: ${props => props.startY}%;
  left: ${props => props.startX}%;
  transform: rotate(${props => Math.atan2(props.endY - props.startY, props.endX - props.startX)}rad);
  transform-origin: 0 0;
  z-index: 4;
`;

export const PlaneIcon = styled.div<{ angle: number }>`
  position: absolute;
  width: 36px;
  height: 36px;
  font-size: 28px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%) rotate(${props => props.angle}rad);
  transition: top 2s ease-in-out, left 2s ease-in-out;
  z-index: 10;
  filter: drop-shadow(0 0 6px rgba(255,200,0,0.8));
`;

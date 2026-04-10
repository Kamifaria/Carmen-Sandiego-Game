import styled from "styled-components";

/* ── Outer shell fills OptionsContainer 100% ────────────────────────*/
export const StyledCluesComputer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at center, rgba(0, 15, 25, 0.95) 0%, rgba(0, 5, 10, 1) 100%);
  font-family: "Courier New", Courier, monospace;
  overflow: hidden;
`;

/* ── Top bar ─────────────────────────────────────────────────────────*/
export const ScreenHeader = styled.div`
  flex-shrink: 0;
  width: 100%;
  padding: 12px 20px;
  background: rgba(0, 255, 204, 0.05);
  border-bottom: 1px solid #00ffcc;
  box-shadow: 0 4px 15px rgba(0, 255, 204, 0.1);
  display: flex;
  align-items: center;
  gap: 12px;
  color: #00ffcc;
  font-family: "Courier New", monospace;
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 3px;
  text-transform: uppercase;

  &::before {
    content: "INTERPOL DB_";
    color: #ffffff;
    font-size: 1.1rem;
    animation: blink 1s infinite step-end;
  }
`;

/* ── Scrollable body ─────────────────────────────────────────────────*/
export const CluesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 16px 20px;
  gap: 10px;

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: rgba(0,0,0,0.5); }
  &::-webkit-scrollbar-thumb { background: #00ffcc; border-radius: 3px; }
`;

/* ── Each clue filter row ────────────────────────────────────────────*/
export const ClueButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  background: rgba(0, 255, 204, 0.05);
  border: 1px solid rgba(0, 255, 204, 0.3);
  border-radius: 4px;
  color: #cce0ee;
  font-family: "Courier New", monospace;
  font-size: 1.05rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover { 
    background: rgba(0, 255, 204, 0.15); 
    border-color: #00ffcc;
    box-shadow: 0 0 10px rgba(0, 255, 204, 0.2);
    transform: translateX(2px);
  }

  .clue-type { color: #ffffff; text-transform: uppercase; letter-spacing: 2px; }
  .clue-option { color: #00ffcc; font-weight: bold; text-shadow: 0 0 5px rgba(0, 255, 204, 0.4); }
`;

/* ── PESQUISAR button ────────────────────────────────────────────────*/
export const FilterButton = styled.button`
  flex-shrink: 0;
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  background: linear-gradient(90deg, rgba(0, 255, 204, 0.1) 0%, rgba(0, 255, 204, 0.3) 50%, rgba(0, 255, 204, 0.1) 100%);
  border: 1px solid #00ffcc;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.2), inset 0 0 10px rgba(0, 255, 204, 0.1);
  border-radius: 4px;
  color: #ffffff;
  font-family: "Courier New", monospace;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover { 
    background: rgba(0, 255, 204, 0.4);
    box-shadow: 0 0 25px rgba(0, 255, 204, 0.5);
    letter-spacing: 6px;
  }
`;

/* ── Suspects gallery ────────────────────────────────────────────────*/
export const SuspectsGallery = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
  background: rgba(0, 15, 25, 0.6);
  border: 1px dashed rgba(0, 255, 204, 0.3);
  border-radius: 4px;
  min-height: 0;
  box-shadow: inset 0 0 30px rgba(0,0,0,0.8);

  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(0, 255, 204, 0.6); border-radius: 4px; }
`;

/* ── Single suspect card ─────────────────────────────────────────────*/
export const SuspectCard = styled.div<{ $isWarrant: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 135px;
  background: rgba(0, 20, 30, 0.85);
  border: 1px solid ${({ $isWarrant }) => ($isWarrant ? "#ff4444" : "rgba(0, 255, 204, 0.5)")};
  padding: 10px 8px;
  box-shadow: ${({ $isWarrant }) => ($isWarrant ? "0 0 20px rgba(255, 68, 68, 0.5)" : "0 4px 10px rgba(0,0,0,0.5)")};
  border-radius: 6px;
  cursor: default;
  transition: all 0.3s;
  backdrop-filter: blur(4px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ $isWarrant }) => ($isWarrant ? "0 5px 25px rgba(255, 68, 68, 0.8)" : "0 5px 15px rgba(0, 255, 204, 0.4)")};
    border-color: ${({ $isWarrant }) => ($isWarrant ? "#ff4444" : "#00ffcc")};
  }

  .photo {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border: 2px solid ${({ $isWarrant }) => ($isWarrant ? "#ff4444" : "#00ffcc")};
    background: rgba(0, 0, 0, 0.8);
    filter: hue-rotate(180deg) saturate(1.2);
  }

  .name {
    margin-top: 10px;
    color: ${({ $isWarrant }) => ($isWarrant ? "#ff4444" : "#00ffcc")};
    font-family: "Courier New", monospace;
    font-size: 0.85rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    word-break: break-word;
    letter-spacing: 1px;
    text-shadow: ${({ $isWarrant }) => ($isWarrant ? "0 0 5px rgba(255,68,68,0.5)" : "none")};
  }

  /* Red stamp: WARRANT */
  .stamp {
    display: ${props => props.$isWarrant ? 'block' : 'none'};
    position: absolute;
    top: 35px;
    left: -5px;
    color: #ff4444;
    border: 2px solid #ff4444;
    padding: 4px 8px;
    font-family: "Courier New", monospace;
    font-size: 1.1rem;
    font-weight: 900;
    transform: rotate(-15deg);
    background: rgba(10, 0, 0, 0.95);
    letter-spacing: 2px;
    z-index: 2;
    pointer-events: none;
    box-shadow: 0 0 15px rgba(255, 68, 68, 0.8);
    text-shadow: 0 0 5px rgba(255, 68, 68, 0.8);
  }
`;

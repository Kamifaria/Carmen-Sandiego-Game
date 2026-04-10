import styled from "styled-components";

// -- Main Menu Bar (High-Tech FBI Console)
export const Header = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #020b14 0%, #061523 100%);
  color: #00ffcc;
  font-family: "Courier New", monospace;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #00ffcc;
  padding: 5px 15px;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 255, 204, 0.15);
`;

export const HeaderItem = styled.div<{ isSelected?: boolean }>`
  position: relative;
  font-size: 1.1rem;
  padding: 8px 18px;
  margin-right: 15px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "rgba(0, 255, 204, 0.15)" : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#00ffcc")};
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid ${({ isSelected }) => (isSelected ? "#00ffcc" : "transparent")};
  transition: all 0.3s ease;
  user-select: none;

  &:hover {
    background-color: rgba(0, 255, 204, 0.1);
    color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 255, 204, 0.4);
    border: 1px solid rgba(0, 255, 204, 0.5);
  }
`;

// -- Dossier Full Screen Modal --
export const ModalBackground = styled.div`
  position: fixed;
  inset: 0; 
  background: radial-gradient(circle at center, rgba(0, 15, 25, 0.95) 0%, rgba(0, 0, 0, 1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(10px);
`;

export const FullScreenModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  height: 95vh;
  margin: auto;
  border: 1px solid #00ffcc;
  box-shadow: 0 0 40px rgba(0, 255, 204, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.9);
  background: linear-gradient(135deg, rgba(8, 20, 25, 0.95) 0%, rgba(0, 5, 10, 0.95) 100%);
  border-radius: 4px;
  overflow: hidden;
`;

export const ModalTopBar = styled.div`
  width: 100%;
  padding: 15px 25px;
  border-bottom: 2px solid #00ffcc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    color: #00ffcc;
    margin: 0;
    font-family: "Courier New", monospace;
    font-size: 1.8rem;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  
  button {
    background: transparent;
    border: 1px solid #00ffcc;
    color: #00ffcc;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0 10px;
    border-radius: 4px;
    &:hover { background: rgba(0, 255, 204, 0.2); color: #fff; }
  }
`;

export const ModalSplitView = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const LeftListPanel = styled.div`
  flex: 0 0 280px;
  border-right: 1px solid #00ffcc;
  overflow-y: auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,0.4);

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: #00ffcc; }
`;

export const ListPanelItem = styled.div<{ isSelected: boolean }>`
  padding: 15px 20px;
  margin: 0 10px 10px 10px;
  font-family: "Courier New", monospace;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#00ffcc")};
  background: ${({ isSelected }) => (isSelected ? "rgba(0, 255, 204, 0.15)" : "transparent")};
  border: 1px solid ${({ isSelected }) => (isSelected ? "#00ffcc" : "transparent")};
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: rgba(0, 255, 204, 0.1);
    color: #ffffff;
  }
`;

export const RightDetailPanel = styled.div`
  flex: 1;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const TopDetailsRow = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
`;

export const BigImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border: 2px solid #00ffcc;
  box-shadow: 0 0 25px rgba(0, 255, 204, 0.3);
  filter: contrast(1.1);
`;

export const SpecsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  font-family: "Courier New", monospace;
  font-size: 1.3rem;
  letter-spacing: 2px;
  color: #cce0ee;

  .label { color: #00ffcc; width: 180px; display: inline-block; font-weight: bold; }
  .value { color: #ffffff; text-shadow: 0 0 5px rgba(255,255,255,0.4); text-transform: uppercase; }
`;

export const SystemLogBox = styled.div`
  border: 1px solid rgba(0, 255, 204, 0.5);
  background: rgba(0, 255, 204, 0.05);
  padding: 20px;
  min-height: 120px;
  font-family: "Courier New", monospace;
  font-size: 1.1rem;
  color: #00ffcc;
  letter-spacing: 1px;
  line-height: 1.5;
  box-shadow: inset 0 0 10px rgba(0, 255, 204, 0.1);
`;

export const TypistWrapper = styled.div`
  display: inline-block;
  white-space: pre-wrap;
`;

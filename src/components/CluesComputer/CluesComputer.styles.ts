import styled from "styled-components";

/* ── Outer shell fills OptionsContainer 100% ────────────────────────*/
export const StyledCluesComputer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
  font-family: "Courier New", Courier, monospace;
  overflow: hidden;
`;

/* ── Top bar ─────────────────────────────────────────────────────────*/
export const ScreenHeader = styled.div`
  flex-shrink: 0;
  width: 100%;
  padding: 10px 20px;
  background: #111;
  border-bottom: 2px solid #1a4a5a;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #00ff88;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 1.4rem;
  letter-spacing: 2px;

  &::before {
    content: "🔒";
    font-size: 1.2rem;
  }
`;

/* ── Scrollable body ─────────────────────────────────────────────────*/
export const CluesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 12px 18px;
  gap: 6px;

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: #111; }
  &::-webkit-scrollbar-thumb { background: #1a4a5a; border-radius: 3px; }
`;

/* ── Each clue filter row ────────────────────────────────────────────*/
export const ClueButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  background: #111a22;
  border: 1px solid #1e3a4a;
  border-radius: 4px;
  color: #cce0ee;
  font-family: "Courier New", monospace;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover { background: #1a2e3e; }

  .clue-type { color: #7ab8cc; text-transform: uppercase; letter-spacing: 1px; }
  .clue-option { color: #ffd700; font-weight: bold; }
`;

/* ── PESQUISAR button ────────────────────────────────────────────────*/
export const FilterButton = styled.button`
  flex-shrink: 0;
  width: 100%;
  padding: 10px;
  margin-top: 4px;
  background: linear-gradient(135deg, #006400, #00a000);
  border: none;
  border-radius: 4px;
  color: #fff;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 1.1rem;
  letter-spacing: 2px;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
`;

/* ── Suspects gallery ────────────────────────────────────────────────*/
export const SuspectsGallery = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 14px;
  padding: 14px;
  overflow-y: auto;
  background: #0e1a22;
  border: 1px dashed #1a4a5a;
  border-radius: 4px;
  min-height: 0;

  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-track { background: #0a0a0a; }
  &::-webkit-scrollbar-thumb { background: #ffd700; border-radius: 4px; }
`;

/* ── Single suspect card ─────────────────────────────────────────────*/
export const SuspectCard = styled.div<{ $isWarrant: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  background: #f0e6cc;
  border: 2px solid #888;
  padding: 8px 6px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.7);
  cursor: default;

  .photo {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border: 2px solid #555;
    filter: sepia(0.5) contrast(1.1) grayscale(0.4);
  }

  .name {
    margin-top: 6px;
    color: #111;
    font-family: "Courier New", monospace;
    font-size: 0.75rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    word-break: break-word;
  }

  /* Red stamp: WARRANT */
  .stamp {
    display: ${props => props.$isWarrant ? 'block' : 'none'};
    position: absolute;
    top: 28px;
    left: 5px;
    color: #cc0000;
    border: 3px solid #cc0000;
    padding: 2px 6px;
    font-family: "Courier New", monospace;
    font-size: 1rem;
    font-weight: 900;
    transform: rotate(-18deg);
    background: rgba(255,255,255,0.8);
    letter-spacing: 1px;
    z-index: 2;
    pointer-events: none;
  }
`;

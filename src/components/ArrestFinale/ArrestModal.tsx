import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { CareerStats } from '../../utils/rankUtils';

const slam = keyframes`
  0% { transform: scale(5); opacity: 0; }
  70% { transform: scale(0.9); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(15px);
  padding: 20px;
`;

const ModalContent = styled.div`
  max-width: 600px;
  width: 100%;
  background: radial-gradient(circle at center, #0b1f2a 0%, #000 100%);
  border: 2px solid #ff4444;
  padding: 40px;
  text-align: center;
  position: relative;
  box-shadow: 0 0 50px rgba(255, 68, 68, 0.3);
  animation: ${fadeIn} 0.5s ease-out;
`;

const CaughtStamp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-15deg);
  border: 4px solid #ff4444;
  color: #ff4444;
  padding: 10px 20px;
  font-family: 'Courier New', monospace;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.05);
  animation: ${slam} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  z-index: 10;
  pointer-events: none;
`;

const SuspectPortrait = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 4px solid #ff4444;
  margin-bottom: 20px;
  filter: grayscale(0.5);
`;

const VerdictTitle = styled.h2`
  color: #00ffcc;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 15px;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.5);
`;

const SentenceText = styled.p`
  color: #fff;
  font-family: 'Space Mono', monospace;
  font-size: 1.1rem;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const PromotionBanner = styled.div`
  background: #ffd700;
  color: #000;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-out;
`;

const ActionButton = styled.button`
  background: transparent;
  border: 2px solid #00ffcc;
  color: #00ffcc;
  padding: 12px 30px;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background: rgba(0, 255, 204, 0.1); transform: scale(1.05); }
`;

interface ArrestModalProps {
  suspectName: string;
  suspectImg: string;
  artifact: string;
  careerStats: CareerStats;
  onNextCase: () => void;
}

const ArrestModal: React.FC<ArrestModalProps> = ({ suspectName, suspectImg, artifact, careerStats, onNextCase }) => {
  const [showStamp, setShowStamp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowStamp(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ModalOverlay>
      <ModalContent>
        {careerStats.casesSolved % 3 === 0 && (
          <PromotionBanner>
            PROMOÇÃO! NOVA PATENTE: {careerStats.currentRank.toUpperCase()}
          </PromotionBanner>
        )}
        
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <SuspectPortrait src={suspectImg} alt={suspectName} />
          {showStamp && <CaughtStamp>PRESO</CaughtStamp>}
        </div>

        <VerdictTitle>CASO ENCERRADO!</VerdictTitle>
        <SentenceText>
          O meliante <strong>{suspectName}</strong> foi condenado pela Suprema Corte da Interpol pelo roubo do artefato <strong>{artifact}</strong>.
          <br /><br />
          Sua eficiência como <strong>{careerStats.currentRank}</strong> foi registrada.
          Total de casos resolvidos: {careerStats.casesSolved}.
        </SentenceText>

        <ActionButton onClick={onNextCase}>PRÓXIMO CASO</ActionButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ArrestModal;

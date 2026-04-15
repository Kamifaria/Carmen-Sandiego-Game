import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const TerminalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  color: var(--terminal-green);
  font-family: var(--terminal-font);
  position: relative;
  overflow: hidden;
  border: 10px solid #1a1a1a;
  border-radius: 15px;
  box-shadow: 
    inset 0 0 50px rgba(0,0,0,1),
    0 0 20px rgba(51, 255, 51, 0.2);

  /* CRT Scanlines */
  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }

  /* Scanline sweep */
  &::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background: rgba(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    animation: flicker 0.15s infinite;
  }
`;

export const ContentArea = styled.div`
  padding: 20px;
  position: relative;
  z-index: 1;
  animation: phosphorGlow 2s infinite ease-in-out;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.85rem;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 10px;
  height: 1.2rem;
  background: var(--terminal-green);
  margin-left: 5px;
  animation: ${blink} 1s infinite;
  vertical-align: middle;
`;

const InterpolTerminal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TerminalContainer>
      <ContentArea>
        {children}
        <Cursor />
      </ContentArea>
    </TerminalContainer>
  );
};

export default InterpolTerminal;

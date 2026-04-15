import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Line = styled.div`
  margin-bottom: 5px;
  font-size: 0.9rem;
  letter-spacing: 1px;
`;

const BootSequence: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const bootLog = [
    "[ OK ] INITIALIZING INTERPOL_OS v4.2.0-STABLE",
    "[ OK ] MOUNTING CLOUD_DATABASE_FS...",
    "[ OK ] ESTABLISHING SECURE_TUNNEL: SHA-256 ENABLED",
    "[ OK ] AUTHENTICATING AGENT: KAMILA_FARIA",
    "--- ACCESS GRANTED ---",
    "DECRYPTING CRIME_REPORT_#774..."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootLog.length) {
        setLines(prev => [...prev, bootLog[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <>
      {lines.map((line, i) => (
        <Line key={i}>{line}</Line>
      ))}
    </>
  );
};

export default BootSequence;

declare module 'react-typist' {
    import * as React from 'react';
  
    interface TypistProps {
      avgTypingDelay?: number;
      avgTypingSpeed?: number;
      cursor?: {
        show: boolean;
        blink?: boolean;
        element?: string;
        hideWhenDone?: boolean;
        hideWhenDoneDelay?: number;
      };
      onCharacterTyped?: (char: string, charIndex: number) => void;
      onLineTyped?: (line: string, lineIndex: number) => void;
      onTypingDone?: () => void;
      startDelay?: number;
      children?: React.ReactNode; // Inclua esta linha
    }
  
    class Typist extends React.Component<TypistProps> {}
  
    export default Typist;
  }
  
# Lista de Tarefas: Novo Terminal Retrofuturista

## Fase 1: Infraestrutura Visual (Foundation)
- [x] [TASK-001] Criar o componente `InterpolTerminal` e definir estilos de monitor CRT (glow, scanlines). `src/components/InterpolTerminal/InterpolTerminal.tsx`
- [x] [TASK-002] Adicionar animação de "flicker" e "phosphor glow" no CSS global. `src/styles/GlobalStyles.ts`

## Fase 2: Lógica de Inicialização (Boot Logic)
- [x] [TASK-003] Criar a sequência de mensagens de diagnóstico (ex: `BOOTING...`, `DECRYPTING...`). `src/components/InterpolTerminal/BootSequence.tsx`
- [x] [TASK-004] Implementar som eletrônico (PULADO).

## Fase 3: Migração e Integração
- [x] [TASK-005] Substituir a coluna de máquina de escrever antiga em `GameScreen.tsx` pelo novo `InterpolTerminal`.
- [x] [TASK-006] Adaptar as mensagens de introdução atuais para o novo formato digital.

## Fase 4: Polimento e Mobile
- [x] [TASK-007] Garantir que o terminal se ajuste perfeitamente em telas mobile (responsividade).
- [x] [TASK-008] Validar a transição suave entre o terminal de abertura e o mapa principal do jogo.

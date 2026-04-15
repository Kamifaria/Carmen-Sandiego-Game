# Lista de Tarefas: DNA Educativo e Imersão Sonora

## Fase 1: Expansão da Base de Conhecimento (Almanaque)
- [ ] [TASK-001] Adicionar campos `moeda`, `bandeira` e `pontosTuristicos[]` para cada cidade na lista de locais. `src/utils/localUtils.ts`
- [ ] [TASK-002] Popular a lista com dados reais (ex: Paris -> Euro, Bandeira Tricolor, Torre Eiffel).

## Fase 2: Motor de Pistas Dinâmicas (Clue Engine)
- [ ] [TASK-003] Criar templates de pistas culturais (ex: "O suspeito perguntou sobre [moeda]"). `src/services/clueService.ts`
- [ ] [TASK-004] Implementar a lógica de substituição de variáveis para injetar os dados geográficos reais.

## Fase 3: Imersão de Áudio (Soundscape)
- [ ] [TASK-005] Criar o componente `AudioManager` para tocar loops de ambiente baseados no continente da cidade. `src/components/AudioManager/AudioManager.tsx`
- [ ] [TASK-006] Adicionar sons de interface digital ("scanning", "data beep") ao abrir o computador e o terminal.
- [ ] [TASK-007] Integrar o áudio no `GameScreen` para disparar na chegada de cada cidade.

## Fase 4: Polimento UI
- [ ] [TASK-008] Adicionar botão de "Mute/Unmute" (som) global e ajuste de volume no cabeçalho.

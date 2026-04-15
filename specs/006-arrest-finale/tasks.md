# Lista de Tarefas: Finalização Cinematográfica de Prisão

## Fase 1: Motor de Carreira (Rank Logic)
- [ ] [TASK-001] Criar utilitário para calcular patente (Rookie -> Ace) e persistir o número de casos resolvidos no `localStorage`. `src/utils/rankUtils.ts`
- [ ] [TASK-002] Adicionar estado global ou injetar lógica em `GameScreen` para rastrear o progresso da carreira.

## Fase 2: Interface de Captura (The Bust)
- [ ] [TASK-003] Criar componente `ArrestModal` com animação de "Carimbo de Preso" (Slam Effect) sobre a foto do suspeito. `src/components/ArrestFinale/ArrestModal.tsx`
- [ ] [TASK-004] Estilizar o modal com estética de terminal e som visual de alerta.

## Fase 3: Veredito e Promoção
- [ ] [TASK-005] Implementar tela de sentença judicial com texto dinâmico baseado no crime.
- [ ] [TASK-006] Criar animação de "Promoção de Patente" com a exibição de um novo distintivo (Badge) quando o marco de vitórias for atingido.

## Fase 4: Integração Final
- [ ] [TASK-007] Substituir o antigo `GameState === 'won'` do `GameScreen.tsx` pelo novo modal cinematográfico.
- [ ] [TASK-008] Garantir que o botão "Novo Caso" reinicie corretamente o estado da carreira sem zerar o total de vitórias.

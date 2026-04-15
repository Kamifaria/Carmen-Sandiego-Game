# Lista de Tarefas: Bugfixes e Polimento Mobile

## Fase 1: Correção de Ativos e NPCs
- [ ] [TASK-001] Mapear corretamente todos os prédios para os tipos de NPCs (Banker, Librarian, Pilot) e definir `merchant` como fallback. `src/services/clueService.ts`
- [ ] [TASK-002] Implementar lógica de fallback para imagens quebradas no componente de retrato do NPC. `src/components/GameScreen/GameScreen.tsx`

## Fase 2: Correção de Dados (Arrest Fix)
- [ ] [TASK-003] Investigar e corrigir a passagem do objeto `villain` para o `ArrestModal` para garantir consistência de identidade. `src/components/GameScreen/GameScreen.tsx`
- [ ] [TASK-004] Sincronizar as estatísticas de casos resolvidos entre o Backend e o LocalStorage.

## Fase 3: Responsividade Global
- [ ] [TASK-005] Refatorar telas de Login e Registro para layout 100% mobile (inputs e botões). `src/components/Login/Login.styles.ts`
- [ ] [TASK-006] Ajustar o Layout do Lobby para evitar quebras em telas pequenas. `src/components/Lobby/Lobby.styles.ts`
- [ ] [TASK-007] Polimento final no GameScreen (Terminal + Botões + Map Options).

## Fase 4: Validação
- [ ] [TASK-008] Realizar auditoria visual completa via emulador mobile e fechar o ciclo de bugs.

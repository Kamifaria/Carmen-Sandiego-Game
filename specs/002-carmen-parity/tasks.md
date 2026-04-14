# Tasks: Paridade com a Lógica Original

**Input**: Design documents from `/specs/002-carmen-parity/`
**Prerequisites**: plan.md, spec.md, research.md

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Preparação do ambiente para novos dados

- [ ] T001 [P] Sincronizar branch `002-carmen-parity` com as últimas mudanças do sistema de pistas
- [ ] T002 [P] Criar arquivo de utilitários de lógica de jogo em `src/utils/gameLogicUtils.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Atualização das estruturas de dados globais

- [x] T003 [P] Atualizar interface `LocationData` em `src/utils/localUtils.ts` com o campo `metadata: { currency: string, flag: string, landmark: string }`
- [x] T004 [P] Populando `localUtils.ts` com dados reais para as primeiras 10 cidades principais
- [x] T005 [P] Atualizar interface `Trupe` em `src/utils/trupeUtils.ts` para incluir campos biográficos extras (ex: `alias`, `bio`)

**Checkpoint**: Estrutura de dados pronta para alimentar as novas mecânicas.

---

## Phase 3: User Story 1 - Progressão de Carreira (Priority: P1) 🎯 MVP

**Goal**: Fazer o jogo ficar mais difícil conforme o jogador ganha casos.

**Independent Test**: Alterar manualmente o valor de `casesResolved` e verificar se o `gamePath` aumenta de tamanho.

### Implementation for User Story 1

- [x] T006 [P] [US1] Implementar função `getDifficultySettings(casesResolved)` em `src/utils/gameLogicUtils.ts` (retorna número de cidades e limite de tempo)
- [x] T007 [US1] Refatorar `startNewRound` em `src/components/GameScreen/GameScreen.tsx` para usar o número dinâmico de cidades retornado pela nova função
- [ ] T008 [US1] Ajustar lógica de "DeadLine" (Domingo 17h) para ser mais rigorosa em ranks mais altos

---

## Phase 4: User Story 2 - Dossiês dos Suspeitos (Priority: P1)

**Goal**: Disponibilizar fichas criminais detalhadas para consulta.

**Independent Test**: Abrir o computador da Interpol e conseguir navegar entre "Filtros de Pistas" e "Dossiês V.I.L.E.".

### Implementation for User Story 2

- [x] T009 [P] [US2] Criar sub-componente `DossierEntry` para renderizar uma ficha individual em `src/components/CluesComputer/`
- [x] T010 [US2] Adicionar sistema de abas ou toggle em `src/components/CluesComputer/CluesComputer.tsx` para alternar entre filtros e dossiês
- [x] T011 [P] [US2] Estilizar o dossiê com estética "Top Secret" clássica (fontes mono-espaçadas, tons de verde/preto)

---

## Phase 5: User Story 3 - Pistas Educativas (Priority: P2)

**Goal**: Pistas que envolvam moedas e fatos reais.

**Independent Test**: Investigar um local e receber uma pista contendo a moeda correta da próxima cidade.

### Implementation for User Story 3

- [x] T012 [P] [US3] Atualizar `clueService.ts` para incluir geradores de pistas baseados em `metadata.currency` e `metadata.flag`
- [x] T013 [US3] Integrar novos tipos de pistas no sorteio aleatório da função `generateClue`
- [ ] T014 [US3] Validar consistência: Garantir que a pista de moeda sempre aponte para a moeda da CIDADE SEGUINTE no path

---

## Phase 6: Polish & Cross-Cutting Concerns

- [ ] T015 [P] Adicionar efeitos sonoros sutis ao abrir o dossiê (opcional)
- [ ] T016 Revisar todas as descrições de cidades para garantir que o corte de texto não quebre as pistas
- [ ] T017 Teste de ponta a ponta: Resolver um caso completo do rank Novato até o ranking Detetive

---

## Dependencies & Execution Order

1. **Foundational (T003-T005)**: Necessário para que os serviços e componentes tenham onde ler os dados.
2. **US1 & US2**: Podem ser feitas em paralelo.
3. **US3**: Depende da US1 estar estável para garantir que os paths existam.

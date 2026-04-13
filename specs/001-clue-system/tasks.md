# Tasks: Sistema de Pistas

**Input**: Design documents from `/specs/001-clue-system/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 [P] Ajustar estrutura de pastas em `specs/001-clue-system/` para garantir consistência
- [ ] T002 [P] Validar dependências de TypeScript no `package.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [ ] T003 [P] Refatorar `src/utils/trupeUtils.ts` para exportar constantes tipadas (ex: `HAIR_COLORS`, `HOBBIES`)
- [ ] T004 [P] Criar arquivo `src/services/clueService.ts` com as interfaces base definidas no `data-model.md`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Investigando um Local (Priority: P1) 🎯 MVP

**Goal**: Permitir que o jogador receba pistas ao investigar locais em uma cidade.

**Independent Test**: Clicar em "PROCURAR" -> "Banco" e verificar se o `bottomMessage` exibe uma pista válida sobre o vilão ou o destino.

### Implementation for User Story 1

- [ ] T005 [P] [US1] Implementar função `generateClue` em `src/services/clueService.ts` (lógica de sorteio entre suspeito/cidade)
- [ ] T006 [US1] Refatorar método `handleSearch` em `src/components/GameScreen/GameScreen.tsx` para delegar geração ao `clueService.ts`
- [ ] T007 [US1] Adicionar tratamento de erro caso a cidade investigada não esteja no `gamePath` em `GameScreen.tsx`

**Checkpoint**: User Story 1 funcional. O jogador já consegue coletar informações básicas.

---

## Phase 4: User Story 2 - Computador da Interpol (Priority: P1)

**Goal**: Filtrar suspeitos e emitir mandado baseado nas pistas coletadas.

**Independent Test**: Abrir painel "PISTAS", selecionar um filtro e clicar em "PESQUISAR". O mandado deve aparecer se sobrar 1 suspeito.

### Implementation for User Story 2

- [ ] T008 [P] [US2] Implementar função `filterTrupe` em `src/services/clueService.ts`
- [ ] T009 [US2] Atualizar `handleFilter` em `src/components/CluesComputer/CluesComputer.tsx` para usar o novo serviço
- [ ] T010 [P] [US2] Refinar lógica de persistência do `localStorage` para `selectedClues` em `CluesComputer.tsx`

**Checkpoint**: User Story 2 funcional. O loop de "coletar -> filtrar -> mandado" está completo.

---

## Phase 5: User Story 3 - Rota Geográfica (Priority: P2)

**Goal**: Pistas que descrevam características culturais e geográficas do próximo destino.

**Independent Test**: Verificar se pistas sobre "CAIRO" mencionam pirâmides ou desertos conforme a descrição da cidade.

### Implementation for User Story 3

- [ ] T011 [US3] Adicionar gerador de fragmentos de descrição em `src/services/clueService.ts` para pistas de cidade
- [ ] T012 [US3] Validar que as pistas de cidade não revelem o nome da cidade diretamente, apenas fragmentos da descrição

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T013 [P] Limpeza de logs de console e imports não utilizados em `GameScreen.tsx`
- [ ] T014 [P] Documentar o novo serviço no `README.md` principal do projeto
- [ ] T015 Validar a experiência do usuário final em um caso completo (da primeira à última cidade)

---

## Dependencies & Execution Order

- **Foundational (T003-T004)**: Bloqueia todas as User Stories.
- **US1**: Independente após Foundation.
- **US2**: Pode ser feita em paralelo com US1.
- **US3**: Depende da implementação base da US1 para o fluxo de exibição de pistas.

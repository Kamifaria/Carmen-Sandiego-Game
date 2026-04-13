# Implementation Plan: Sistema de Pistas

**Branch**: `001-clue-system` | **Date**: 2026-04-13 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification for "Sistema de Pistas"

## Summary

O objetivo é organizar e centralizar a lógica de geração e filtragem de pistas, que atualmente está dispersa entre `GameScreen.tsx` e `CluesComputer.tsx`. A abordagem técnica consiste em criar um serviço dedicado `clueService.ts` para a lógica de negócio e refatorar o `trupeUtils.ts` para servir como um repositório de dados limpo.

## Technical Context

**Language/Version**: TypeScript 4.9+  
**Primary Dependencies**: React 18, Styled Components, Express (Backend)  
**Storage**: MongoDB via Mongoose (para persistência de estatísticas de casos)  
**Testing**: Jest + React Testing Library  
**Target Platform**: Web (Browser)
**Project Type**: Web Application (React + Node.js)  
**Performance Goals**: Filtragem de suspeitos instantânea (<100ms)  
**Constraints**: Persistência de filtros no localStorage para evitar perda de progresso ao fechar o painel.  
**Scale/Scope**: 15+ trupeiros, 30+ cidades, sistema de pistas dinâmico.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Princípio I: Simplicidade**: A lógica de pistas será extraída de componentes UI para funções utilitárias puras. (PASS)
- **Princípio II: Testabilidade**: Novas funções de geração de pistas serão testáveis de forma independente. (PASS)
- **Princípio III: Responsabilidade Única**: `trupeUtils.ts` cuidará apenas dos dados, enquanto o `clueService.ts` cuidará da lógica. (PASS)

## Project Structure

### Documentation (this feature)

```text
specs/001-clue-system/
├── plan.md              # Este arquivo
├── research.md          # Pesquisa de padrões de pistas (Phase 0)
├── data-model.md        # Definição das interfaces de Pista e Vilão (Phase 1)
├── quickstart.md        # Guia rápido para integração do novo serviço (Phase 1)
└── checklists/
    └── requirements.md  # Checklist de qualidade da especificação
```

### Source Code (repository root)

```text
src/
├── components/          # Componentes React (GameScreen, CluesComputer)
├── services/            # Serviços de lógica (NOVO: clueService.ts)
├── utils/               # Utilitários e dados (trupeUtils.ts, localUtils.ts)
└── assets/              # Imagens e sons
```

**Structure Decision**: Utilizaremos a estrutura de projeto única (Option 1) com a adição de uma pasta `services/` para desacoplar a lógica de jogo da interface visual.

## Complexity Tracking

> *Nenhuma violação detectada até o momento.*

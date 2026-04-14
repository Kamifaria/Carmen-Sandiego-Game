# Implementation Plan: Paridade com a Lógica Original

**Branch**: `002-carmen-parity` | **Date**: 2026-04-13 | **Spec**: [002-carmen-parity/spec.md](./spec.md)

## Summary

O plano consiste em enriquecer a base de dados do jogo para suportar pistas educativas complexas e implementar um sistema de progressão que escala a dificuldade com o sucesso do jogador. Também vamos criar uma interface de Dossiê para consulta direta dos vilões, separada da lógica de filtros do computador.

## Technical Context

**Language/Version**: TypeScript 4.9+  
**Primary Dependencies**: React 18, Styled Components  
**Storage**: LocalStorage para estado dos filtros, MongoDB (Backend) para `casesResolved`.  
**Testing**: Jest + React Testing Library  
**Target Platform**: Web (Browser)
**Project Type**: Web Application  
**Performance Goals**: Troca instantânea entre telas de Dossiê e Filtros.

## Constitution Check

- **Princípio I: Estética Premium**: O dossiê deve parecer um arquivo secreto confidencial. (PASS)
- **Princípio II: Educativo**: 100% das novas pistas devem ser factuais. (PASS)
- **Princípio III: Desafio Progressivo**: A curva de dificuldade deve ser suave mas perceptível. (PASS)

## Project Structure

### Documentation (this feature)

```text
specs/002-carmen-parity/
├── plan.md              # Este arquivo
├── research.md          # Pesquisa de fatos geográficos para as cidades
├── data-model.md        # Atualização da interface Location e Trupe
└── quickstart.md        # Como testar a progressão de rank
```

### Source Code Refactoring

```text
src/
├── utils/
│   ├── localUtils.ts    # Adicionar campo 'metadata' (moeda, flag, etc)
│   └── trupeUtils.ts    # Adicionar novos campos biográficos (hobby detalhado)
├── components/
│   ├── CluesComputer/   # Criar sub-componente DossierList
│   └── GameScreen/      # Refatorar buildPath() para aceitar multiplicador de rank
└── services/
    └── clueService.ts   # Atualizar gerador para incluir fatos geográficos
```

**Structure Decision**: Manteremos a arquitetura atual, expandindo apenas as definições de dados (Utilities) e a lógica de geração de pistas (Services).

## Phases

### Fase 0: Pesquisa de Conteúdo
Coletar dados reais para as 32 cidades do jogo:
- Moedas (ex: Tóquio -> Iene)
- Cores das bandeiras
- Pontos turísticos icônicos

### Fase 1: Expansão de Dados
1. Atualizar interfaces em `localUtils.ts` e `trupeUtils.ts`.
2. Popular os novos campos.

### Fase 2: Lógica de Carreira
1. Implementar função `getDifficultyScale(casesResolved)`.
2. Integrar na criação de rota (`buildPath`).

### Fase 3: UI de Dossiê
1. Criar componente visual para exibir a "Ficha Criminal".
2. Adicionar navegação por abas no computador da Interpol.

# Feature Specification: Paridade com a Lógica Original

**Feature Branch**: `002-carmen-parity`  
**Created**: 2026-04-13  
**Status**: Draft  
**Input**: User description: "preciso que meu jogo tenha a logica do jogo original da carmen em quantos 100% temos isso?"

## Visão Geral

Atualmente, o jogo possui o fluxo básico de perseguição, mas falta a "alma" mecânica do jogo original da Broderbund. Para atingir 100% de paridade lógica, precisamos implementar sistemas de ranking real, dossiês detalhados e uma maior variedade de pistas educativas (geografia, moeda, política).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Progressão de Carreira (Priority: P1)

O detetive começa como um "Novato" e, ao resolver casos, é promovido. Cada nível de promoção aumenta a dificuldade dos casos (mais cidades no caminho e pistas mais crípticas).

**Why this priority**: É o que dá longevidade ao jogo original. Sem progressão, o jogo é apenas uma rodada isolada.

**Acceptance Scenarios**:
1. **Given** o usuário resolveu 5 casos, **When** ele inicia um novo caso, **Then** seu rank deve subir para "Detetive" e o número de cidades no `gamePath` deve aumentar de 4 para 5.

---

### User Story 2 - Dossiês dos Suspeitos (Priority: P1)

O jogador pode consultar uma base de dados com a biografia e fotos de todos os membros da V.I.L.E. (Trupe), não apenas como filtros de busca, mas como material de referência.

**Why this priority**: Essencial para a imersão e para ajudar o jogador a associar pistas de personalidade a nomes específicos.

**Acceptance Scenarios**:
1. **Given** o usuário está no computador, **When** ele seleciona "Dossiê", **Then** ele deve conseguir ver a ficha completa de cada trupeiro (foto, idade, gostos e histórico).

---

### User Story 3 - Pistas Educativas Avançadas (Priority: P2)

As pistas deixadas pelas testemunhas devem incluir fatos reais sobre o país (moeda, bandeira, pontos turísticos famosos).

**Why this priority**: É o elemento educativo que define Carmen Sandiego.

**Acceptance Scenarios**:
1. **Given** a próxima cidade é "TÓQUIO", **When** o usuário investiga, **Then** a pista deve poder citar "Ele trocou dinheiro por Ienes" ou "Ele estava lendo sobre o Monte Fuji".

---

### Edge Cases

- **Promoção Máxima**: O que acontece quando o jogador atinge o rank de "Superintendente"? O jogo deve oferecer o desafio final contra a própria Carmen Sandiego.
- **Pistas Repetidas**: O sistema deve evitar dar a mesma pista educativa duas vezes no mesmo local.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema deve calcular o número de cidades do caso baseado no `casesResolved` do jogador.
- **FR-002**: Implementar um dicionário de dados geográficos para cada cidade (Moeda, Bandeira, Marco Histórico).
- **FR-003**: O sistema de pistas deve concatenar dados do trupeiro com o dicionário da cidade.
- **FR-004**: Adicionar "Tempo de Viagem" variável dependendo da distância (opcional, simplificado para 2h/4h/6h).

### Key Entities

- **Rank**: Define o nível de dificuldade (Novato, Detetive, Inspetor, Superintendente).
- **Dossiê**: Registro histórico dos vilões.
- **Fato Geográfico**: Entidade vinculada a cada localização.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: O jogador deve sentir um aumento progressivo na dificuldade a cada 5 casos resolvidos.
- **SC-002**: 100% das pistas de cidade devem conter pelo menos um fato real alternativo ao nome da cidade.
- **SC-003**: O menu de dossiês deve carregar dados e imagens de todos os 15+ vilões em menos de 300ms.

## Assumptions

- **Persistência**: Assume-se que o backend já salva o número de casos resolvidos.
- **Dados Geográficos**: Será necessário popular manualmente as informações extras das cidades no `localUtils.ts`.

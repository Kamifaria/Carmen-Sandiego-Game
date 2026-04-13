# Feature Specification: Sistema de Pistas

**Feature Branch**: `001-clue-system`  
**Created**: 2026-04-13  
**Status**: Draft  
**Input**: User description: "Sistema de Pistas de Carmen San Diego"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Investigando um Local (Priority: P1)

O detetive chega em uma cidade e decide investigar um local (ex: Banco, Museu, Biblioteca). Ele recebe uma pista que indica a próxima cidade ou uma característica física/pessoal do suspeito.

**Why this priority**: É o núcleo da jogabilidade de investigação. Sem pistas, o jogador não tem como progredir na perseguição.

**Independent Test**: Pode ser testado clicando no botão "PROCURAR" em qualquer cidade e verificando se a mensagem exibida na área de texto contém informações úteis sobre o vilão ou o destino.

**Acceptance Scenarios**:

1. **Given** o detetive está em uma cidade do caminho correto, **When** ele investiga um local, **Then** o sistema deve exibir uma pista que descreva ou a próxima cidade (baseado na descrição cultural/geográfica) ou um atributo do vilão atual.
2. **Given** o detetive está na cidade errada, **When** ele investiga um local, **Then** o sistema deve informar que não há pistas ali.

---

### User Story 2 - Usando o Computador da Interpol (Priority: P1)

O detetive abre o computador de pistas e insere as características coletadas para identificar o suspeito e emitir um mandado de prisão (Warrant).

**Why this priority**: É a mecânica necessária para a vitória. O jogo original exige um mandado válido para prender o vilão na última cidade.

**Independent Test**: Abrir o painel "PISTAS", selecionar filtros e verificar se a galeria de suspeitos atualiza corretamente.

**Acceptance Scenarios**:

1. **Given** o detetive tem a pista "cabelo castanho", **When** seleciona "Castanho" no filtro de Cabelo, **Then** apenas os membros da trupe com cabelo castanho devem aparecer.
2. **Given** apenas um suspeito restou na lista após a filtragem, **When** o usuário clica em "PESQUISAR", **Then** um mandado de prisão deve ser emitido automaticamente para aquele suspeito.

---

### User Story 3 - Progressão por Rota Geográfica (Priority: P2)

O sistema de pistas deve guiar o jogador através de uma rota lógica de cidades, onde cada pista de destino aponta para as características da cidade seguinte no `gamePath`.

**Why this priority**: Mantém a fidelidade ao estilo de jogo "Carmen Sandiego" original e adiciona o elemento educativo.

**Independent Test**: Verificar se a descrição da próxima cidade é usada corretamente na geração da pista de texto.

**Acceptance Scenarios**:

1. **Given** a próxima cidade é "CAIRO", **When** a pista de destino é gerada, **Then** ela deve conter um fragmento da descrição de Cairo (ex: "lugar de pirâmides antigas").

---

### Edge Cases

- **Filtros Conflitantes**: O que acontece se o usuário selecionar filtros que resultam em zero suspeitos? O sistema deve exibir "NENHUM SUSPEITO ENCONTRADO" e permitir limpar os filtros.
- **Mandado Tardia**: Se o jogador chegar na última cidade sem o mandado, ele deve perder o caso ao encontrar o suspeito (como já implementado, mas o sistema de pistas deve facilitar o acesso).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema deve permitir a geração de pistas textuais dinâmicas baseadas no estado atual do jogo (villain e next city).
- **FR-002**: O computador de pistas deve oferecer 5 categorias de filtragem: Sexo, Hobby, Cabelo, Característica e Veículo.
- **FR-003**: O estado dos filtros selecionados deve ser persistido durante a sessão de jogo para que o usuário não perca seu progresso ao fechar o painel de pistas.
- **FR-004**: O sistema deve permitir a emissão de apenas um mandado por vez.
- **FR-005**: A geração de pistas deve ser balanceada (ex: 50% chance de pista de suspeito, 50% de pista de cidade).

### Key Entities

- **Trupeiro (Suspect)**: Entidade que contém os atributos físicos e hobbies.
- **Pista (Clue)**: Fragmento de informação textual gerado dinamicamente.
- **Mandado (Warrant)**: Estado de autorização de prisão associado a um nome de suspeito.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: O jogador deve ser capaz de filtrar a lista de 15 suspeitos para apenas 1 utilizando no máximo 3 atributos corretos.
- **SC-002**: A interface de pistas deve abrir e filtrar resultados com tempo de resposta inferior a 200ms.
- **SC-003**: 100% das pistas de destino geradas devem vir de cidades que realmente estão no `gamePath` atual.

## Assumptions

- **Estado de Jogo**: Assume-se que o `villain` e o `gamePath` já estão inicializados no início da rodada.
- **Conhecimento do Usuário**: Assume-se que o usuário sabe que precisa de um mandado para vencer.
- **Dados Estáticos**: Assume-se que a lista de trupeiros em `trupeUtils.ts` é a fonte da verdade para todos os atributos.

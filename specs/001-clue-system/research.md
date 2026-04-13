# Research: Sistema de Pistas

## Decision: Centralização da Lógica de Pistas

**Decision**: Criar um `clueService.ts` que exporta funções como `generateClue(currentVillain, nextCity)` e `filterSuspects(allSuspects, activeFilters)`.

**Rationale**: 
- Atualmente, a string da pista é montada diretamente no `GameScreen.tsx`. 
- Isso dificulta a expansão do sistema (ex: adicionar novos tipos de pistas ou traduções).
- Centralizar permite testes unitários rigorosos na lógica de "quem bate com qual filtro".

**Alternatives considered**: 
- Manter nos componentes: Rejeitado por aumentar a complexidade dos componentes React (código "spaghetti").
- Usar Redux/Context para os filtros: Considerado, mas o `localStorage` com um custom hook simples é suficiente para a escala atual do projeto.

## Decision: Formato dos Dados da Trupe

**Decision**: Refatorar `trupeUtils.ts` para exportar um objeto de constantes para cada atributo (Sexos, Hobbies, etc.) além da lista de trupeiros.

**Rationale**:
- Reduz erros de digitação (typos) ao garantir que os filtros no `CluesComputer` e os dados no `trupeUtils` usem as mesmas strings.
- Facilita a criação de seletores dinâmicos na UI.

**Alternatives considered**:
- Usar Enums: Rejeitado em favor de `string union types` e `as const`, que são mais idiomáticos em TypeScript moderno para este tipo de dado.

## Decision: Fluxo do Mandado (Warrant)

**Decision**: O mandado deve ser um estado compartilhado via Context ou passado como prop, sendo emitido apenas pelo computador da Interpol.

**Rationale**:
- Garante que o jogador "passe" pelo computador antes de poder vencer, mantendo o loop de gameplay pretendido.

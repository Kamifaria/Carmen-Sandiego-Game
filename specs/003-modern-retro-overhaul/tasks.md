# Tasks: Modern-Retro Overhaul

**Goal**: Transform the UI into a modern-retro masterpiece with CRT effects, map animations, and immersive audio, while preserving original game logic and suspect data.

---

## Phase 1: Visual Atmosphere (The "Classic CRT" Look)

- [ ] **T001 [P] Componente de Filtro CRT**: Criar `src/components/CRTFilter/CRTFilter.tsx` e estilos que adicionem scanlines, vinheta e um leve "glow" esverdeado/âmbar.
- [ ] **T002 [P] Integração Global**: Aplicar o filtro no `App.tsx` para cobrir toda a aplicação.
- [ ] **T003 Refinamento de Tipografia**: Substituir fontes genéricas por fontes mono-espaçadas ou "pixel fonts" em áreas críticas (computador de pistas, descrições).

---

## Phase 2: Imersão Sensorial (Audio & Ambient)

- [ ] **T004 [P] SoundService**: Criar um utilitário para gerenciar loops de ambiente em `src/services/soundService.ts`.
- [ ] **T005 Sons de Interface**: Adicionar sons de "click" mecânico e "flicker" de monitor ao navegar entre painéis.
- [ ] **T006 Ambientação por Cidade**: Mapear sons específicos no `locationsData` (ex: vento para Cairo, chuva para Londres) e tocar ao chegar na cidade.

---

## Phase 3: Animações de Fluxo (The "Travel" Experience)

- [ ] **T007 [P] Animação de Linha de Voo**: Atualizar `src/components/MapView/MapView.tsx` para animar uma linha pontilhada (estilo clássico) entre a localização atual e a selecionada.
- [ ] **T008 Transição de Chegada**: Adicionar uma animação ou tela de "Entering [City Name]" ao finalizar a viagem.
- [ ] **T009 Backgrounds Dinâmicos**: Melhorar a exibição da imagem da cidade no `GameScreen.tsx` para que ela preencha a área de fundo ou seja exibida como um monitor dentro da interface.

---

## Phase 4: UI Modernization (Glassmorphism & Layout)

- [ ] **T010 Painéis Semi-Transparentes**: Aplicar efeitos de desfoque (backdrop-filter) nos painéis de OPÇÕES e COMPUTADOR.
- [ ] **T011 Mobile Responsiveness**: Garantir que o visual "modern-retro" se adapte bem a telas menores sem perder a legibilidade.

---

## Phase 5: Polish & Testing

- [ ] **T012 Revisão de Lógica**: Garantir que as mudanças visuais não quebraram o sistema de pistas e o mandado de prisão.
- [ ] **T013 Teste de Performance**: Verificar se o filtro CRT e animações de mapa não estão causando lag em dispositivos mais lentos.

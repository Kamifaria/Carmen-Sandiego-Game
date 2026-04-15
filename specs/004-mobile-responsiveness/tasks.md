# Task List: Mobile Responsiveness Overhaul

## Phase 1: Foundation & global Styles
- [x] [TASK-001] Create `src/styles/breakpoints.ts` with standard mobile/tablet/desktop definitions.
- [x] [TASK-002] Update `src/styles/GlobalStyles.ts` to include fluid typography using `clamp()`.

## Phase 2: Core Layout Updates
- [x] [TASK-003] Update the main Application wrapper in `src/App.tsx` (or main layout file) to support vertical stacking on mobile.
- [ ] [TASK-004] Implement a responsive Navigation menu in `src/components/Navigation.tsx` (toggle menu for mobile).

## Phase 3: Component Refactoring
- [ ] [TASK-005] Update `TravelTerminal` component to use a responsive grid (1 column on mobile, N columns on desktop).
- [x] [TASK-006] Fix `ClueDisplay` (Pistas) to ensure text is never cut off and container is scrollable.
- [ ] [TASK-007] Refactor the Suspect/Dossier screens for mobile-friendly viewing.

## Phase 4: Polish & Validation
- [ ] [TASK-008] Audit all interactive elements for 44x44px minimum touch targets.
- [ ] [TASK-009] Final visual pass for "Travel Terminal" aesthetics on mobile Viewport.

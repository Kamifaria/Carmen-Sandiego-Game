# Implementation Plan: Cinematic Arrest Finale

## Technical Context
- **Component**: `GameScreen.tsx`.
- **New Component**: `ArrestModal.tsx` to handle the multi-step win sequence.
- **State management**: Use `localStorage` to persist the number of cases won and current rank.

## Design Decisions
1. **The Rank Logic**:
   - 0-2 cases: Rookie
   - 3-5 cases: Investigator
   - 6-10 cases: Senior Agent
   - 11+ cases: Ace Detective
2. **Visual Components**:
   - `BustPanel`: Shows the suspect's photo being "stamped".
   - `BadgePanel`: A CSS-drawn or SVG badge that animates into view.
   - `VerdictPanel`: High-tech terminal text displaying the judicial results.
3. **Animations**: Use `framer-motion` (if available) or standard `styled-components` keyframes for the stamp "slam" effect (scale down with a shake).

## Architecture & File Structure
- `src/components/ArrestFinale/`: New directory for all victory-related UI.
- `src/utils/rankUtils.ts`: Logic to calculate rank based on score.
- `src/components/GameScreen/GameScreen.tsx`: Trigger the `ArrestModal` when `gameState === 'won'`.

## Phasing
1. **Phase 1: Rank Engine**: Implement utility to calculate and store player rank.
2. **Phase 2: The Arrest UI**: Build the stamp and "Caught" overlay.
3. **Phase 3: The Verdict & Promotion UI**: Build the rank-up animation and the sentencing text.
4. **Phase 4: Integration**: Replace the current `gameState === 'won'` overlay in `GameScreen.tsx`.

# Implementation Plan: Bugfix & Mobile Audit

## Technical Context
- **Affected Components**: `Login.tsx`, `Lobby.tsx`, `GameScreen.tsx`, `ArrestModal.tsx`, `clueService.ts`.
- **Styling**: All `.styles.ts` files related to the above.

## Design Decisions
1. **Asset Fallback**: Modify `GameScreen.tsx` to include an `onError` handler for `WitnessPortrait` or check file existence in `clueService`.
2. **Mobile Form Factor**:
   - Use `flex-direction: column` for all wrapper containers on mobile.
   - Set `width: 90%` for inputs on mobile login to prevent horizontal overflow.
3. **Data Integrity**: 
   - Pass the `villain` object directly from `GameScreen` state to `ArrestModal` without re-shuffling or re-selecting anything during the win transition.

## Architecture & File Structure
- `src/components/Login/Login.styles.ts`: Update responsive rules.
- `src/components/Lobby/Lobby.styles.ts`: Update responsive rules.
- `src/services/clueService.ts`: Refactor NPC mapping logic.

## Phasing
1. **Phase 1: NPC Image Fix**: Map buildings properly to existing assets and create fallback logic.
2. **Phase 2: Arrest Bug Fix**: Debug and fix the criminal identity mismatch in the finale.
3. **Phase 3: Global Mobile Polish**: Go page-by-page (Login, Lobby, Game) and apply responsive overrides.

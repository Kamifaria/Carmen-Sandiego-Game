# Implementation Plan: Educational DNA & Soundscape

## Technical Context
- **Data Model**: `src/utils/localUtils.ts` (Expanding `LocationData`).
- **Logic**: `src/services/clueService.ts` (Refactoring `generateClue` to include cultural templates).
- **Audio Component**: New `AudioManager.tsx` to handle city loops and UI sounds.

## Design Decisions
1. **Clue Templates**:
   - `Currency`: "They mentioned exchanging cash for [CURRENCY]".
   - `Landmark`: "They were looking for a map of [LANDMARK]".
   - `Flag`: "I saw a flag with [FLAG_DESCRIPTION] on their vehicle".
2. **Audio System**:
   - Categorize cities into "Ambient Groups" (European, Asian, Latin American, North American, Oceanic).
   - Use royalty-free assets (links for the user or local placeholders if user prefers).

## Architecture & File Structure
- `src/components/AudioManager/AudioManager.tsx`: Central hub for all sounds.
- `src/utils/localUtils.ts`: Add `currency`, `landmarks[]` and `flagDescription` properties.
- `src/services/clueService.ts`: Implement template markers like `{{CURRENCY}}`.

## Phasing
1. **Phase 1: Knowledge Base Expansion**: Populate `localUtils.ts` with real data for all locations.
2. **Phase 2: Clue Engine Upgrade**: Implement template-based clues.
3. **Phase 3: Soundscape**: Create the `AudioManager` component and link it to the current city state in `GameScreen`.
4. **Phase 4: UI Polish**: Add volume control and digital UI sounds.

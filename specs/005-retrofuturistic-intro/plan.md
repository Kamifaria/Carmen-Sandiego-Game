# Implementation Plan: Retrofuturistic Intro Overhaul

## Technical Context
- **Component**: `GameScreen.tsx`.
- **Styling**: `GameScreen.styles.ts`.
- **State**: Update `introComplete` and `step` logic to include a "boot" phase.

## Design Decisions
1. **The Terminal Component**: Create a new `InterpolTerminal` styled component that uses a CSS grid to simulate a 4:3 CRT monitor aspect ratio.
2. **Visual Effects**: 
   - Use `text-shadow: 0 0 5px rgba(0, 255, 204, 0.8);` for the phosphor glow.
   - Refactor `LeftColumn` to use a dark terminal background with border-radius to simulate monitor bezel.
3. **Animations**:
   - `keyframes` for the boot sequence text flying by.
   - `opacity` transitions for the auto-login phase.
4. **Hardware Simulation**: Replace the `oldTypewriterSprite.svg` with a custom CSS/SVG monitor bezel.

## Architecture & File Structure
- `src/components/InterpolTerminal/`: (New) Component to isolate the intro logic.
- `src/assets/audio/`: Add new electronic beep SFX.
- `src/components/GameScreen/GameScreen.styles.ts`: Refactor `TypewriterContainer` and `TypingArea`.

## Phasing
1. **Phase 1: Component Infrastructure**: Build the `InterpolTerminal` container and styling.
2. **Phase 2: Boot Logic**: Implement the new scrolling diagnostic messages.
3. **Phase 3: Migration**: Swap the old typewriter intro in `GameScreen.tsx` for the new `InterpolTerminal`.
4. **Phase 4: Multi-media**: Add sounds and fix mobile scaling issues specifically for the monitor area.

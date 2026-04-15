# Implementation Plan: Mobile Responsiveness Overhaul

## Technical Context
- **Framework**: React 18, TypeScript.
- **Styling**: Styled Components.
- **Core Files**: `src/components/`, `src/styles/` (global styles).

## Design Decisions
1. **Breakpoint Strategy**: Define a standard `breakpoints.ts` utility.
   - Mobile: `< 768px`
   - Tablet: `768px - 1024px`
   - Desktop: `> 1024px`
2. **Layout Transformation**: 
   - Shift from horizontal dashboard (Desktop) to vertical stack (Mobile).
   - Use `z-index` and overlay for complex menus if space is tight.
3. **Typography**: Implement fluid typography using `clamp(1rem, 2vw, 1.5rem)` to ensure readability.
4. **The "Clue" Fix**: Ensure the Clue display container uses `display: flex; flex-direction: column; overflow-y: auto;` with a fixed max-height on mobile.

## Architecture & File Structure
- `src/styles/theme.ts`: Add breakpoint tokens.
- `src/components/Common/ResponsiveContainer.tsx`: High-level wrapper for adaptive layouts.
- Component-level updates:
  - `TravelTerminal`: Refactor grid to single-column on mobile.
  - `ClueDisplay`: Fix overflow and padding.
  - `Navigation`: Implement mobile-specific drawer/tab bar.

## Phasing
1. **Phase 1: Foundation**: Global styles and breakpoint utilities.
2. **Phase 2: Global Layout**: Update the main App wrapper to be responsive.
3. **Phase 3: Component Deep-Dive**: Individually refactor each screen (Travel, Clue, Dossier).
4. **Phase 4: Polish**: Touch interactions, animations, and cross-browser testing.

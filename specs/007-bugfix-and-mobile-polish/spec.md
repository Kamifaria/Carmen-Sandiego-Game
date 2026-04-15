# Specification: Mobile Polish & NPC Asset Fixes

## Overview
Address remaining UI inconsistencies on mobile devices, fix NPC image loading errors, and resolve the "wrong criminal" data mismatch in the arrest finale.

## Functional Requirements
1. **Full Mobile Audit**:
   - Login & Register pages: Form elements must be centered and full-width on screens < 480px.
   - Lobby page: Destination cards and "Start Mission" button must scale properly.
   - Game Screen: Ensure the Terminal, Options, and Bottom Bar don't overlap.
2. **NPC Asset Correction**:
   - Ensure `banker.png`, `librarian.png`, `pilot.png`, and a fallback `merchant.png` are correctly mapped in `clueService.ts`.
   - Update `WitnessPortrait` to handle broken image links gracefully (using an avatar silhouette as fallback).
3. **Arrest Data Fix**:
   - Ensure `ArrestModal` receives the `villain` object that matches the current active investigation, not a stale or randomized one.
   - Persist the total cases resolved across the entire app (Login -> Game -> Win).

## User Scenarios
- **Scenario 1**: User plays on an iPhone. The login form is wide enough for thumbs, and icons are clear.
- **Scenario 2**: User investigates a "Banco". The `banker.png` portrait appears correctly. If the image is missing, a "Unknown Informant" generic icon appears.

## Success Criteria
- [ ] No 404 errors for NPC images in the console.
- [ ] The name in `ArrestModal` matches the name in the `BottomMessage` arrest notification.
- [ ] 100% Google Lighthouse mobile accessibility score (target).

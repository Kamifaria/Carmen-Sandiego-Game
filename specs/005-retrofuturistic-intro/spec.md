# Specification: Retrofuturistic Interpol Terminal Intro

## Overview
Replace the legacy typewriter-based introduction with a high-immersion, retrofuturistic digital terminal. This new interface will simulate a "booting" sequence into the Interpol Global Database.

## Functional Requirements
- **Boot Sequence**: A brief (2-3 second) animation showing diagnostic text (e.g., `CORE_INIT: OK`, `NET_SYNCING...`).
- **Authorization Layer**: A login prompt simulation that "auto-logs" the user in.
- **Terminal Messaging**: Messages must appear with a vintage "phosphor" glow and scanline effect.
- **Interactivity**: The user can skip individual messages by clicking, but the overall "digital vibe" must persist.
- **Assets**: Use a custom `InterpolTerminal.svg` background instead of the current typewriter sprite.

## User Scenarios
- **Scenario 1**: User starts a new game. Instead of paper and keys, the screen flickers green, text scrolls fast, and a "WARNING: CLASSIFIED DATA" stamp appears digitally.
- **Scenario 2**: The transition from the intro to the main game area is a digital "wipe" or "zoom into the map" effect.

## Success Criteria
- [ ] No typewriter-specific assets (paper, sounds) in the new intro.
- [ ] 100% responsiveness on mobile (text must scale within the "monitor" area).
- [ ] Audio sync: Electronic "data" sounds match text appearing.

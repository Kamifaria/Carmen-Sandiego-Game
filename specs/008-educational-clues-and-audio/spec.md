# Specification: Educational Clues & Audio Immersion

## Overview
Re-introduce the classic Carmen Sandiego educational DNA by upgrading the clue system with real-world geographic/cultural facts and adding immersive ambient sounds for each city.

## Functional Requirements
1. **Dynamic Educational Clues**:
   - Update `localUtils.ts` to include a `culturalFacts` array for each location.
   - Modify `clueService.ts` to generate clues based on these facts (e.g., "The suspect asked about the currency [CURRENCY] used in [CITY]").
2. **City-Specific Ambient Audio**:
   - Play a short ambient loop or sound effect unique to the current city category (e.g., Urban, Coastal, European, Asian).
   - Audio must trigger on city arrival and loop softly.
3. **Investigation Sounds**:
   - Small "Scanning" or "Digital Typing" sounds for the Interpol Terminal and Clues Computer.

## User Scenarios
- **Scenario 1**: In Paris, the witness says "I saw them reading a book about the [fact: Eiffel Tower]".
- **Scenario 2**: When traveling to Tokyo, a short "Zen garden" or "Busy Shibuya" ambient sound plays in the background.

## Success Criteria
- [ ] At least 3 unique cultural facts for each of the 10+ locations.
- [ ] No audio overlap when traveling quickly between cities.
- [ ] Mute/Unmute toggle for player convenience.

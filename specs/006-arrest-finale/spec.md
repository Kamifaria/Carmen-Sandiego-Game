# Specification: Cinematic Arrest Finale & Promotion System

## Overview
Transform the current generic "Win" screen into a multi-stage cinematic sequence that rewards the player for successfully capturing a criminal with a warrant.

## Functional Requirements
1. **The Arrest Bust**: A visual overlay when the criminal is found, showing their portrait with a "CAUGHT" stamp and a "Handcuffed" icon.
2. **The Verdict**: A dedicated screen showing the criminal's sentence (e.g., "Sentenced to 15 years in jail for the theft of the Death Note").
3. **The Promotion System**:
   - Track `casesResolved` in local state/storage.
   - Define detective ranks: Rookie, Investigator, Senior Agent, Ace Detective.
   - Show a badge animation when the player reaches a new rank milestone.
4. **The Final Score**: Display total time spent and number of destinations visited.

## User Scenarios
- **Scenario 1**: User finds the suspect in Melbourne after issuing a warrant. A siren sound triggers (visual), the "CAUGHT" stamp slams onto the suspect's face, and a "Great Job!" message from Interpol appears.
- **Scenario 2**: User reaches 5 solved cases. A special "PROMOTED" modal appears showing a new gold badge.

## Success Criteria
- [ ] No instant "Game Over" message; the sequence must feel like a story conclusion.
- [ ] Ranks are persistent across game sessions (using localStorage).
- [ ] Visual assets (badge, stamp) match the retrofuturistic aesthetic.

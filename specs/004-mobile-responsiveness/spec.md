# Specification: Full Mobile Responsiveness

## Overview
Adapt the entire Carmen Sandiego game interface to be fully responsive, ensuring a premium "Travel Terminal" experience on mobile devices (iOS/Android) without compromising the desktop version.

## Functional Requirements
- **Responsive Layout**: The main game screen, Travel Terminal, and Investigation panels must automatically adjust to the screen size.
- **Clue Visibility**: All clues ("pistas") must be visible and scrollable if they exceed the container height. No text should be cut off.
- **Touch-Friendly UI**: Increase button sizes and touch targets to at least 44x44 pixels.
- **Navigation**: The navigation menu must transform into a mobile-friendly toggle (hamburger or tab bar) if needed.
- **Dossier & Database**: Full availability of the criminal database and suspect dossier on small screens.

## User Scenarios
- **Scenario 1**: User opens the game on an iPhone. They see a centered, high-tech terminal interface. Navigation is clear, and the map/destination screen is easy to interact with via touch.
- **Scenario 2**: User receives a clue from a witness. The text is long, so a subtle scrollbar appears inside the terminal display, allowing them to read the entire fact.

## Success Criteria
- [ ] No horizontal scrolling on mobile devices (width < 768px).
- [ ] All interactive elements are reachable within one thumb's reach.
- [ ] 0% text truncation in the clue/witness system.
- [ ] Lighthouse Accessibility score > 90.

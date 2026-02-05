# Project Blueprint: Singapore Toto Number Generator with Enhanced Visuals and Audio

## Project Overview
This project is a simple web-based application that generates lucky numbers for Singapore Toto, includes a day/night mode for user comfort, and features enhanced visual and audio feedback. It adheres to the official Singapore Toto rules, generating 6 unique numbers between 1 and 49. The application is built using modern web standards (HTML, CSS, JavaScript) without external frameworks.

## Current Features
- **Singapore Toto Number Generation:** Generates 6 unique numbers between 1 and 49.
- **User Interface:** Simple button to trigger generation and display area for results.
- **Day and Night Mode:** Allows users to switch between a light and dark theme, with their preference saved locally.
- **Random Number Colors:** Each generated Toto number circle has a unique, random background color.
- **Sun/Moon Icons for Theme Toggle:** The theme toggle button now uses sun and moon icons to indicate the current mode.
- **Moving Currency Notes Animation:** Placeholder currency notes (gold divs) continuously move across the screen.

## Plan for Current Change: Add Moving Currency Notes Animation

### Objective
To add a visually engaging animation of currency notes moving across the screen as a background element or as a celebratory effect. This will enhance the "lucky" theme of the application.

### Steps
1.  **Update `blueprint.md`:** Document the new "Moving Currency Notes" feature and the steps to implement it. (Completed)
2.  **Modify `index.html`:**
    *   Add a new container element (e.g., `<div id="currency-notes-container"></div>`) to hold the animated currency notes. This container should be positioned appropriately (e.g., as a background). (Completed)
3.  **Modify `style.css`:**
    *   Define CSS keyframe animations (e.g., `fly-across`) that simulate currency notes moving from one side of the screen to the other, potentially with varying speeds, rotations, and sizes.
    *   Style the `currency-notes-container` to cover the screen and ensure notes are clipped correctly.
    *   Add basic styling for placeholder currency note elements. (Completed)
4.  **Modify `main.js`:**
    *   Implement a function that dynamically creates `div` elements representing currency notes.
    *   Attach the CSS animation to these dynamically created elements.
    *   Manage the creation and removal of these elements to ensure a continuous or triggered animation. This will include randomizing starting positions, delays, and animation durations for a more natural effect. (Completed)
    *   (Future step, after assets are provided): Integrate actual currency note images into these animated elements.

## Pending Asset Requirement:
I am still awaiting the user to provide URLs for free-to-use images of dollar notes from different countries and a coin sound effect. These are necessary to fully implement the previous request and for the current animation feature.
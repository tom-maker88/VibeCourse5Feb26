# Project Blueprint: Singapore Toto Number Generator with Day/Night Mode

## Project Overview
This project is a simple web-based application that generates lucky numbers for Singapore Toto and includes a day/night mode for user comfort. It adheres to the official Singapore Toto rules, generating 6 unique numbers between 1 and 49. The application is built using modern web standards (HTML, CSS, JavaScript) without external frameworks.

## Current Features
- **Singapore Toto Number Generation:** Generates 6 unique numbers between 1 and 49.
- **User Interface:** Simple button to trigger generation and display area for results.
- **Day and Night Mode:** Allows users to switch between a light and dark theme, with their preference saved locally.

## Plan for Current Change: Implement Day and Night Mode

### Objective
To add a toggleable day and night mode feature, allowing users to switch between a light and dark theme, with their preference saved locally.

### Steps
1.  **Update `blueprint.md`:** Document the new "Day and Night Mode" feature and the steps to implement it. (Completed)
2.  **Modify `index.html`:** Add a toggle switch (e.g., a checkbox or button) for the day/night mode. (Completed)
3.  **Modify `style.css`:**
    *   Define CSS variables for colors (e.g., `--background-color`, `--text-color`).
    *   Create a `body.dark-mode` (or similar selector) to override these variables for the dark theme. (Completed)
4.  **Modify `main.js`:**
    *   Add an event listener to the toggle switch.
    *   Implement a function to toggle the `dark-mode` class on the `body` element.
    *   Use `localStorage` to save and load the user's theme preference. (Completed)
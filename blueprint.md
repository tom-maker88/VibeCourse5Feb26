# Project Blueprint: Singapore Toto Number Generator with Day/Night Mode and Enhancements

## Project Overview
This project is a simple web-based application that generates lucky numbers for Singapore Toto and includes a day/night mode for user comfort. It adheres to the official Singapore Toto rules, generating 6 unique numbers between 1 and 49. The application is built using modern web standards (HTML, CSS, JavaScript) without external frameworks.

## Current Features
- **Singapore Toto Number Generation:** Generates 6 unique numbers between 1 and 49.
- **User Interface:** Simple button to trigger generation and display area for results.
- **Day and Night Mode:** Allows users to switch between a light and dark theme, with their preference saved locally.
- **Random Number Colors:** Each generated Toto number circle has a unique, random background color.
- **Sun/Moon Icons for Theme Toggle:** The theme toggle button now uses sun and moon icons to indicate the current mode.

## Plan for Current Change: Add Random Colors to Numbers and Sun/Moon Icons to Theme Toggle

### Objective
To enhance the visual appeal by adding random background colors to the generated Toto numbers and to improve the user experience of the day/night mode toggle by replacing text with intuitive sun/moon icons.

### Steps
1.  **Update `blueprint.md`:** Document the new enhancements and the steps to implement them. (Completed)
2.  **Modify `index.html`:**
    *   Remove the text "Toggle Day/Night Mode" from the theme toggle button.
    *   Add placeholder `<i>` tags or `<span>` elements for sun and moon icons within the theme toggle button. (Completed)
3.  **Modify `style.css`:**
    *   Add CSS rules to display the sun/moon icons based on the `dark-mode` class, potentially using pseudo-elements or background images.
    *   Ensure the icon styling is appropriate for both day and night modes. (Completed)
4.  **Modify `main.js`:**
    *   Modify the `generateTotoNumbers` function's display logic to assign a random background color to each generated number circle. This can be done by generating an HSL color or a hex color code.
    *   Modify the theme toggle logic to update the visibility or class of the sun/moon icons.
    *   Add a function to generate a random hex color. (Completed)
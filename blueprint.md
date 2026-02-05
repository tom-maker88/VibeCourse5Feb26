# Project Blueprint: Singapore Toto Number Generator with Enhanced Visuals, Audio, and Chinese Zodiac Lucky Numbers

## Project Overview
This project is a simple web-based application that generates lucky numbers for Singapore Toto, incorporating a day/night mode, enhanced visual/audio feedback, and a new feature for Chinese Zodiac animal-based lucky number generation. It adheres to the official Singapore Toto rules, generating 6 unique numbers between 1 and 49. The application is built using modern web standards (HTML, CSS, JavaScript) without external frameworks.

## Current Features
- **Singapore Toto Number Generation:** Generates 6 unique numbers between 1 and 49.
- **User Interface:** Simple button to trigger generation and display area for results.
- **Day and Night Mode:** Allows users to switch between a light and dark theme, with their preference saved locally.
- **Random Number Colors:** Each generated Toto number circle has a unique, random background color.
- **Sun/Moon Icons for Theme Toggle:** The theme toggle button uses sun and moon icons.
- **Moving Currency Notes Animation:** Placeholder currency notes (gold divs) continuously move across the screen.
- **Chinese Zodiac Lucky Number Selection:** Users can select their Chinese Zodiac animal, influencing the generated Toto numbers.

## Plan for Current Change: Add Chinese Zodiac Animal Selection and Lucky Number Correlation

### Objective
To introduce a feature allowing users to select their Chinese Zodiac animal, and then use the associated lucky numbers to influence the generation of Toto numbers, making the output more personalized and thematic.

### Steps
1.  **Update `blueprint.md`:** Document the new "Chinese Zodiac Lucky Numbers" feature and the steps to implement it. (Completed)
2.  **Research Chinese Zodiac Lucky Numbers:** Find reliable sources for lucky numbers associated with each Chinese Zodiac animal, specifically within the 1-49 range. (Completed)
3.  **Modify `index.html`:**
    *   Add a label and a dropdown (`<select>`) element for users to choose their Chinese Zodiac animal.
    *   Populate the dropdown with common Zodiac animals. (Completed)
4.  **Modify `style.css`:** Add styling for the new dropdown and its label. (Completed)
5.  **Modify `main.js`:**
    *   Create a JavaScript object or map containing Chinese Zodiac animals as keys and arrays of their lucky numbers (1-49) as values.
    *   Get a reference to the Zodiac animal selection dropdown.
    *   Modify the `generateTotoNumbers()` function:
        *   Retrieve the selected Zodiac animal from the dropdown.
        *   Access its associated lucky numbers.
        *   Implement a number generation strategy that prioritizes or includes a certain number of these lucky numbers (e.g., 2-3 lucky numbers) in the final set of 6, ensuring all numbers are unique and within 1-49. The remaining numbers will be randomly selected.
        *   Handle cases where not enough lucky numbers are available or they fall outside the 1-49 range. (Completed)

## Pending Asset Requirement:
I am still awaiting the user to provide URLs for free-to-use images of dollar notes from different countries and a coin sound effect. These are necessary to fully implement previous requests and enhance the currency notes animation.
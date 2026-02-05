# Project Blueprint: Singapore Toto Number Generator with Enhanced Features

## Project Overview
This project is a simple web-based application that generates lucky numbers for Singapore Toto, incorporates a day/night mode, enhanced visual/audio feedback, Chinese Zodiac animal-based lucky number generation, and historical data insights. It adheres to the official Singapore Toto rules, generating 6 unique numbers between 1 and 49. The application is built using modern web standards (HTML, CSS, JavaScript) without external frameworks.

## Current Features
- **Singapore Toto Number Generation:** Generates 6 unique numbers between 1 and 49.
- **User Interface:** Simple button to trigger generation and display area for results.
- **Day and Night Mode:** Allows users to switch between a light and dark theme, with their preference saved locally.
- **Random Number Colors:** Each generated Toto number circle has a unique, random background color.
- **Sun/Moon Icons for Theme Toggle:** The theme toggle button uses sun and moon icons.
- **Moving Currency Notes Animation:** Placeholder currency notes (gold divs) continuously move across the screen.
- **Chinese Zodiac Lucky Number Selection:** Users can select their Chinese Zodiac animal, influencing the generated Toto numbers.
- **Historical Number Occurrences:** Displays the frequency of individual winning numbers from historical Singapore Pools data.

## Plan for Current Change: Add Historical Data and Number Occurrence

### Objective
To provide users with insights into historical Singapore Toto winning number occurrences, enabling more informed selection, and to add a dedicated UI segment for this data.

### Steps
1.  **Update `blueprint.md`:** Document the new "Historical Data and Number Occurrence" feature and the steps to implement it. (Completed)
2.  **Research Historical Toto Data:** Find a *small, static sample* of Singapore Pools Toto winning numbers or frequency data. I will explicitly state that real-time scraping is not possible. If no suitable data is found, I will use a simulated dataset. (Completed - using sample data)
3.  **Modify `index.html`:**
    *   Add a new section (e.g., `<div class="historical-data-section">`) to display a table or list of number occurrences. (Completed)
4.  **Modify `style.css`:** Add styling for the new historical data section, including table/list formatting. (Completed)
5.  **Modify `main.js`:**
    *   Create a data structure to store the historical winning numbers (or a simulated sample if external data is unavailable).
    *   Implement a function to calculate the occurrence count for each number (1-49) from this dataset.
    *   Display these calculated occurrences in the new HTML section, sorted by frequency (descending). (Completed)

## Pending Asset Requirement:
I am still awaiting the user to provide URLs for free-to-use images of dollar notes from different countries and a coin sound effect. These are necessary to fully implement previous requests and enhance the currency notes animation.
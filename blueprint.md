# Project Blueprint: Singapore Toto Number Generator with Enhanced Features and Multi-language Support

## Project Overview
This project is a simple web-based application that generates lucky numbers for Singapore Toto, incorporates a day/night mode, enhanced visual/audio feedback, Chinese Zodiac animal-based lucky number generation, historical data insights, a user feedback form, and multi-language support. It adheres to the official Singapore Toto rules, generating 6 unique numbers between 1 and 49. The application is built using modern web standards (HTML, CSS, JavaScript) without external frameworks.

## Current Features
- **Singapore Toto Number Generation:** Generates 6 unique numbers between 1 and 49.
- **User Interface:** Simple button to trigger generation and display area for results.
- **Day and Night Mode:** Allows users to switch between a light and dark theme, with their preference saved locally.
- **Random Number Colors:** Each generated Toto number circle has a unique, random background color.
- **Sun/Moon Icons for Theme Toggle:** The theme toggle button uses sun and moon icons.
- **Moving Currency Notes Animation:** Placeholder currency notes (gold divs) continuously move across the screen.
- **Chinese Zodiac Lucky Number Selection:** Users can select their Chinese Zodiac animal, influencing the generated Toto numbers.
- **Historical Number Occurrences:** Displays the frequency of individual winning numbers from historical Singapore Pools data.
- **User Feedback Form:** A form to collect user feedback, submitting to a Formspree endpoint.

## Plan for Current Change: Add Spanish, Arabic, and Thai Language Options

### Objective
To implement multi-language support (i18n) for Spanish, Arabic, and Thai, allowing users to switch the application's interface language, including handling Right-to-Left (RTL) text direction for Arabic.

### Steps
1.  **Update `blueprint.md`:** Document the new "Multi-language Support (i18n)" feature and the steps to implement it. (Completed)
2.  **Modify `index.html`:**
    *   Add a language selector (e.g., a dropdown `<select>`) in the header/top section of the application.
    *   Assign unique `id` attributes or `data-i18n` attributes to all static text elements that need to be translated.
3.  **Modify `style.css`:**
    *   Add basic styling for the language selector.
    *   Define an `.rtl` class to apply `direction: rtl` and `text-align: right` to the `body` element when an RTL language (Arabic) is selected.
4.  **Modify `main.js`:**
    *   Create a `translations` object that stores key-value pairs for each translatable text string, organized by language (e.g., `en`, `es`, `ar`, `th`). I will use placeholder translations or simple indicators for now.
    *   Implement a `switchLanguage(langCode)` function that:
        *   Iterates through all elements with translation keys and updates their `textContent` based on the `translations` object and `langCode`.
        *   Adds or removes the `.rtl` class on the `document.body` or `document.documentElement` based on whether `langCode` is 'ar'.
        *   Saves the selected `langCode` to `localStorage` for persistence.
    *   On `DOMContentLoaded`, load the saved language from `localStorage` (defaulting to 'en' if none) and call `switchLanguage` to apply it.
    *   Add an event listener to the language selector to call `switchLanguage` when the user changes their selection.

## Pending Asset Requirement:
I am still awaiting the user to provide URLs for free-to-use images of dollar notes from different countries and a coin sound effect. These are necessary to fully implement previous requests and enhance the currency notes animation.
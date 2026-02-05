# Project Blueprint: Singapore Toto Number Generator with Enhanced Features and Feedback Form

## Project Overview
This project is a simple web-based application that generates lucky numbers for Singapore Toto, incorporates a day/night mode, enhanced visual/audio feedback, Chinese Zodiac animal-based lucky number generation, historical data insights, and a user feedback form. It adheres to the official Singapore Toto rules, generating 6 unique numbers between 1 and 49. The application is built using modern web standards (HTML, CSS, JavaScript) without external frameworks.

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

## Plan for Current Change: Add User Feedback Form

### Objective
To provide users with a simple way to submit feedback directly from the application using a Formspree endpoint.

### Steps
1.  **Update `blueprint.md`:** Document the new "User Feedback Form" feature and the steps to implement it. (Completed)
2.  **Modify `index.html`:**
    *   Add a new section (e.g., `<div class="feedback-form-section">`) for the feedback form.
    *   Inside this section, create a `<form>` element with input fields for `name`, `email`, `message` (textarea), and a `submit` button.
    *   Set the form's `action` to `https://formspree.io/f/mkovwrgl` and `method` to "POST". (Completed)
3.  **Modify `style.css`:** Add styling for the new feedback form elements to ensure a visually appealing and consistent design. (Completed)
4.  **Modify `main.js`**: (Optional) For a direct Formspree integration, client-side JavaScript is not strictly necessary for submission, but could be added later for validation or custom success messages. For now, I will rely on the default form submission behavior. (No changes needed in main.js for this step)

## Pending Asset Requirement:
I am still awaiting the user to provide URLs for free-to-use images of dollar notes from different countries and a coin sound effect. These are necessary to fully implement previous requests and enhance the currency notes animation.
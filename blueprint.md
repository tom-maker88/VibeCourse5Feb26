# Smart Property Investors App Blueprint

## Overview

This application is a web-based platform for prospective property investors in Singapore. It provides a curated list of new property launches for 2026, community demand insights, and a lead generation system for property agents and related services. The app uses Firebase for authentication and database services.

## Style, Design, and Features

### Style & Design

*   **Typography:** Playfair Display for headings and Montserrat for body text.
*   **Color Scheme:** A dark mode theme with a toggle for light mode. The color palette is modern and professional, with a focus on readability.
*   **Layout:** A single-page application with a clear and intuitive layout. The main sections include:
    *   Header with application title and authentication controls.
    *   Community Demand Assessment with a bar chart.
    *   Property listings with interactive cards.
    *   Advertisements carousel.
    *   A list of free resources.
*   **Components:**
    *   **Property Cards:** Display property information, including an image, developer, recent transactions, target market, and voting buttons.
    *   **Ad Cards:** Display advertisements with a lead generation form.
    *   **Property Chart:** A bar chart visualizing community demand.
    *   **Modal:** A pop-up for displaying resale prices.

### Features

*   **Firebase Authentication:** Users can log in with their Google accounts.
*   **Community Demand Voting:** Logged-in users can vote on whether a property is a "Good Buy," "Fair Buy," or "Bad Buy."
*   **Real-time Database:** Property votes are stored and updated in real-time in Firestore.
*   **Lead Generation:** Users can submit their contact information through advertisement forms.
*   **Resale Price Viewer:** Users can view sample resale price data for a given district.
*   **Dark/Light Mode Toggle:** Users can switch between dark and light themes.

## Current Bug Fix Plan

1.  **Firebase Configuration:** The `firebaseConfig` object in `index.html` is using placeholder values. This is the most critical bug and needs to be replaced with a valid Firebase configuration.
2.  **`main.js` Module:** The `script` tag for `main.js` in `index.html` has a `type="module"` attribute, but the script is not an ES module. This will be removed.
3.  **Unused Firebase Script:** The script for Firebase Functions is included but not used. It will be removed to improve loading performance.
4.  **Firebase Initialization:** Initialize a new Firebase project to get the correct configuration and apply it to the `index.html` file.

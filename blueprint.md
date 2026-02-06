# Smart Property Investors: New Launches 2026 - Blueprint

## Overview

A sophisticated, visually appealing web and mobile application for Singapore-based property buyers. The application, inspired by PropertyGuru.com, targets high-income individuals by providing in-depth assessments of new property launches for 2026. Monetization is achieved through lead generation and advertising for various real estate and home-related services.

## Design and Style

*   **Theme**: Clean, luxurious, and premium, with an optional dark mode.
*   **Typography**: Elegant sans-serif fonts, such as Montserrat.
*   **Visuals**: High-resolution images from royalty-free sources (Unsplash, Pexels), subtle animations, and a responsive layout.
*   **Layout**: Modern, visually balanced, with clean spacing and a mobile-first approach.

## Features

### Main Dashboard Page (Home Screen)

*   **Property Launches**: A scrollable grid/list of new property launches for 2026.
    *   Each property is presented as a card with:
        *   Project Name and Developer.
        *   High-quality image.
        *   Summary of recent transactions (e.g., average price per sq ft).
        *   Target Market information.
        *   **Voting Section**: "Good Buy", "Fair Buy", "Bad Buy" buttons with real-time vote tallies.
        *   **"View Resale Prices" Button**: Opens a modal with historical transaction data for the district.
        *   **Demand Assessment Indicators**: Charts for transaction records, mortgage loan statistics, and online sentiment.
*   **Advertisement Section**: A horizontal carousel for monetizable ad slots.
    *   Property Agents (with lead form).
    *   Property Developers.
    *   Mortgage Brokers (with calculator widget).
    *   Interior Designers, Plumbers, Electricians.
*   **Free Information Sources Section**: A list of links to valuable resources.

### Backend and Automation

*   **Firebase Authentication**: For user logins.
*   **Firebase Firestore**: To store user votes, sentiment data, and leads.
*   **Firebase Cloud Functions**: To automate data fetching from public APIs.
*   **Monetization Tracking**: Logging of leads and ad clicks.

## Current Implementation Status

*   **Frontend Foundation:** `index.html`, `style.css`, and `main.js` have been created.
*   **Component-Based Architecture:** Reusable UI elements (`PropertyCard`, `AdCard`) are defined as Web Components in `components.js`.
*   **Styling:** A responsive layout with a dark mode theme is implemented using CSS variables. A toggle switch is functional.
*   **Data:** The application is currently populated with static, sample data for properties and advertisements.
*   **Interactivity:** The "View Resale Prices" button on property cards opens a modal window. The modal is functional but contains no data yet.
*   **Firebase:** Firebase SDKs and a placeholder configuration have been added to `index.html`. The `.idx/mcp.json` file is configured for Firebase server integration.

## Development Plan

1.  **Initial Setup (Completed):**
    *   Project structure created (`index.html`, `style.css`, `main.js`).
    *   Firebase `.idx/mcp.json` configured.
    *   Basic HTML layout and CSS styling applied.
    *   Placeholder content for properties and ads implemented.
2.  **Componentization & Theming (Completed):**
    *   Converted static HTML for property and ad listings into reusable Web Components (`<property-card>`, `<ad-card>`).
    *   Implemented a light/dark mode theme switcher using CSS variables.
3.  **Firebase Backend Integration (Next Steps):**
    *   Replace placeholder Firebase config in `index.html` with actual project credentials.
    *   Implement Firebase Authentication for optional user sign-in.
    *   Set up Firestore database rules.
    *   Connect the voting buttons to Firestore to record and display vote counts in real-time.
    *   Store lead generation form data from ads in Firestore.
4.  **Dynamic Data Integration:**
    *   Create a Firebase Cloud Function to fetch property data from a public API (e.g., URA, Data.gov.sg, or a mock API for now).
    *   Update the frontend to call this Cloud Function and dynamically populate the property listings.
    *   Implement the "View Resale Prices" modal to fetch and display relevant historical data from another API call.
5.  **Advanced Features & Refinement:**
    *   Integrate charting libraries (e.g., Chart.js) to display demand assessment indicators.
    *   Implement the lead generation forms and connect them to Firestore.
    *   Add subtle animations and transitions to enhance the user experience.
    *   Integrate Google AdSense placeholders into the advertisement slots.
6.  **Testing and Deployment:**
    *   Thoroughly test all features, including data fetching, authentication, and responsiveness.
    *   Deploy the final web application using Firebase Hosting.

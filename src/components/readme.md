# Crypto Tax Calculator Australia

A React application designed to simplify cryptocurrency tax calculations for Australian users. This app includes an interactive tax calculator, an FAQ section on cryptocurrency taxation, and a promotional Ads Banner for the **Konix** platform.

## Features

- **Crypto Tax Calculator**: Calculates taxes based on capital gains and user-selected annual income.
- **Ads Banner**: Highlights a promotional message for the Konix platform with a call-to-action to join.
- **FAQ Section**: Provides answers to frequently asked questions about cryptocurrency taxation in Australia.
- **Responsive Design**: Ensures compatibility with various devices and screen sizes.

## Components

1. **Home**: Main component containing the `TaxCalculator`, `AdsBanner`, and `Question` components.
2. **AdsBanner**: Displays a promotional banner with an animated GIF and "Join Now" button.
3. **Header**: Navigation header featuring Konix branding, navigation links, and a responsive menu.
4. **InputField**: Custom input field used within the Tax Calculator for user data entry.
5. **Question**: FAQ section where each question can expand to reveal its answer.
6. **TaxCalculator**: Main tax calculation component where users can input purchase, sale prices, and expenses to calculate capital gains and tax payable.

## Project Structure

```plaintext
src
├── assets                 # Contains static assets like images and logos
├── components
│   ├── AdsBanner          # Ads banner component
│   ├── Header             # Header/navigation bar component
│   ├── InputField         # Reusable input field component
│   ├── Question           # FAQ component
│   └── TaxCalculator      # Tax calculation component
└── pages
    └── Home               # Main page integrating the components

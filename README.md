# Crypto Tax Calculator Australia

This project is a crypto tax calculator designed for Australian users. It calculates capital gains and provides income tax estimations based on user inputs, helping users understand their tax obligations for cryptocurrency transactions. The project also includes an FAQ section and an animated ads banner component for an enhanced user experience.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure] (#project-structure)
- [Installation](#installation)
- [Components Overview](#components-overview)


## Demo
[Add a link to a deployed version of the project, if available]

## Features
- **Crypto Tax Calculation**: Calculates net capital gains and applies a 50% discount on long-term gains.
- **Australian Tax Rate Integration**: Based on Australian tax brackets, displays the estimated tax to be paid.
- **User-Friendly Input Forms**: Input fields for purchase price, sale price, expenses, and income selection.
- **Dynamic FAQ Section**: Interactive FAQ section covering common questions related to crypto taxation in Australia.
- **Ads Banner Component**: Engaging ads banner with animations to attract users.

## Technologies Used
- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: Icons for UI elements.
- **Material UI**: Used in additional components for styling and layout.

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

```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-tax-calculator.git


2. Navigate into the project directory:
   ```bash
   cd crypto-tax-calculator

3. Install dependencies:
   ```bash
   npm install


## Components Overview

### Home
**Description:**  
The main landing page of the app, featuring the tax calculator, an advertisement banner, and an FAQ section.

**Components Used:**
- `TaxCalculator`
- `AdsBanner`
- `Question`

---

### TaxCalculator
**Description:**  
Handles the core tax calculations, including the differentiation between long-term and short-term capital gains.

**Inputs:**
- **Purchase Price**: The initial price at which the asset was purchased.
- **Sale Price**: The price at which the asset is sold.
- **Expenses**: Any expenses incurred during the purchase or sale of the asset.
- **Annual Income Bracket**: The user’s annual income, which may affect tax calculations.

---

### AdsBanner
**Description:**  
Displays an animated GIF banner that encourages user engagement with a call-to-action.

---

### Question
**Description:**  
An FAQ section that provides answers to common questions about crypto taxation in Australia.

---
# AI Stock Analysis Website

This project is an AI-powered stock analysis website that provides users with insights and information about various stocks. It utilizes React for the frontend and fetches stock data from an external API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Services](#services)
- [Styles](#styles)
- [Utilities](#utilities)

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd ai-stock-analysis-website
npm install
```

## Usage

To run the application, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

## Components

- **StockCard**: A functional component that displays stock information. It accepts `stockData` and `onClick` props.

## Services

- **API**: Contains functions for fetching stock data from an external API. The main function is `fetchStockData`, which returns a promise resolving to stock data.

## Styles

The styles for the application are defined in `src/styles/index.css`, which controls the layout and appearance of the components.

## Utilities

Utility functions, such as `formatCurrency`, are provided in `src/utils/index.ts` to assist with formatting numbers as currency strings.

## License

This project is licensed under the MIT License.
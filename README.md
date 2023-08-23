# Recipe Search App

This is a simple React app that allows users to search for recipes using the Edamam API. Users can enter a search query, and the app will display a list of recipes matching that query, along with their ingredients and nutritional information.

## Features

- Search for recipes based on a specific query.
- View a list of recipes along with their titles, ingredients, and calorie information.

## Usage

1. Clone the repository:

   ```bash
   git clone <repository-url>

## Install dependencies:

`npm install`

## Obtain API Keys:

You'll need to obtain an API key and app ID from Edamam by signing up on their website.

## Set API Keys:

Replace the API_KEY and APP_ID values in App.js with your Edamam API key and app ID:

```jsx
Copy code```
const API_KEY = 'your-api-key';
const APP_ID = 'your-app-id';```

## Start the app:


`npm start`

## Enter Search Query:

In the app's search bar, enter a query for the recipe you want to search for (e.g., "steak").

## View Recipes:

The app will display a list of recipes matching the search query, along with their ingredients and calorie information.

# Components

## App.js

The main component that handles the API request and displays the search form and list of recipes.

## Recipe.js

A component that displays individual recipe details, including title, ingredients, calories, and an image.

## Technologies Used

React
Vite
Edamam API






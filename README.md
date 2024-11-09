# 🍲 MERN Recipe Finder

A recipe-finding web application built using the MERN (MongoDB, Express, React, Node.js) stack. This project features a simple registration and login system and allows users to search for recipes by name, cuisine type, and dietary restrictions using the Spoonacular API.

## Features

- **User Authentication**: Register and log in securely using JWT Web Token and Cookie Storage.
- **Recipe Search**: Search recipes by name, cuisine type, or dietary restrictions.
- **Dietary Options**: Search based on dietary preferences, such as gluten-free, vegetarian, vegan, and more.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **External API**: [Spoonacular API](https://spoonacular.com/food-api) for recipe data

## Prerequisites

To run this project locally, make sure you have the following installed:

- **Node.js**
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/atlas/database))
- **Spoonacular API Key**: Sign up for an API key on [Spoonacular's website](https://spoonacular.com/food-api).

## Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/mern-recipe-finder.git
   cd mern-recipe-finder
   ```

2. **Install Dependencies**

Backend (Express and Node.js):

```bash
cd server
npm install
```

Frontend (React):

```bash
cd client
npm install
```

3. **Environment Variables**

In the root of the backend directory, create a .env file and add your environment variables:

MONGO_URI=your-mongodb-uri
PORT=5000
SECRET=your-jwt-secret
API_KEY=your-spoonacular-api-key

4. **Run the Application**

Backend:

```bash
cd server
npm start
```

Frontend:

```bash
cd client
npm start
```

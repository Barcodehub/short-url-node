# ShortURL - URL Shortening Service

ShortURL is a robust and efficient backend application for shortening URLs, built with Node.js, Express, and MongoDB. This application provides a RESTful API that allows users to shorten long URLs and redirect to the original URLs using generated short codes.

## Features

- Shortening of long URLs
- Redirection to original URLs
- Generation of unique short codes
- Persistent storage in MongoDB
- RESTful API

## Prerequisites

- Node.js (v14.0.0 or higher)
- MongoDB

## Installation

Install dependencies:
 ```
npm install
 ```

Create a `.env` file in the root of the project and add the following environment variables:
 ```
PORT=3000
MONGO_URI=mongodb://localhost:27017/shorturl
 ```
Make sure to replace the MongoDB URI with the correct one for your environment.

## Starting the server

For development:
npm run dev

The server will start in the PORT `http://localhost:3000` (or the port you specified in the `.env` file).

## API Endpoints

  Shorten a URL
   - Method: POST
   - Path: `PORT/shorten`
      ```
    Body: `{
    "url": "https://www.example.com/long-url-to-shorten"
    }`
   
     ```
   Redirect to original URL
   - Method: GET
   - Path: `PORT/:shortCode`
   - Response: Redirection to the original URL

## Technologies Used

- Node.js
- Express.js
- MongoDB
- shortid

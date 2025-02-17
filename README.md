# NODE APP USING NodeJs/Express and MySQL

## Overview of the project

This an MVC (Model-View-Controller) app using Node.js, Express, EJS, and MySQL2 involves 
structuring app into three main components:

1. Model: Handles data and business logic (interacts with the database).
2. View: Handles the presentation layer (renders HTML using EJS).
3. Controller: Handles user input, processes requests, and interacts with the Model and View.

## BASIC COMMANDS

Initialize a new and navigate to Node.js project and Install all required dependencies:

``bash
> mkdir node-mvc-app
> cd node-mvc-app
> npm init -y
> npm install express ejs mysql2
``

## Project folder structure:

node-mvc-app/
├── controllers/
    ├── ProductController.js
├── models/
    ├── Product.js
├── views/
    ├── products
        ├── create.ejs
        ├── index.ejs
├── routes/
    ├── ProductRoutes.js
├── public/
├── app.js
├── .gitignore
├── package.json
└── README.md
>>>>>>> eecf5b3 (Just updated README file)

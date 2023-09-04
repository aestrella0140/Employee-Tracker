const inquirer = require('inquirer');


const express = require('express');
// import require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // username 
        user: '',
        // find a way to not put personal mysql password
        password: '',
        database: ''
    },
    // create a database then add name before database
    console.log('connected to database')
);

// inquirer prompt
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "table",
            name: "",
            
        }
    ])
}
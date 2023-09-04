const inquirer = require("inquirer");

const fs = require('fs').promises;

const express = require("express");
// import require mysql2
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // username
    user: "",
    // find a way to not put personal mysql password
    password: "",
    database: "",
  },
  // create a database then add name before database
  console.log("connected to database")
);

// inquirer prompt
const promptUser = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "choices",
      message: "Please select an option",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
      ]
    }
  ])
// promise return
  .then((answers) => {
    const { choices } = answers;
    if(answers === "view all departments") {
        viewAllDepartments();
    }else if(answers === "view all roles") {
        viewAllRoles();
    }else if(answers === "view all employees") {
        viewAllEmployees();
    }else if(answers === "add a department") {
        addADepartment();
    }else if(answers === "add a role") {
        addARole();
    }else if(answers === "add an employee") {
        addAnEmployee();
    }else if(answers === "update an employee role") {
        updateAnEmployeeRole();
    }
  })
};
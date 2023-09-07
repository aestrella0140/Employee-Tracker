const inquirer = require("inquirer");

// import require mysql2
const mysql = require("mysql2");



// middleware

// connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // username
    user: "root",
    // find a way to not put personal mysql password
    password: "Flagstaff1100140",
    database: "employees_db",
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
    if(choices === "view all departments") {
        viewAllDepartments();
    }else if(choices === "view all roles") {
        viewAllRoles();
    }else if(choices === "view all employees") {
        viewAllEmployees();
    }else if(choices === "add a department") {
        addADepartment();
    }else if(choices === "add a role") {
        addARole();
    }else if(choices === "add an employee") {
        addAnEmployee();
    }else if(choices === "update an employee role") {
        updateAnEmployeeRole();
    }
  })
};
promptUser();

async function viewAllDepartments() {
  const [allDepartment] = await db.promise().query(`SELECT * FROM department`);
  console.table(allDepartment);
}

async function viewAllRoles() {
  const [allRole] = await db.promise().query(`SELECT role.job_title, role.salaries, department.department_name FROM role LEFT JOIN department ON  role.department_id = department.id`);
  console.table(allRole);
}

async function viewAllEmployees() {
  const [allEmployees] = await db.promise().query(`SELECT employee.first_name, employee.last_name, role.job_title, role.salaries, department.department_name FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON  role.department_id = department.id;`);
  console.table(allEmployees);
}
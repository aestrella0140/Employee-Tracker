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
  const [allEmployees] = await db.promise().query(`SELECT employee.first_name, employee.last_name, role.job_title, role.salaries, department.department_name, employee.manager_id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON  role.department_id = department.id;`);
  console.table(allEmployees);
}

async function addADepartment() {
const addADepartmentPrompt = await inquirer.prompt([
  {
    type: "input",
    name: "department_name",
    message: "What is the name of the department you would like to add?"
  }
])
  const [departmentTable] = await db.promise().query(`INSERT INTO department (department_name) VALUES (?)` , addADepartmentPrompt.department_name)
  // console.table(departmentTable);
  viewAllDepartments();
};

async function addARole() {
  const addRole = await inquirer.prompt([
    {
      type: "input",
      name: "job_title",
      message: "what is the title of the role you would like to add?"
    },
    {
      type: "input",
      name: "salaries",
      message: "what is the salary of the role you would like to add?"
    },
    {
      type: "number",
      name: "department_id",
      message: "Enter department ID associated with new role (1-6).",
    }
  ])
  const [roleTable] = await db.promise().query(`INSERT INTO role (job_title, salaries, department_id) VALUES (?, ?, ?)`, [addRole.job_title, addRole.salaries, addRole.department_id])
  viewAllRoles();
};

async function addAnEmployee() {
  const addEmployee = await inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "Enter first name of new employee."
    },
    {
      type: "input",
      name: "last_name",
      message: "Enter last name of new employee."
    },
    {
      type: "number",
      name: "role_id",
      message: "Enter role ID associeted with the new employee you want to add (1-9).",
      
    },
    {
      type: "number",
      name: "manager_id",
      message: "Enter manager ID associated with the new employee you want to add (1-3)."
    }
  ])
const [employeeTable] = await db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [addEmployee.first_name, addEmployee.last_name, addEmployee.role_id, addEmployee.manager_id])
viewAllEmployees();
};



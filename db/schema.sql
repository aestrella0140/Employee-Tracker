DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT primary key,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT primary key,
    job_title VARCHAR(30) NOT NULL,
    salaries DECIMAL,
    department_id INT,
    foreign key (department_id) references department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT primary key,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    foreign key (role_id) references role(id),
    manager_id INT,
    foreign key (manager_id) references employee(id)
);
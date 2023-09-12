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
    CONSTRAINT fk_department foreign key (department_id) references department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT primary key,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    CONSTRAINT fk_role foreign key (role_id) references role(id) ON DELETE SET NULL,
    manager_id INT
);
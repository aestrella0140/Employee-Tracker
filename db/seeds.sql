INSERT INTO department (department_name)
VALUES ('Sales'), ('Tech'), ('Marketing'), ('Human Resources'), ('General Management'), ('Manufacturing');

INSERT INTO role (job_title, salaries, department_id)
VALUES ('engineer', 120000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL), ('Mary', 'Jane', 1, NULL), ('Jack', 'Doe', 1, NULL), ('Andres', 'Jimenez', 1, 2), ('Dan', 'Allen', 1, 2), ('David', 'Fuka', 1, 2), ('Sarah', 'Jimenez', 1, 2),('Andres', 'Jimenez', 1, 2), ('Andres', 'Jimenez', 1, 2);
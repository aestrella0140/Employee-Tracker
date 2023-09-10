INSERT INTO department (department_name)
VALUES ('Sales'), ('Tech'), ('Marketing'), ('Human Resources'), ('General Management'), ('Manufacturing');

INSERT INTO role (job_title, salaries, department_id)
VALUES ('engineer', 120000, 2), ('Shift Lead', 67000, 6), ('CFO', 400000, 5), ('Field Salesmen', 85000, 3), ('Manufacturer', 60000, 6), ('Full Stack Developer', 90000, 2), ('Human Resources Generalist', 72000, 4), ('Resource Specialist', 70000, 6),('Sales Representative',55000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL), ('Mary', 'Jane', 1, NULL), ('Jack', 'Doe', 1, NULL), ('Andres', 'Jimenez', 1, 2), ('Dan', 'Allen', 1, 2), ('David', 'Fuka', 1, 2), ('Sarah', 'Hyuga', 1, 2),('Tatiana', 'Alarcon', 3, 2), ('Andrew', 'Estrella', 1, 2);
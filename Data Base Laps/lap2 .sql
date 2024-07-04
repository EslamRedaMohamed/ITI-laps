-- -----------------------------------------lap 2---------------------------------------------------
-- Display the last name concatenated with the job id, separated by a comma and space and name the column [Employee and Title]  as alias
select concat(last_name,', ',job_id) as EmployeeandTitle from employees;
-- Display the last name and salary for all employees whose salary is not in the range of $1500 and $7000.
select last_name,salary from employees where salary not between 1500 and 7000;
-- Display the last name, salary and commission for all employees who earn commissions, Sort data in descending order of salary and commissions.
select last_name,salary,commission_pct from employees where commission_pct > 0 order by salary desc,commission_pct desc; 
-- Display the last name, job id and salary for all employees whose job id is SA_REP or PU_MAN and their salary is equal to $9500, $9000 or $8000 
select last_name ,job_id ,salary from employees where (job_id = 'SA_REP' or job_id = 'PU_MAN' ) and salary in (9500,9000,8000);
-- Display all information about employees whose last name begin with letter 's’
select * from employees where last_name like 's%'; 
-- Display all employees whose first name contains letter before last ‘e’
select * from employees where first_name like '%e_'; 
-- Insert new location with suitable data
insert into  locations(location_id, street_address, postal_code, city, state_province, country_id) 
values (4000, '30 6october', '71371','helwan','cairo','IT');
-- Insert new department with suitable data for this location
insert into  departments(department_id, department_name, manager_id, location_id) 
values (300, 'pr', 200, 4000);
-- Insert new employee with suitable data for this department
insert into  employees(employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id) 
values (207,'eslam','reda','eslamreda.info@gmail.com','01123442408',str_to_date('24-04-2022','%d-%m-%Y'),'IT_PROG',25000,0.20,200,300);
-- Delete the created location
delete from employees where employee_id= 207;

delete from departments where department_id= 300;

delete from locations where location_id= 4000;

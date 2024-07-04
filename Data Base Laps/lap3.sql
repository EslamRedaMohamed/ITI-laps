-- ----------------------------------------lap3--------------------------------------

-- Display the department names and the names of the city  they are in.
select department_name, city
from departments, locations
where departments.location_id = locations.location_id; 

-- Display the department names and the names of the city  they are in.
select emps.first_name as employee_first_name ,emps.last_name as employee_last_name ,mgrs.first_name as manager_first_name ,mgrs.last_name as manager_last_name
from employees emps , employees mgrs
where emps.manager_id = mgrs.employee_id ;
-- Display the department ID, department name, manager ID, and the name of the manager.

select dept.department_id, dept.department_name, dept.manager_id ,emp.last_name as manager_name
from departments dept left outer join employees emp
on dept.manager_id = emp.employee_id;

/* 
    4- Display (Using Union Function)
 a. The last name and the job id of the employees works in dept 30
 b. The last name and the job id of the employees works in dept 60
 */
select last_name, job_id
from employees
where department_id = 30
Union
select last_name, job_id
from employees
where department_id = 60;

-- Display the ID, name, and location of the departments in Roma or Toronto city.

select department_id , department_name, location_id
from  departments
where location_id in (select location_id from locations where city = 'Roma' or city = 'Toronto');

-- Display the full data of the departments with names that start with the letter "a".

select * from departments where department_name like 'a%' ;

-- Display all the employees in department 30 whose salary is between 7000 to 15000.

select * from employees 
where department_id = 30
and salary between 7000 and 15000;

-- Find the names of the employees who directly report to Steven King.

select concat(first_name ,' ', last_name) as employee_full_name
from employees 
where manager_id = (select employee_id from employees where first_name='Steven' and last_name = 'King') ;

-- For each department, list the department name and the total salary (for all employees) spent on that department.

select department_name,sum(salary)
from employees,departments
where employees.department_id = departments.department_id 
group by department_name;

-- Retrieve the names of all employees and the names of the departments they are working in, sorted by the department name.

select concat(first_name ,' ', last_name) as employee_full_name , department_name
from employees , departments
where employees.department_id = departments.department_id
order by department_name;

-- Display the data of the department which has the smallest employee ID over all employees' ID.

select  dept.*
from employees emp, departments dept
where emp.department_id = dept.department_id 
and employee_id = (select min(employee_id) from employees);

-- For each department, retrieve the department name and the maximum, minimum, and average salary of its employees.


select department_name,max(salary),min(salary),avg(salary)
from employees,departments
where employees.department_id = departments.department_id 
group by department_name;

--  For each department, if its average salary is less than the average salary of all employees, display its number, name, and number of its employees.

select employees.department_id,department_name,count(*) as number_of_employees
from employees,departments
where employees.department_id = departments.department_id 
group by department_id , department_name
having avg(salary)< (select avg(salary) from employees);
-- Retrieve a list of employees and the departments they are working in, ordered by department and within each department, ordered alphabetically by last name, first name.

select concat(first_name,' ',last_name) as employee_full_name,department_name,employees.department_id
from employees ,departments
where employees.department_id = departments.department_id 
order by employees.department_id,first_name,last_name;








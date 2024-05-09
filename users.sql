CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100), 
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);


-- 1. BOOK database 
-- 2. books, users tablelar yaratish kerak
-- 3. user -> id , first_name ,last_name, email takrorlanmasin, phone_number;
-- 4. book -> id , name, price, pages,  author_id: user.id bilan bog'lang foriegn key bilan 





    SET NULL
    SET DEFAULT
    RESTRICT
    NO ACTION
    CASCADE
CREATE TABLE course(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100), 
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100), 
  course_id INT,
  FOREIGN KEY (course_id) REFERENCES courses(id)
);


-- ERROR:  insert or update on table "users" violates foreign key constraint "users_department_id_fkey"
-- DETAIL:  Key (department_id)=(10) is not present in table "department".


SELECT * FROM basket_a AS a inner JOIN basket_b AS b  ON  a.fruit_a = b.fruit_b;

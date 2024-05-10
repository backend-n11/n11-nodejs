CREATE TABLE USERS_2 (
   id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL Default 'ali',                                         
   department_id INT,
   FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
);
/*   Books table
      - id
      - name
      - pages
      - price
      - author_id
   Users table
      - id
      - name
      - email
*/
CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL,                                        
   email varchar(100) UNIQUE NOT NULL
);

CREATE TABLE books (
   id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL,                                        
   pages INT NOT NULL,                                        
   price FLOAT NOT NULL,                                        
   author_id INT,
   FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE 
);


CREATE TABLE books (
   id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL,                                        
   pages INT NOT NULL,                                        
   price FLOAT NOT NULL,                                        
   author_id INT,
   FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL 
);


CREATE TABLE books (
   id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL,                                        
   pages INT NOT NULL,                                        
   price FLOAT NOT NULL,                                        
   author_id INT Default 1,
   FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET Default 
);



CREATE TABLE books (
   id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL,                                        
   pages INT NOT NULL,                                        
   price FLOAT NOT NULL,                                        
   author_id INT Default 1,
   FOREIGN KEY (author_id) REFERENCES users(id) ON UPDATE SET NULL 
);

select author_id, COUNT(*), MAX(id), AVG(AUTHOR_ID) from books GROUP BY author_id;





select 
  author_id,
  COUNT(*), 
  MAX(id),
  AVG(ID)
from books 
GROUP BY author_id
 HAVING AVG(ID) >= 3;




select * from books
where author_id  
IN (
   SELECT id 
   FROM users 
   name ILIKE  '%n%'
);






SELECT author_id, COUNT(*), MAX(id), AVG(ID) from books GROUP BY author_id HAVING  COUNT(*) >= 3;
